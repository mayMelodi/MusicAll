import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  template: `
    <div>
        <div class="embed-responsive embed-responsive-16by9">
            <div id="player"></div>
        </div>
    </div>
    `,
})

export class PlayerComponent {
    player:any;

    constructor (){
        this.player = new Player;
        this.player.Init();
    }
}

class Player {
    public YT: any;
    public playlist: object;
    public player: any;
    
    Init () {
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
                    //event.target.loadVideoById(this.nextSong['id'], 0, 'Large');
                break;
            case window['YT'].PlayerState.BUFFERING:
                break;
            case window['YT'].PlayerState.PLAYING:
                break;
            case window['YT'].YT.PlayerState.CUED:
        };
    };

    onPlayerError(event) {
        //2 - Request contains an invalid parameter value
        //100 - Video has been removed
        //101 || 150 - The owner of the requested video does not allow it to be played
        
        console.log("Error: " + event.data);
        //@TODO request next song and play it.
        //event.target.loadVideoById('', 0, 'Large');
    };
}   