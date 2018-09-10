(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route.module */ "./src/app/route.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default.component */ "./src/app/default.component.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/pages/home.component.ts");
/* harmony import */ var _pages_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login.component */ "./src/app/pages/login.component.ts");
/* harmony import */ var _pages_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact-us.component */ "./src/app/pages/contact-us.component.ts");
/* harmony import */ var _pages_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/about.component */ "./src/app/pages/about.component.ts");
/* harmony import */ var _pages_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/register.component */ "./src/app/pages/register.component.ts");
/* harmony import */ var _pages_PlayerStation_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/PlayerStation/player.component */ "./src/app/pages/PlayerStation/player.component.ts");
/* harmony import */ var _pages_RegularUser_user_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/RegularUser/user-home.component */ "./src/app/pages/RegularUser/user-home.component.ts");
/* harmony import */ var _pages_RegularUser_playlist_dsiplay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/RegularUser/playlist-dsiplay.component */ "./src/app/pages/RegularUser/playlist-dsiplay.component.ts");
/* harmony import */ var _pages_RegularUser_add_song_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/RegularUser/add-song.component */ "./src/app/pages/RegularUser/add-song.component.ts");
/* harmony import */ var _services_backend_http_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/backend-http.service */ "./src/app/services/backend-http.service.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/web-socket.service */ "./src/app/services/web-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//----------------------------------//
//            Imports               //
//----------------------------------//







//----------------------------------//
//          Declarations            //
//----------------------------------//





// Player Station Views

//Regular User Views



//----------------------------------//
//            Services              //
//----------------------------------//


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _pages_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _pages_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"],
                _pages_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _pages_PlayerStation_player_component__WEBPACK_IMPORTED_MODULE_16__["PlayerComponent"],
                _pages_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _pages_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _pages_RegularUser_playlist_dsiplay_component__WEBPACK_IMPORTED_MODULE_18__["PlaylistDisplayComponent"],
                _pages_RegularUser_add_song_component__WEBPACK_IMPORTED_MODULE_19__["AddSongComponent"],
                _pages_RegularUser_user_home_component__WEBPACK_IMPORTED_MODULE_17__["UserHomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _route_module__WEBPACK_IMPORTED_MODULE_2__["AppRouteModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YoutubePlayerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB9KcHxuhLNREX9ySyQuvRkQcuyG9BEsrU'
                }),
            ],
            bootstrap: [
                _default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]
            ],
            providers: [
                _services_backend_http_service__WEBPACK_IMPORTED_MODULE_20__["BackendHTTPService"],
                _services_web_socket_service__WEBPACK_IMPORTED_MODULE_21__["WebSocketService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/default.component.css":
/*!***************************************!*\
  !*** ./src/app/default.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/default.component.html":
/*!****************************************!*\
  !*** ./src/app/default.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/default.component.ts":
/*!**************************************!*\
  !*** ./src/app/default.component.ts ***!
  \**************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        this.title = 'MusicAll';
    }
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.css */ "./src/app/default.component.css")]
        })
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/menu.component.css":
/*!************************************!*\
  !*** ./src/app/menu.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Logo {\r\n    width: 100%;\r\n    height:180px;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: block;\r\n    background-image: url('logo.png');\r\n    background-repeat: no-repeat; /* Do not repeat the image */\r\n\r\n    background-position: center; /* Center the image */\r\n    background-size: 180px; /* Resize the background image to cover the entire container */\r\n}\r\n.SideBarMenu {\r\n    width:100%;\r\n    height:calc(100% - 180px);\r\n    margin: 0;\r\n    padding: 0;\r\n    display: block;\r\n    text-align: center;\r\n}\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n    list-style-type: none;\r\n}\r\nli {\r\n    width: 100%;\r\n    padding: 5px 0px;\r\n    align-items: center;\r\n}\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-family: \"Comic Sans MS\";\r\n    font-size: 110%;\r\n}\r\nli:hover {\r\n    background-color: #111;\r\n}\r\nimg {\r\n    width: 50px;\r\n    height:50px;\r\n}"

/***/ }),

/***/ "./src/app/menu.component.html":
/*!*************************************!*\
  !*** ./src/app/menu.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"Logo\"></section>\r\n<section class=\"SideBarMenu\">\r\n    <ul>\r\n        <li>\r\n            <a routerLink=\"/home\" href=\"#\">Home</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/contact\" href=\"#\">Contact Us</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/about\" href=\"#\">About</a>\r\n        </li>\r\n        <li *ngIf=\"!isloggedin()\">\r\n            <a routerLink=\"/login\" href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span>  Login</a>\r\n        </li>\r\n        <li *ngIf=\"isloggedin()\">\r\n            <a routerLink=\"/login\" href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span>  Logout</a>\r\n        </li>\r\n        <li *ngIf=\"!isloggedin()\">\r\n            <a routerLink=\"/register\" href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>  Register</a>\r\n        </li>\r\n    </ul> \r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/menu.component.ts":
/*!***********************************!*\
  !*** ./src/app/menu.component.ts ***!
  \***********************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent.prototype.isloggedin = function () {
        if (!localStorage.getItem('userToken'))
            return false;
        else
            return true;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models/action.ts":
/*!**********************************!*\
  !*** ./src/app/models/action.ts ***!
  \**********************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action;
(function (Action) {
    Action["ADD"] = "add";
    Action["REMOVE"] = "remove";
    Action["STOP"] = "stop";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.firstname = null;
        this.lastname = null;
        this.email = null;
        this.password = null;
    }
    User.prototype.toJson = function () {
        return {
            "email": this.email,
            "password": this.password,
            "firstname": this.firstname,
            "lastname": this.lastname
        };
    };
    User.prototype.fromJson = function (json) {
        this.email = json.email;
        this.password = json.password;
        this.firstname = json.firstname;
        this.lastname = json.lastname;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/pages/PlayerStation/player.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/PlayerStation/player.component.ts ***!
  \*********************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backend-http.service */ "./src/app/services/backend-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(backend) {
        this.backend = backend;
        this.player = new Player;
        this.player.Init(backend);
    }
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: "\n    <div>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n            <div id=\"player\"></div>\n        </div>\n    </div>\n    ",
            styles: [
                ".YTiframe: {\n            text-align: center;\n            padding: 5%;\n        }"
            ]
        }),
        __metadata("design:paramtypes", [_services_backend_http_service__WEBPACK_IMPORTED_MODULE_1__["BackendHTTPService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());

var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.Init = function (backend) {
        var _this = this;
        this.backend = backend;
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window['onYouTubeIframeAPIReady'] = function (e) {
            _this.YT = window['YT'];
            _this.player = new window['YT'].Player('player', {
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disablekb: 0,
                    fs: 0,
                    rel: 0,
                    showinfo: 0
                },
                events: {
                    'onStateChange': _this.onPlayerStateChange.bind(_this),
                    'onError': _this.onPlayerError.bind(_this),
                    'onReady': _this.onPlayerReady.bind(_this)
                }
            });
        };
    };
    Player.prototype.onPlayerReady = function (event) {
        event.target.playVideo();
    };
    ;
    Player.prototype.onPlayerStateChange = function (event) {
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
        }
        ;
    };
    ;
    Player.prototype.onPlayerError = function (event) {
        var _this = this;
        this.backend.get("api/playlist/next", function (err, value) {
            if (err) {
                _this.onPlayerError(event);
                return;
            }
            event.target.loadVideoById(value.data.id, 0, 'Large');
        });
    };
    ;
    return Player;
}());


/***/ }),

/***/ "./src/app/pages/RegularUser/add-song.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/RegularUser/add-song.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"url\"] {\r\n  background-color: transparent;\r\n  border-width: 0px 0px 1px 0px;\r\n  border-color:rgb(133, 133, 133);\r\n  width: 70%;\r\n  height: 25px;\r\n  font-size: 14px;\r\n  position:absolute;\r\n  margin: 0;\r\n  bottom: 0;\r\n  color: #ffffff\r\n}\r\n\r\ninput[type=\"url\"]:focus {\r\n  outline: 0 none;\r\n}\r\n\r\n.input-component {\r\n  padding: 2%;\r\n  height: 40px;\r\n  position: inherit;\r\n}\r\n\r\nlabel {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: rgb(133, 133, 133);\r\n  transition: 0.5s;\r\n  -moz-transition: 0.5s; /* Firefox 4 */\r\n  -webkit-transition: 0.5s; /* Safari and Chrome */\r\n  -o-transition: 0.5s;\r\n  position: absolute;\r\n  bottom: 0px,\r\n}\r\n\r\nbutton {\r\n  right: 0px;\r\n  bottom: 0px;\r\n  position:absolute;\r\n  width: 20%;\r\n}"

/***/ }),

/***/ "./src/app/pages/RegularUser/add-song.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/RegularUser/add-song.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"alert bg-dark table\">\r\n    <div clss=\"row\">\r\n        <form>\r\n            <div class=\"input-component\" style=\"position: relative;\">\r\n                <input type=\"url\" name=\"url\" (focus)=\"inputOnBlur()\" (focusout)=\"inputOnBlurOut()\" [(ngModel)]=\"url\" [ngStyle]=\"inputStyle\"/>\r\n                <label [ngStyle]=\"textStyle\">Enter link</label>\r\n                <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"onSubmitNewSong()\">Send</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!isEmpty\" clss=\"row\" style=\"color: red; padding-left: 2%;\">\r\n        * Youtube link cannot be empty.\r\n    </div>\r\n    <div [hidden]=\"!isValid\" clss=\"row\" style=\"color: red; padding-left: 2%;\">\r\n        * invalid youtube link.\r\n    </div>\r\n    <div [hidden]=\"!isNotSent\" clss=\"row\" style=\"color: red; padding-left: 2%;\">\r\n        Something went worng while trying to send your request. please try again later.\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/RegularUser/add-song.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/RegularUser/add-song.component.ts ***!
  \*********************************************************/
/*! exports provided: URL, AddSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongComponent", function() { return AddSongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backend-http.service */ "./src/app/services/backend-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = /** @class */ (function () {
    function URL(url) {
        if (url)
            this.link = url;
    }
    URL.prototype.toJson = function () { return { "url": this.link }; };
    URL.prototype.fromJson = function (json) { this.link = json.url; };
    return URL;
}());

var AddSongComponent = /** @class */ (function () {
    function AddSongComponent(backend, router) {
        this.backend = backend;
        this.router = router;
        this.urlValidator = new RegExp(/^((http[s]?\:\/\/){0,1}([Ww][Ww][Ww]\.)){0,1}[Yy][Oo][Uu][Yt][Uu][Bb][Ee]\.[Cc][Oo][Mm]\/(([Ww]atch\?v=)|([vV]\/))(...........)/g);
    }
    AddSongComponent.prototype.ngOnInit = function () {
        this.url = "";
        this.isNotSent = false;
        this.isEmpty = false;
        this.isValid = false;
        this.textStyle = {};
        this.inputStyle = {};
        this.inputOnBlurOut();
    };
    AddSongComponent.prototype.onSubmitNewSong = function () {
        var _this = this;
        if (!this.url || this.url == "") {
            this.isEmpty = true;
            return;
        }
        else {
            this.isEmpty = false;
        }
        if (!this.urlValidator.test(this.url)) {
            this.isValid = true;
            return;
        }
        else {
            this.isValid = false;
        }
        this.backend.post("api/playlist/add", new URL(this.url), function (err, value) {
            if (err) {
                console.log(err);
                _this.isNotSent = true;
            }
            else {
                _this.url = "";
                _this.inputOnBlurOut();
                _this.isNotSent = false;
                console.log(value);
            }
        });
    };
    AddSongComponent.prototype.inputOnBlur = function () {
        if (this.url == "") {
            this.textStyle['font-size'] = "10px";
            this.textStyle['bottom'] = "100%";
            this.inputStyle['color'] = '#ffffff';
        }
    };
    AddSongComponent.prototype.inputOnBlurOut = function () {
        if (this.url == "") {
            this.textStyle['font-size'] = "36px";
            this.textStyle['bottom'] = "0px";
            this.inputStyle['color'] = "transparent";
        }
    };
    AddSongComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-song-component',
            template: __webpack_require__(/*! ./add-song.component.html */ "./src/app/pages/RegularUser/add-song.component.html"),
            styles: [__webpack_require__(/*! ./add-song.component.css */ "./src/app/pages/RegularUser/add-song.component.css")],
        }),
        __metadata("design:paramtypes", [_services_backend_http_service__WEBPACK_IMPORTED_MODULE_2__["BackendHTTPService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddSongComponent);
    return AddSongComponent;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/playlist-display.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/RegularUser/playlist-display.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  "

/***/ }),

/***/ "./src/app/pages/RegularUser/playlist-display.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/RegularUser/playlist-display.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table mat-table #playlisy [dataSource]=\"dataSource\" class=\"table\">\n      \n      <!-- Image Column -->\n      <ng-container matColumnDef=\"picture\">\n          <mat-header-cell *matHeaderCellDef=\"let element\" style=\"flex: 0 0 200px;\"></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" style=\"flex: 0 0 200px;\"><img [src]=\"element.picture.url\" [width]=\"element.picture.width\" [height]=\"element.picture.height\" /></mat-cell>\n      </ng-container >\n      \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"title\">\n          <mat-header-cell *matHeaderCellDef=\"let element\"><strong> Title </strong></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{element.title}}</mat-cell>\n      </ng-container >\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"duration\">\n          <mat-header-cell *matHeaderCellDef=\"let element\" style=\"flex: 0 0 200px;\"><strong> Duration </strong></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" style=\"flex: 0 0 200px;\">{{element.duration}}</mat-cell>\n      </ng-container >\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"alert text-white\" style=\"background-color: #f140ad; border-color: transparent;\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"alert text-white bg-dark\" style=\"border-color: transparent;\"></mat-row>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/RegularUser/playlist-dsiplay.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/RegularUser/playlist-dsiplay.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlaylistDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistDisplayComponent", function() { return PlaylistDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/action */ "./src/app/models/action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistDisplayComponent = /** @class */ (function () {
    function PlaylistDisplayComponent(socketService) {
        this.socketService = socketService;
        this.displayedColumns = ['picture', 'title', 'duration'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
    }
    PlaylistDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.socketService.getQuotes()
            .subscribe(function (value) {
            console.log(value);
            if (value.action == _models_action__WEBPACK_IMPORTED_MODULE_3__["Action"].ADD) {
                _this.dataSource.data.push(value.data);
            }
            if (value.action == _models_action__WEBPACK_IMPORTED_MODULE_3__["Action"].REMOVE) {
                _this.dataSource.data.shift();
            }
            _this.dataSource._updateChangeSubscription();
        });
    };
    PlaylistDisplayComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlaylistDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playlist-display',
            template: __webpack_require__(/*! ./playlist-display.component.html */ "./src/app/pages/RegularUser/playlist-display.component.html"),
            styles: [__webpack_require__(/*! ./playlist-display.component.css */ "./src/app/pages/RegularUser/playlist-display.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])
    ], PlaylistDisplayComponent);
    return PlaylistDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/user-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/RegularUser/user-home.component.ts ***!
  \**********************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent() {
    }
    UserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-home',
            template: "\n  <div class=\"table-container\" style=\"margin: 2%\">\n    <div class=\"row w-100%\" style=\"overflow: auto;\">\n      <div class=\"col-md-12\" style=\"overflow: auto;\">\n        <app-playlist-display></app-playlist-display>\n      </div>\n    </div>\n    <div class=\"row align-items-center\" style=\"height: 10%;\">\n      <div class=\"col\">\n        <add-song-component></add-song-component>\n      </div>\n    </div>\n  </div>\n  ",
            styles: [""],
        })
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n    width: 90%;\r\n    margin: 0;\r\n    left: 5%;\r\n    position: relative;\r\n    margin-right: 5%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/about.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--    Info card    -->\n  <div class=\"card text-white mb-3\" style=\"width: 90%; position: relative; margin: 5%; background-color: #ff6ec7;\">\n    <div class=\"card-header\"><h5>About Us</h5></div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">MusicAll</h5>\n      <p class=\"card-text\">\"There is nothing better than a good lie\" - Evenecense</p>\n    </div>\n  </div>\n  <!--    Map    -->\n  <div>\n    <agm-map [latitude]=\"32.1\" [longitude]=\"35\" [zoom]=\"10\">\n            <agm-marker *ngFor=\"let location of locations\" [latitude]=\"location.latitude\" [longitude]=\"location.longitude\">\n                <agm-info-window *ngIf=\"location.description\">{{location.description}}</agm-info-window>\n            </agm-marker>\n    </agm-map>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.locations = [];
        this.locations.push({ latitude: 32.086068, longitude: 34.774538, description: "Headquarter" });
        this.locations.push({ latitude: 32.1202729, longitude: 34.8381131, description: "Omer" });
        this.locations.push({ latitude: 32.0762145, longitude: 34.8463699, description: "May" });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-us.component.css":
/*!************************************************!*\
  !*** ./src/app/pages/contact-us.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact-us.component.html":
/*!*************************************************!*\
  !*** ./src/app/pages/contact-us.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; padding: 5%; max-width: 60%;\">\n    <div class=\"card text-white bg-dark mb-3\">\n        <div class=\"card-header\" style=\"text-align: center;\">\n            <h1>Contacs us</h1>\n        </div>\n        <div class=\"card-body\">\n            <div [hidden]=\"submitted\">\n                <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit(contactForm)\">\n                    <div class=\"form-row\">\n                        <div class=\"col-md-6 mb-3\">\n                            <label for=\"FirstNameInput\">First name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"FirstNameInput\" name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"model.firstname\" placeholder=\"First name\" required>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <label for=\"LastNameInput\">Last name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"LastNameInput\" name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"model.lastname\" placeholder=\"Last name\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"col-md-12 mb-3\">\n                            <label for=\"EmailInput\" data-error=\"Invalid email!\">Email</label>\n                            <input type=\"email\" class=\"form-control\" id=\"EmailInput\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" [pattern]=\"emailPattern\" placeholder=\"Email\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"col-md-12 mb-3\">\n                            <label for=\"messageInput\">Message</label>\n                            <textarea class=\"form-control\" id=\"messageInput\" name=\"message\" #message=\"ngModel\" [(ngModel)]=\"model.message\" placeholder=\"Type your message here\" required></textarea>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"form-row\">\n                        <div class=\"col-md-12 mb-3\">\n                            <button type=\"submit\" [disabled]=\"!contactForm.valid\" class=\"btn btn-secondary btn-block\"><b> S u b m i t </b></button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div [hidden]=\"!submitted\">\n                 Thank you for contact us. Our support team will contact you if needed.\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/contact-us.component.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/contact-us.component.ts ***!
  \***********************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$";
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.model = {
            firstname: "",
            lastname: "",
            email: "",
            message: ""
        };
        this.submitted = false;
    };
    ContactUsComponent.prototype.onSubmit = function (form) {
        this.submitted = true;
        console.log(JSON.stringify(this.model));
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/contact-us.component.css")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());

var ContactDetails = /** @class */ (function () {
    function ContactDetails() {
        this.firstname = null;
        this.lastname = null;
        this.email = null;
        this.message = null;
    }
    return ContactDetails;
}());


/***/ }),

/***/ "./src/app/pages/home.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home.component.ts ***!
  \*****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: "<app-user-home></app-user-home>",
            styles: [""],
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; padding: 5%; max-width: 60%;\" [hidden]=\"!this.logStatus\">\r\n  <div class=\"card text-white bg-dark mb-3\">\r\n      <div class=\"card-header\" style=\"text-align: center;\">\r\n          <h1>Log In To Your Account</h1>\r\n      </div>\r\n      <div class=\"card-body\">\r\n          <div [hidden]=\"submitted\">\r\n              <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmitLogin(loginForm)\">\r\n                <div class=\"form-row\">\r\n                      <div class=\"col-md-12 mb-3\">\r\n                          <label for=\"emailInput\">Email</label>\r\n                          <input type=\"email\" class=\"form-control\" id=\"emailInput\" name=\"email\" #UserName=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" required>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-md-12 mb-3\">\r\n                        <label for=\"passwordInput\" data-error=\"Invalid Password, Please try again\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"passwordInput\" name=\"password\" #Password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"form-row\">\r\n                    <div class=\"col-md-12 mb-3\">\r\n                        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-secondary btn-block\"><b> S u b m i t </b></button>\r\n                    </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"margin: auto; padding: 5%; max-width: 60%;\" [hidden]=\"this.logStatus\">\r\n    <div class=\"card text-white bg-dark mb-3\">\r\n        <div class=\"card-header\" style=\"text-align: center;\">\r\n            <h2>Are you sure you're want to logout?</h2>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"col-md-6 mb-6\" style=\"margin: auto;\">\r\n                <button class=\"btn btn-secondary btn-block\" (click)=\"onSubmitLogout()\"><b> Y e s </b></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_backend_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-http.service */ "./src/app/services/backend-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(backend, router) {
        this.backend = backend;
        this.router = router;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$";
        if (localStorage.getItem('userToken'))
            this.logStatus = false;
        else
            this.logStatus = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.model.email = "",
            this.model.password = "";
    };
    LoginComponent.prototype.onSubmitLogin = function (form) {
        var _this = this;
        console.log("** --- Login Proccess --- ***");
        this.backend.post("api/login", this.model, function (err, value) {
            if (err)
                console.log(err);
            else {
                localStorage.setItem('userToken', value.data.token);
                _this.logStatus = true;
                _this.router.navigate(['/home']);
            }
        });
    };
    LoginComponent.prototype.onSubmitLogout = function () {
        var _this = this;
        console.log("** --- Logout Proccess --- ***");
        this.backend.get("api/logout", function (err, value) {
            if (err)
                console.log(err);
            else {
                localStorage.removeItem('userToken');
                _this.logStatus = false;
                _this.router.navigate(['/home']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_backend_http_service__WEBPACK_IMPORTED_MODULE_2__["BackendHTTPService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/register.component.css":
/*!**********************************************!*\
  !*** ./src/app/pages/register.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/register.component.html":
/*!***********************************************!*\
  !*** ./src/app/pages/register.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/register.component.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/register.component.ts ***!
  \*********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/route.module.ts":
/*!*********************************!*\
  !*** ./src/app/route.module.ts ***!
  \*********************************/
/*! exports provided: AppRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouteModule", function() { return AppRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/pages/home.component.ts");
/* harmony import */ var _pages_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-us.component */ "./src/app/pages/contact-us.component.ts");
/* harmony import */ var _pages_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about.component */ "./src/app/pages/about.component.ts");
/* harmony import */ var _pages_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login.component */ "./src/app/pages/login.component.ts");
/* harmony import */ var _pages_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register.component */ "./src/app/pages/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'home', component: _pages_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'contact', component: _pages_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: 'about', component: _pages_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'login', component: _pages_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _pages_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    // { path: '**', component: PageNotFoundComponent }
];
var AppRouteModule = /** @class */ (function () {
    function AppRouteModule() {
    }
    AppRouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRouteModule);
    return AppRouteModule;
}());



/***/ }),

/***/ "./src/app/services/backend-http.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/backend-http.service.ts ***!
  \**************************************************/
/*! exports provided: BackendHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendHTTPService", function() { return BackendHTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackendHTTPService = /** @class */ (function () {
    function BackendHTTPService(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    BackendHTTPService.prototype.post = function (uri, resource, callback) {
        var _token = localStorage.getItem('userToken') || '';
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-type': 'application/json', 'X-Auth-Token': _token });
        console.log(_headers);
        return this.http.post("" + this.baseURL + uri, resource.toJson(), { headers: _headers })
            .subscribe({
            next: function (value) {
                callback(false, value);
            },
            error: function (err) {
                callback(err, false);
            }
        });
    };
    BackendHTTPService.prototype.get = function (uri, callback) {
        var _token = localStorage.getItem('userToken') || '';
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-type': 'application/json', 'X-Auth-Token': _token });
        return this.http.get("" + this.baseURL + uri, { headers: _headers })
            .subscribe({
            next: function (value) {
                console.log(localStorage);
                callback(false, value);
            },
            error: function (err) {
                callback(err, false);
            }
        });
    };
    BackendHTTPService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BackendHTTPService);
    return BackendHTTPService;
}());



/***/ }),

/***/ "./src/app/services/web-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SERVER_WS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL + "playlist";
var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.getQuotes = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(SERVER_WS_URL);
        this.socket.on('update', function (res) {
            _this.observer.next(res);
        });
        return this.createObservable();
    };
    WebSocketService.prototype.createObservable = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.observer = observer;
        });
    };
    WebSocketService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Socket.io server error');
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseURL: "http://localhost/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Omer\Studies\MusicAll\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map