import { Component } from '@angular/core';
import { BackendHTTPService } from '../../services/backend-http.service';

@Component({
  selector: 'app-player',
  template: `
    <div>
        <div class="embed-responsive embed-responsive-16by9">
            <div id="player"></div>
        </div>
    </div>
    `,
    styles: [
        `.YTiframe: {
            text-align: center;
            padding: 5%;
        }`
    ]
})

export class PlayerComponent {
    player:any;

    constructor (private backend: BackendHTTPService){
        this.player = new Player;

        console.log("Player view is on.");
    }
    ngAfterViewInit(): void {
        
        this.player.Init(this.backend);
    }
}

class Player {
    public YT: any;
    public playlist: object;
    public player: any;
    public backend: BackendHTTPService;
    
    Init (backend: BackendHTTPService) {
        this.backend = backend;
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window['onYouTubeIframeAPIReady'] = (e) => {
            this.YT = window['YT'];
            this.player = new window['YT'].Player('player', {
                playerVars: { 
                    autoplay: 1,
                    controls: 0,
                    disablekb: 0,
                    fs: 0,
                    rel: 0,
                    showinfo: 0
                },
                events: {
                    'onStateChange': this.onPlayerStateChange.bind(this),
                    'onError': this.onPlayerError.bind(this),
                    'onReady': this.onPlayerReady.bind(this)
                }
            });
        }
    }

    onPlayerReady(event) {
            event.target.playVideo();
    };
    onPlayerStateChange(event) {
        switch (event.data) {
            case window['YT'].PlayerState.PAUSED:
                    event.target.playVideo();
                break;
            case window['YT'].PlayerState.ENDED:
                    this.onPlayerError(event);
                break;
            case window['YT'].PlayerState.BUFFERING:
                break;
            case window['YT'].PlayerState.PLAYING:
                break;
            case window['YT'].PlayerState.CUED:
        };
    };

    onPlayerError(event) {
        this.backend.get("api/playlist/next", (err, value) => {
            if (err) { 
                this.onPlayerError(event);
                return;
            }
            event.target.loadVideoById(value.data.id, 0, 'Large');
        });
    };
}   