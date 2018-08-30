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
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/pages/home.component.ts");
/* harmony import */ var _pages_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login.component */ "./src/app/pages/login.component.ts");
/* harmony import */ var _pages_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/contact-us.component */ "./src/app/pages/contact-us.component.ts");
/* harmony import */ var _pages_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about.component */ "./src/app/pages/about.component.ts");
/* harmony import */ var _pages_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/player.component */ "./src/app/pages/player.component.ts");
/* harmony import */ var _pages_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/register.component */ "./src/app/pages/register.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// imports





// declarations






// services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _pages_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"],
                _pages_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _pages_player_component__WEBPACK_IMPORTED_MODULE_13__["PlayerComponent"],
                _pages_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _pages_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _route_module__WEBPACK_IMPORTED_MODULE_2__["AppRouteModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YoutubePlayerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB9KcHxuhLNREX9ySyQuvRkQcuyG9BEsrU'
                }),
            ],
            bootstrap: [
                _default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]
            ],
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]
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

module.exports = "<section class=\"Logo\"></section>\r\n<section class=\"SideBarMenu\">\r\n    <ul>\r\n        <li>\r\n            <a routerLink=\"/home\" href=\"#\">Home</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/contact\" href=\"#\">Contact Us</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/about\" href=\"#\">About</a>\r\n        </li>\r\n        <li *ngIf=\"!isloggedin()\">\r\n            <a routerLink=\"/login\" href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span>  Login</a>\r\n        </li>\r\n        <li *ngIf=\"!isloggedin()\">\r\n            <a routerLink=\"/register\" href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>  Register</a>\r\n        </li>\r\n        <li *ngIf=\"isloggedin()\">\r\n            <a (click)=\"Logout()\" routerLink=\"/login\" href=\"#\">Logout</a>\r\n        </li>\r\n    </ul> \r\n</section>\r\n\r\n"

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
        var usertoken = localStorage.getItem('userToken');
        if (usertoken == null)
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
    User.prototype.toJson = function (resource) {
        return {
            "email": this.email,
            "password": this.password,
            "firstname": this.firstname,
            "lastname": this.lastname
        };
    };
    User.prototype.fromJson = function (json) {
        var user = new User;
        user.email = json.email;
        user.password = json.password;
        user.firstname = json.firstname;
        user.lastname = json.lastname;
        return user;
    };
    return User;
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

/***/ "./src/app/pages/home.component.css":
/*!******************************************!*\
  !*** ./src/app/pages/home.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".YTiframe {\r\n    text-align: center;\r\n    padding: 5%;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/pages/home.component.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-player></app-player>\n</div>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div style=\"margin: auto; padding: 5%; max-width: 60%;\">\r\n  <div class=\"card text-white bg-dark mb-3\">\r\n      <div class=\"card-header\" style=\"text-align: center;\">\r\n          <h1>Log In To Your Account</h1>\r\n      </div>\r\n      <div class=\"card-body\">\r\n          <div [hidden]=\"submitted\">\r\n              <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\r\n                <div class=\"form-row\">\r\n                      <div class=\"col-md-12 mb-3\">\r\n                          <label for=\"emailInput\">Email</label>\r\n                          <input type=\"email\" class=\"form-control\" id=\"emailInput\" name=\"email\" #UserName=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" required>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-md-12 mb-3\">\r\n                        <label for=\"passwordInput\" data-error=\"Invalid Password, Please try again\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"passwordInput\" name=\"password\" #Password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"form-row\">\r\n                    <div class=\"col-md-12 mb-3\">\r\n                        <button type=\"submit\" [disabled]=\"!contactForm.valid\" class=\"btn btn-secondary btn-block\"><b> S u b m i t </b></button>\r\n                    </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
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
    function LoginComponent(_authentication) {
        this._authentication = _authentication;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.model.email = "",
            this.model.password = "";
    };
    LoginComponent.prototype.onSubmit = function (form) {
        console.log(this.model);
        this._authentication
            .read("/api/login")
            .subscribe(function (data) { console.log(data); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/player.component.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/player.component.ts ***!
  \*******************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
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

var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
        this.player = new Player;
        this.player.Init();
    }
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: "\n    <div>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n            <div id=\"player\"></div>\n        </div>\n    </div>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());

var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.Init = function () {
        var _this = this;
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
                //event.target.loadVideoById(this.nextSong['id'], 0, 'Large');
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
        //2 - Request contains an invalid parameter value
        //100 - Video has been removed
        //101 || 150 - The owner of the requested video does not allow it to be played
        console.log("Error: " + event.data);
        //@TODO request next song and play it.
        //event.target.loadVideoById('', 0, 'Large');
    };
    ;
    return Player;
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
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function AuthenticationService(http) {
        this.http = http;
        this.baseURL = "";
    }
    AuthenticationService.prototype.read = function (uri) {
        var _this = this;
        return this.http.get("" + uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.serializer.fromJson(data); }));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
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
    production: false
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


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map