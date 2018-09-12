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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_RegularUser_viewer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/RegularUser/viewer.module */ "./src/app/pages/RegularUser/viewer.module.ts");
/* harmony import */ var _pages_PlayerView_player_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/PlayerView/player.module */ "./src/app/pages/PlayerView/player.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default.component */ "./src/app/default.component.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _services_server_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/server-handler.service */ "./src/app/services/server-handler.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");
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



//----------------------------------//
//            Services              //
//----------------------------------//



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _route_module__WEBPACK_IMPORTED_MODULE_2__["AppRouteModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _pages_RegularUser_viewer_module__WEBPACK_IMPORTED_MODULE_6__["ViewerModule"],
                _pages_PlayerView_player_module__WEBPACK_IMPORTED_MODULE_7__["PlayerModule"]
            ],
            bootstrap: [
                _default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"]
            ],
            providers: [
                _services_server_handler_service__WEBPACK_IMPORTED_MODULE_11__["ServerHandlerService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
                _services_player_service__WEBPACK_IMPORTED_MODULE_13__["PlayerService"]
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

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n"

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

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
        this.player = false;
        if (!this.auth.Privileges || !this.auth.Privileges.length) {
            this.player = false;
        }
        else {
            if (this.auth.Privileges.indexOf("player") < 0)
                this.player = false;
            else
                this.player = true;
        }
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: "\n    <app-user-home *ngIf=\"!player\"></app-user-home>\n    <app-player *ngIf=\"player\"></app-player>\n  ",
            styles: [""],
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu.component.css":
/*!************************************!*\
  !*** ./src/app/menu.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Logo {\r\n    width: 100%;\r\n    height:180px;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: block;\r\n    background-image: url('logo.png');\r\n    background-repeat: no-repeat; /* Do not repeat the image */\r\n    background-position: center; /* Center the image */\r\n    background-size: 100px; /* Resize the background image to cover the entire container */\r\n    background-color: #000;\r\n}\r\n.SideBarMenu {\r\n    width:100%;\r\n    height:calc(100% - 180px);\r\n    margin: 0;\r\n    padding: 0;\r\n    display: block;\r\n    text-align: center;\r\n}\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    list-style-type: none;\r\n}\r\nli {\r\n    width: 100%;\r\n    padding: 5px 0px;\r\n    align-items: center;\r\n}\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-family: \"Comic Sans MS\";\r\n    font-size: 110%;\r\n}\r\nli:hover {\r\n    background-color: #111;\r\n}\r\nimg {\r\n    width: 50px;\r\n    height:50px;\r\n}"

/***/ }),

/***/ "./src/app/menu.component.html":
/*!*************************************!*\
  !*** ./src/app/menu.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"Logo\"></section>\r\n<section class=\"SideBarMenu\" style=\"background-color: #000\">\r\n    <ul>\r\n        <li>\r\n            <a routerLink=\"/home\">Home</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/contact\">Contact Us</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/about\">About</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/discover\">Discover Your Music</a>\r\n        </li>\r\n        <li *ngIf=\"!isloggedin()\">\r\n            <a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span>  Login</a>\r\n        </li>\r\n        <li *ngIf=\"!isloggedin()\">\r\n            <a routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span>  Register</a>\r\n        </li>\r\n        <li *ngIf=\"isloggedin()\">\r\n            <a routerLink=\"/login\">Logout</a>\r\n        </li>\r\n    </ul> \r\n</section>\r\n\r\n"

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
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
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
    function MenuComponent(_auth) {
        this._auth = _auth;
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent.prototype.isloggedin = function () {
        return this._auth.isLoggedIn();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models/Link.ts":
/*!********************************!*\
  !*** ./src/app/models/Link.ts ***!
  \********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
var Link = /** @class */ (function () {
    function Link(url) {
        if (url)
            this.link = url;
    }
    Link.prototype.toJson = function () { return { "url": this.link }; };
    Link.prototype.fromJson = function (json) { this.link = json.url; };
    return Link;
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

/***/ "./src/app/models/contact-derails.ts":
/*!*******************************************!*\
  !*** ./src/app/models/contact-derails.ts ***!
  \*******************************************/
/*! exports provided: ContactDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetails", function() { return ContactDetails; });
var ContactDetails = /** @class */ (function () {
    function ContactDetails() {
        this.firstname = null;
        this.lastname = null;
        this.email = null;
        this.message = null;
    }
    ContactDetails.prototype.toJson = function () {
        return {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "email": this.email,
            "message": this.message,
        };
    };
    ContactDetails.prototype.fromJson = function (json) {
        this.firstname = json['firstname'];
        this.lastname = json['lastname'];
        this.email = json['email'];
        this.message = json['message'];
    };
    return ContactDetails;
}());



/***/ }),

/***/ "./src/app/models/http-response-object.ts":
/*!************************************************!*\
  !*** ./src/app/models/http-response-object.ts ***!
  \************************************************/
/*! exports provided: HttpResponseObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseObject", function() { return HttpResponseObject; });
var HttpResponseObject = /** @class */ (function () {
    function HttpResponseObject(code, message, data) {
        this._code = code;
        this._message = message;
        this._data = data;
    }
    Object.defineProperty(HttpResponseObject.prototype, "code", {
        get: function () { return this._code; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpResponseObject.prototype, "message", {
        get: function () { return this._message; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpResponseObject.prototype, "data", {
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    return HttpResponseObject;
}());



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
        this.privileges = null;
    }
    User.prototype.toJson = function () {
        return {
            "email": this.email,
            "password": this.password,
            "firstname": this.firstname,
            "lastname": this.lastname,
            "privileges": this.privileges
        };
    };
    User.prototype.fromJson = function (json) {
        this.email = json.email;
        this.password = null;
        this.firstname = json.firstname || json.first;
        this.lastname = json.lastname || json.last;
        this.privileges = json.privileges;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/pages/PlayerView/player.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/PlayerView/player.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
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
    }
    PlayerComponent.prototype.ngAfterViewInit = function () {
        this.player.Init(this.backend);
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: "\n    <div>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n            <div id=\"player\"></div>\n        </div>\n    </div>\n    ",
            styles: [
                ".YTiframe: {\n            text-align: center;\n            padding: 5%;\n        }"
            ]
        }),
        __metadata("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
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
        this.backend.nextSong()
            .subscribe({
            next: function (value) {
                event.target.loadVideoById(value.data['id'], 0, 'Large');
            },
            error: function () { return _this.onPlayerError(event); }
        });
    };
    ;
    return Player;
}());


/***/ }),

/***/ "./src/app/pages/PlayerView/player.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/PlayerView/player.module.ts ***!
  \***************************************************/
/*! exports provided: PlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.component */ "./src/app/pages/PlayerView/player.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _player_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.routing */ "./src/app/pages/PlayerView/player.routing.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _player_routing__WEBPACK_IMPORTED_MODULE_4__["PlayerRoutes"]
            ],
            declarations: [
                _player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"]
            ],
            providers: [
                _services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]
            ],
            exports: [
                _player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"]
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ }),

/***/ "./src/app/pages/PlayerView/player.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/PlayerView/player.routing.ts ***!
  \****************************************************/
/*! exports provided: PlayerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerRoutes", function() { return PlayerRoutes; });
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.component */ "./src/app/pages/PlayerView/player.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var PlayerRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
    { path: '', component: _player_component__WEBPACK_IMPORTED_MODULE_0__["PlayerComponent"] },
]);


/***/ }),

/***/ "./src/app/pages/RegularUser/about.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/RegularUser/about.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n    width: 90%;\r\n    margin: 0;\r\n    left: 5%;\r\n    position: relative;\r\n    margin-right: 5%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/RegularUser/about.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/RegularUser/about.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--    Info card    -->\n  <div class=\"card text-white mb-3\" style=\"width: 90%; position: relative; margin: 5%; background-color: #ff6ec7;\">\n    <div class=\"card-header\"><h5>About Us</h5></div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">MusicAll</h5>\n      <p class=\"card-text\">\"There is nothing better than a good lie\" - Evenecense</p>\n    </div>\n  </div>\n  <!--    Map    -->\n  <div>\n    <agm-map [latitude]=\"32.1\" [longitude]=\"35\" [zoom]=\"10\">\n            <agm-marker *ngFor=\"let location of locations\" [latitude]=\"location.latitude\" [longitude]=\"location.longitude\">\n                <agm-info-window *ngIf=\"location.description\">{{location.description}}</agm-info-window>\n            </agm-marker>\n    </agm-map>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/RegularUser/about.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/RegularUser/about.component.ts ***!
  \******************************************************/
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
        this.locations.push({ latitude: 32.0368303, longitude: 34.8885722, description: "Yulia" });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/RegularUser/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/RegularUser/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/add-song.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/RegularUser/add-song.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"url\"] {\r\n  background-color: transparent;\r\n  border-width: 0px 0px 1px 0px;\r\n  border-color:rgb(133, 133, 133);\r\n  width: 70%;\r\n  height: 25px;\r\n  font-size: 14px;\r\n  position:absolute;\r\n  margin: 0;\r\n  bottom: 0;\r\n  color: #ffffff\r\n}\r\n\r\ninput[type=\"url\"]:focus {\r\n  outline: 0 none;\r\n}\r\n\r\n.input-component {\r\n  padding: 2%;\r\n  height: 40px;\r\n  position: inherit;\r\n}\r\n\r\nlabel {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: rgb(133, 133, 133);\r\n  transition: 0.5s;\r\n  -moz-transition: 0.5s; /* Firefox 4 */\r\n  -webkit-transition: 0.5s; /* Safari and Chrome */\r\n  -o-transition: 0.5s;\r\n  position: absolute;\r\n  bottom: 0px;\r\n  font-family: 'Courier New';\r\n}\r\n\r\nbutton {\r\n  right: 0px;\r\n  bottom: 0px;\r\n  position:absolute;\r\n  width: 20%;\r\n}"

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
/*! exports provided: AddSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongComponent", function() { return AddSongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        this.backend.addSong(this.url)
            .subscribe({
            next: function () {
                _this.url = "";
                _this.inputOnBlurOut();
                _this.isNotSent = false;
            },
            error: function () { return _this.isNotSent = true; }
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
        __metadata("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddSongComponent);
    return AddSongComponent;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/contact-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/pages/RegularUser/contact-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/RegularUser/contact-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/RegularUser/contact-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; padding: 5%; max-width: 60%;\">\n    <div class=\"card text-white bg-dark mb-3\">\n        <div class=\"card-header\" style=\"text-align: center;\">\n            <h1>Contacs us</h1>\n        </div>\n        <div class=\"card-body\">\n            <div [hidden]=\"submitted\">\n                <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit(contactForm)\">\n                    <div class=\"form-row\">\n                        <div class=\"col-md-6 mb-3\">\n                            <label for=\"FirstNameInput\">First name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"FirstNameInput\" name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"model.firstname\" placeholder=\"First name\" required>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <label for=\"LastNameInput\">Last name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"LastNameInput\" name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"model.lastname\" placeholder=\"Last name\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"col-md-12 mb-3\">\n                            <label for=\"EmailInput\" data-error=\"Invalid email!\">Email</label>\n                            <input type=\"email\" class=\"form-control\" id=\"EmailInput\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" [pattern]=\"emailPattern\" placeholder=\"Email\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"col-md-12 mb-3\">\n                            <label for=\"messageInput\">Message</label>\n                            <textarea class=\"form-control\" id=\"messageInput\" name=\"message\" #message=\"ngModel\" [(ngModel)]=\"model.message\" placeholder=\"Type your message here\" required></textarea>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"form-row\">\n                        <div class=\"col-md-12 mb-3\">\n                            <button type=\"submit\" [disabled]=\"!contactForm.valid\" class=\"btn btn-secondary btn-block\"><b> S u b m i t </b></button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div [hidden]=\"!submitted\">\n                 Thank you for contact us. Our support team will contact you if needed.\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/RegularUser/contact-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/RegularUser/contact-us.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_contact_derails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/contact-derails */ "./src/app/models/contact-derails.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(auth, contact) {
        this.auth = auth;
        this.contact = contact;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.model = new _models_contact_derails__WEBPACK_IMPORTED_MODULE_1__["ContactDetails"];
        try {
            this.model.fromJson({
                firstname: this.auth.FirtName,
                lastname: this.auth.Lastname,
                email: this.auth.Email,
                message: ""
            });
        }
        catch (_a) { }
        this.submitted = false;
        this.error = null;
    };
    ContactUsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid)
            this.contact.send(this.model).subscribe({
                next: function () {
                    _this.ngOnInit();
                    _this.submitted = true;
                },
                error: function (err) {
                    _this.error = err;
                }
            });
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/RegularUser/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/RegularUser/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/discover.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/RegularUser/discover.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/RegularUser/discover.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/RegularUser/discover.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  discover works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/RegularUser/discover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/RegularUser/discover.component.ts ***!
  \*********************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
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

var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent() {
    }
    DiscoverComponent.prototype.ngOnInit = function () {
    };
    DiscoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! ./discover.component.html */ "./src/app/pages/RegularUser/discover.component.html"),
            styles: [__webpack_require__(/*! ./discover.component.css */ "./src/app/pages/RegularUser/discover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/RegularUser/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/RegularUser/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/RegularUser/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; padding: 5%; max-width: 60%\" [hidden]=\"isLogged()\">\r\n    <div class=\"card bg-dark text-white mb-3\">\r\n        <div class=\"card-header\" style=\"text-align: center;\">\r\n            <h1>Log In To Your Account</h1>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div [hidden]=\"submitted\">\r\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmitLogin(loginForm)\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"EmailInput\">Email</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"EmailInput\" name=\"email\" #UserName=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-md-12 mb-3\">\r\n                          <label for=\"PasswordInput\" data-error=\"Invalid Password, Please try again\">Password</label>\r\n                          <input type=\"password\" class=\"form-control\" id=\"PasswordInput\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div style=\"color: tomato;\">\r\n                        <p *ngIf=\"this.errorCode == 401\">Login failed. please try again</p>\r\n                        <p *ngIf=\"this.errorCode === 400\">You enter wrong username or password. please try again</p>\r\n                        <p *ngIf=\"this.errorCode == 500\">Something went wrong with the server. please try again later.</p>\r\n                        <p *ngIf=\"this.errorCode == 0\">General error. please try again later.</p>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <button type=\"login\" [disabled]=\"!loginForm.valid\" class=\"btn btn-secondary btn-block\"><b> LOGIN </b></button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div style=\"margin: auto; padding: 5%; max-width: 60%;\" [hidden]=\"!isLogged()\">\r\n    <div class=\"card text-white bg-dark mb-3\">\r\n        <div class=\"card-header\" style=\"text-align: center;\">\r\n            <h2>Are you sure you're want to logout?</h2>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"col-md-6 mb-6\" style=\"margin: auto;\">\r\n                <button class=\"btn btn-secondary btn-block\" (click)=\"onSubmitLogout()\"><b> Y e s </b></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/RegularUser/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/RegularUser/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
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
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        this.errorCode = -1;
        this.emailPattern = new RegExp("^[a-z0-9\.\_\%\+\-]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z\.]{2,5}$");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.model.email = "",
            this.model.password = "";
    };
    LoginComponent.prototype.isLogged = function () { return this.auth.isLoggedIn(); };
    LoginComponent.prototype.onSubmitLogin = function (form) {
        var _this = this;
        if (this.emailPattern.test(this.model.email)) {
            this.auth.authenticate(this.model.email, this.model.password)
                .subscribe({
                next: function () { _this.router.navigate(['/home']); },
                error: function () { _this.errorCode = _this.auth.errorCode(); }
            });
        }
        else {
            // @TODO email verification
        }
    };
    LoginComponent.prototype.onSubmitLogout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { _this.router.navigate(['/home']); }, function () { _this.errorCode = _this.auth.errorCode(); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/RegularUser/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/RegularUser/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/playlist-display.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/RegularUser/playlist-display.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n    background-color: #f140ad;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    font: 20px bold;\r\n    font-family: 'Comic Sans MS';\r\n    margin-top: 1%;\r\n    border-radius: 4px;\r\n}\r\n\r\n.songDisplay {\r\n    background-color: #343a40!important;\r\n    color: rgb(133, 133, 133);\r\n    border: 0px solid transparent;\r\n    font: 11px;\r\n    margin-top: 1%;\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/pages/RegularUser/playlist-display.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/RegularUser/playlist-display.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <table mat-table #playlisy [dataSource]=\"dataSource\" style=\"width: 100%\">\n      \n      <!-- Image Column -->\n      <ng-container matColumnDef=\"picture\">\n          <mat-header-cell *matHeaderCellDef=\"let element\" style=\"flex: 0 0 180px;\"></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" style=\"flex: 0 0 180px;\"><img [src]=\"element.picture.url\" [width]=\"element.picture.width\" [height]=\"element.picture.height\" /></mat-cell>\n      </ng-container >\n      \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"title\">\n          <mat-header-cell *matHeaderCellDef=\"let element\"><strong> Title </strong></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">{{element.title}}</mat-cell>\n      </ng-container >\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"duration\">\n          <mat-header-cell *matHeaderCellDef=\"let element\" style=\"flex: 0 0 180px;\"><strong> Duration </strong></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" style=\"flex: 0 0 180px;\">{{element.duration}}</mat-cell>\n      </ng-container >\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"title\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"songDisplay\"></mat-row>\n  </table>"

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

/***/ "./src/app/pages/RegularUser/register.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/RegularUser/register.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#registerComp\r\n{\r\n    border-radius: 25px;\r\n}"

/***/ }),

/***/ "./src/app/pages/RegularUser/register.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/RegularUser/register.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; padding: 5%; max-width: 60%\">\r\n    <div class=\"card text-white bg-dark mb-3\" id=registerComp>\r\n        <div class=\"card-header\" style=\"text-align: center;\">\r\n            <h1>Create New User</h1>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div [hidden]=\"submitted\">\r\n                <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"firstNameInput\">First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"firstNameInput\" name=\"firstName\" #FirstName=\"ngModel\" [(ngModel)]=\"model.firstname\" [pattern]=\"namePattern\" placeholder=\"firstName\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"LastNameInput\">Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"LastNameInput\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"model.lastname\" [pattern]=\"namePattern\" placeholder=\"LastName\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"EmailInput\">Email</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"EmailInput\" name=\"email\" #UserName=\"ngModel\" [(ngModel)]=\"model.email\" [pattern]=\"emailPattern\" placeholder=\"Email\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"PasswordInput\">Password</label>\r\n                            <input type=\"password\" class=\"form-control\" id=\"PasswordInput\" name=\"password\" #Password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div [hidden]=\"errorCode==-1\" style=\"color: tomato\">\r\n                        {{errorMessage}}\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <button type=\"submit\" [disabled]=\"!registerForm.valid\" class=\"btn btn-secondary btn-block\"><b> Create User </b></button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div [hidden]=\"!submitted\">Thank you for joining us! Go Share Your Music.</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/RegularUser/register.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/RegularUser/register.component.ts ***!
  \*********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
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
    function RegisterComponent(auth) {
        this.auth = auth;
        this.emailPattern = "^[a-zA-Z0-9\.\_\%\+\-]+\@\[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}$";
        this.namePattern = "^[a-zA-Z][a-zA-Z]+";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.model = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.model.firstname = "",
            this.model.lastname = "",
            this.model.email = "",
            this.model.password = "",
            this.model.privileges = [];
        this.submitted = false;
        this.errorCode = -1;
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.auth.register(this.model.email, this.model.firstname, this.model.lastname, this.model.password)
            .subscribe({
            next: function () {
                _this.submitted = true;
                _this.errorCode = -1;
            }, error: function () { return _this.errorCode = _this.auth.errorCode(); }
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "errorMessage", {
        get: function () {
            switch (this.auth.errorCode()) {
                case 500:
                    return "An internal error has been accord";
                case -1:
                    return "";
                default:
                    return "Unknown error has been accord. please try again latter";
            }
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/RegularUser/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/RegularUser/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent(auth) {
        this.auth = auth;
    }
    UserHomeComponent.prototype.isloggedin = function () {
        return this.auth.isLoggedIn();
    };
    UserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-home',
            template: "\n  <div class=\"main-container\">\n      <div class=\"playlistDiplay\">\n          <app-playlist-display></app-playlist-display>\n      </div>\n      <div *ngIf=\"isloggedin()\" class=\"newSongDisplay\">\n          <add-song-component></add-song-component>\n      </div>\n  </div>\n  ",
            styles: ["\n  .main-container {\n      width: 96%;\n      height: 100%;\n      margin-left: 2%;\n      margin-right: 2%;\n      display: block;\n      border: 0px;\n  }\n  .playlistDiplay {\n    display: block;\n    height: 85%;\n    overflow: auto;\n    border: 0px;\n  }\n  .newSongDisplay {\n    display: block;\n    height: 10%;\n    margin-top: 1%;\n    border: 0px;\n  }\n  "],
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/viewer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/RegularUser/viewer.module.ts ***!
  \****************************************************/
/*! exports provided: ViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerModule", function() { return ViewerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _viewer_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewer.routing */ "./src/app/pages/RegularUser/viewer.routing.ts");
/* harmony import */ var _add_song_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-song.component */ "./src/app/pages/RegularUser/add-song.component.ts");
/* harmony import */ var _playlist_dsiplay_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./playlist-dsiplay.component */ "./src/app/pages/RegularUser/playlist-dsiplay.component.ts");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/pages/RegularUser/contact-us.component.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/RegularUser/about.component.ts");
/* harmony import */ var _user_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-home.component */ "./src/app/pages/RegularUser/user-home.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/RegularUser/login.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register.component */ "./src/app/pages/RegularUser/register.component.ts");
/* harmony import */ var _discover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./discover.component */ "./src/app/pages/RegularUser/discover.component.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/contact.service */ "./src/app/services/contact.service.ts");
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








//----------------------------------//
//            Services              //
//----------------------------------//


var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    ViewerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _user_home_component__WEBPACK_IMPORTED_MODULE_11__["UserHomeComponent"],
                _add_song_component__WEBPACK_IMPORTED_MODULE_7__["AddSongComponent"],
                _playlist_dsiplay_component__WEBPACK_IMPORTED_MODULE_8__["PlaylistDisplayComponent"],
                _contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
                _about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _discover_component__WEBPACK_IMPORTED_MODULE_14__["DiscoverComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _viewer_routing__WEBPACK_IMPORTED_MODULE_6__["ViewerRoutes"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB9KcHxuhLNREX9ySyQuvRkQcuyG9BEsrU'
                })
            ],
            providers: [
                _services_web_socket_service__WEBPACK_IMPORTED_MODULE_15__["WebSocketService"],
                _services_contact_service__WEBPACK_IMPORTED_MODULE_16__["ContactService"]
            ],
            exports: [
                _user_home_component__WEBPACK_IMPORTED_MODULE_11__["UserHomeComponent"],
            ]
        })
    ], ViewerModule);
    return ViewerModule;
}());



/***/ }),

/***/ "./src/app/pages/RegularUser/viewer.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/RegularUser/viewer.routing.ts ***!
  \*****************************************************/
/*! exports provided: ViewerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerRoutes", function() { return ViewerRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/RegularUser/about.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/RegularUser/login.component.ts");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/pages/RegularUser/contact-us.component.ts");
/* harmony import */ var _user_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-home.component */ "./src/app/pages/RegularUser/user-home.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/pages/RegularUser/register.component.ts");
/* harmony import */ var _discover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover.component */ "./src/app/pages/RegularUser/discover.component.ts");







var ViewerRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    { path: '', component: _user_home_component__WEBPACK_IMPORTED_MODULE_4__["UserHomeComponent"] },
    { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'contact', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: 'register', component: _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'discover', component: _discover_component__WEBPACK_IMPORTED_MODULE_6__["DiscoverComponent"] },
]);


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
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    // { path: '**', component: PageNotFoundComponent }
];
var AppRouteModule = /** @class */ (function () {
    function AppRouteModule() {
    }
    AppRouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: false,
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRouteModule);
    return AppRouteModule;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _server_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-handler.service */ "./src/app/services/server-handler.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_server) {
        this._server = _server;
        this.tokenKey = "Token";
        try {
            this._token = localStorage.getItem(this.tokenKey);
            this._user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
            this._user.fromJson(atob(this._token.split('.')[1]));
            this._authenticate = true;
        }
        catch (_a) {
            localStorage.clear();
            this._authenticate = false;
        }
        this._errorCode = -1;
    }
    AuthenticationService.prototype.authenticate = function (email, password) {
        var _this = this;
        this._user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this._user.email = email;
        this._user.password = password;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._server.post('/api/login', _this._user, _this._token)
                .subscribe({
                next: function (value) {
                    try {
                        localStorage.setItem(_this.tokenKey, value.data['token']);
                        _this._token = value.data['token'];
                        _this._user.fromJson(JSON.parse(atob(_this._token.split(".")[1])));
                        _this._authenticate = true;
                        observer.next();
                    }
                    catch (err) {
                        localStorage.removeItemItem(_this.tokenKey);
                        _this._token = null;
                        _this._user.privileges = [];
                        _this._authenticate = false;
                        observer.error();
                    }
                },
                error: function (err) {
                    _this._errorCode = err.code;
                    _this._authenticate = false;
                    observer.error();
                }
            });
        });
    };
    AuthenticationService.prototype.register = function (email, firstname, lastname, password) {
        var _this = this;
        this._user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this._user.firstname = firstname;
        this._user.lastname = lastname;
        this._user.email = email;
        this._user.password = password;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._server.post('/api/register', _this._user, _this._token)
                .subscribe({
                next: function (value) {
                    try {
                        localStorage.setItem(_this.tokenKey, value.data['token']);
                        _this._token = value.data['token'];
                        _this._user.fromJson(JSON.parse(atob(_this._token.split(".")[1])));
                        _this._authenticate = true;
                        observer.next();
                    }
                    catch (err) {
                        localStorage.removeItem(_this.tokenKey);
                        _this._token = null;
                        _this._user.privileges = [];
                        _this._authenticate = false;
                        observer.error();
                    }
                },
                error: function (err) {
                    _this._errorCode = err.code;
                    _this._authenticate = false;
                    observer.error();
                }
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._server.get('/api/logout', _this._token)
                .subscribe({
                next: function () {
                    localStorage.removeItem(_this.tokenKey);
                    _this._token = null;
                    _this._user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
                    _this._authenticate = false;
                    observer.next();
                },
                error: function (err) {
                    _this._errorCode = err.code;
                    observer.error();
                }
            });
        });
    };
    AuthenticationService.prototype.errorCode = function () { return this._errorCode; };
    AuthenticationService.prototype.isLoggedIn = function () { return this._authenticate; };
    Object.defineProperty(AuthenticationService.prototype, "Token", {
        get: function () { return this._token; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "FirtName", {
        get: function () { return this._user.firstname; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "Lastname", {
        get: function () { return this._user.lastname; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "Email", {
        get: function () { return this._user.email; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "Privileges", {
        get: function () {
            if (this._user)
                return this._user.privileges;
            else
                return [];
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_server_handler_service__WEBPACK_IMPORTED_MODULE_2__["ServerHandlerService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-handler.service */ "./src/app/services/server-handler.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(server) {
        this.server = server;
    }
    ContactService.prototype.send = function (data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.server.post('/api/contact-us', data)
                .subscribe({
                next: function (event) { return observer.next(event); },
                error: function (err) { return observer.error(err); }
            });
        });
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_server_handler_service__WEBPACK_IMPORTED_MODULE_1__["ServerHandlerService"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/player.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _server_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-handler.service */ "./src/app/services/server-handler.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Link */ "./src/app/models/Link.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayerService = /** @class */ (function () {
    function PlayerService(server, auth) {
        this.server = server;
        this.auth = auth;
    }
    PlayerService.prototype.nextSong = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.server.get("/api/playlist/next", _this.auth.Token)
                .subscribe({
                next: function (value) { return observer.next(value); },
                error: function (err) { return observer.error(err); }
            });
        });
    };
    PlayerService.prototype.addSong = function (link) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.server.post("/api/playlist/add", new _models_Link__WEBPACK_IMPORTED_MODULE_4__["Link"](link), _this.auth.Token)
                .subscribe({
                next: function (value) { return observer.next(value); },
                error: function (err) { return observer.error(err); }
            });
        });
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_server_handler_service__WEBPACK_IMPORTED_MODULE_2__["ServerHandlerService"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/services/server-handler.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/server-handler.service.ts ***!
  \****************************************************/
/*! exports provided: ServerHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerHandlerService", function() { return ServerHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_http_response_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/http-response-object */ "./src/app/models/http-response-object.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServerHandlerService = /** @class */ (function () {
    function ServerHandlerService(_server) {
        this._server = _server;
        this._baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
    }
    ServerHandlerService.prototype.get = function (url, token) {
        var _token = token || "";
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-type': 'application/json', 'X-Auth-Token': _token });
        var _request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]("GET", "" + this._baseURL + url, { headers: _headers });
        return this.send(_request);
    };
    ServerHandlerService.prototype.post = function (url, data, token) {
        var _token = token || "";
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-type': 'application/json', 'X-Auth-Token': _token });
        var _request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]("POST", "" + this._baseURL + url, data.toJson(), { headers: _headers });
        return this.send(_request);
    };
    ServerHandlerService.prototype.delete = function (url, data, token) {
        var _token = token || "";
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-type': 'application/json', 'X-Auth-Token': _token });
        var _request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]("DELETE", this._baseURL + "/" + url, data.toJson(), { headers: _headers });
        return this.send(_request);
    };
    ServerHandlerService.prototype.send = function (request) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._server.request(request)
                .subscribe({
                next: function (res) {
                    if (res.type != 0) {
                        observer.next(new _models_http_response_object__WEBPACK_IMPORTED_MODULE_3__["HttpResponseObject"](res.status, res.statusText, res.body.data));
                    }
                },
                error: function (err) {
                    observer.error(new _models_http_response_object__WEBPACK_IMPORTED_MODULE_3__["HttpResponseObject"](err.status, err.statusText, null));
                }
            });
        });
    };
    ServerHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServerHandlerService);
    return ServerHandlerService;
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




var SERVER_WS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL + "/playlist";
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
    baseURL: ""
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