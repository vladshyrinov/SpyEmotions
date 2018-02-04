webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n  font-family: 'Courier';\r\n}\r\n#snapshotBtn {\r\n    margin-top: 5px;\r\n    font-size: 1.2em;\r\n  }\r\n.snapshot {\r\n    text-align: center;\r\n  }\r\nul {\r\n    padding-bottom: 20px;\r\n  }\r\nheader {\r\n    background-color: #e0e0e0;\r\n    height: 60px;\r\n    width: 100%;\r\n    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n    font-family: 'Courier';\r\n    font-size: 30px;\r\n    margin-top: -30px;\r\n}\r\nheader p {\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 60px;\r\n    color: black;\r\n    cursor: default;\r\n}\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  background-color: #e0e0e0;\r\n  height: 50px;\r\n  width: 100%;\r\n  -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n          box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n  font-family: 'Courier';\r\n  font-size: 30px;\r\n  z-index:100;\r\n  /* margin-top: 70px; */\r\n}\r\nfooter p {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 30px;\r\n  color: black;\r\n  font-size: 16px;\r\n  cursor: default;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <p> SPY ON EMOTIONS </p>\r\n</header>\r\n<router-outlet></router-outlet>\r\n<footer>\r\n    <p>Developed by Spies on Lies</p>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_webcam_webcam_module__ = __webpack_require__("../../../../../src/app/modules/webcam/webcam.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_emotions_service__ = __webpack_require__("../../../../../src/app/services/emotions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_advised_prof_list_advised_prof_list_component__ = __webpack_require__("../../../../../src/app/components/advised-prof-list/advised-prof-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_advised_prof_list_advised_prof_advised_prof_component__ = __webpack_require__("../../../../../src/app/components/advised-prof-list/advised-prof/advised-prof.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_image_viewer_image_viewer_component__ = __webpack_require__("../../../../../src/app/components/image-viewer/image-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_ls_service__ = __webpack_require__("../../../../../src/app/services/ls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_image_viewer_image_profession_image_profession_component__ = __webpack_require__("../../../../../src/app/components/image-viewer/image-profession/image-profession.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'advised', component: __WEBPACK_IMPORTED_MODULE_7__components_advised_prof_list_advised_prof_list_component__["a" /* AdvisedProfListComponent */] },
    { path: 'image-viewer', component: __WEBPACK_IMPORTED_MODULE_11__components_image_viewer_image_viewer_component__["a" /* ImageViewerComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_advised_prof_list_advised_prof_list_component__["a" /* AdvisedProfListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_advised_prof_list_advised_prof_advised_prof_component__["a" /* AdvisedProfComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_image_viewer_image_viewer_component__["a" /* ImageViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_image_viewer_image_profession_image_profession_component__["a" /* ImageProfessionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__modules_webcam_webcam_module__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_emotions_service__["a" /* EmotionsService */],
                __WEBPACK_IMPORTED_MODULE_12__services_ls_service__["a" /* LsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/advised-prof-list/advised-prof-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.wrapper{\r\n    width:1000px;\r\n    margin: 0 auto 80px auto;\r\n    font-family: Courier, sans-serif;\r\n}\r\n.wrapper h2{\r\n    text-align:center;\r\n    margin-top:15px;\r\n}\r\n@media (min-width:769px) and (max-width:1024px){\r\n    .wrapper{\r\n        width:600px;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .wrapper{\r\n        width:300px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/advised-prof-list/advised-prof-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <div class=\"wrapper\">\r\n  <h2>Recommended professions for you</h2>\r\n    <div *ngFor=\"let prof of chosenProfessionsWithLinks\">\r\n      <app-advised-prof [photoProf]=\"prof.img\" [nameProf]=\"prof.name\" [link1Prof]=\"prof.links[0]\" [link2Prof]=\"prof.links[1]\" [link3Prof]=\"prof.links[2]\"></app-advised-prof>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/advised-prof-list/advised-prof-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvisedProfListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ls_service__ = __webpack_require__("../../../../../src/app/services/ls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvisedProfListComponent = /** @class */ (function () {
    function AdvisedProfListComponent(lsService) {
        this.lsService = lsService;
        this.professions = [
            // tslint:disable-next-line:max-line-length
            { id: 1, name: "Military", img: "../../../assets/image/military.jpg", links: ["https://www.ted.com/talks/peter_van_uhm_why_i_chose_a_gun", "https://www.ted.com/talks/keith_nolan_deaf_in_the_military", "https://www.ted.com/topics/war"] },
            // tslint:disable-next-line:max-line-length
            { id: 2, name: "Doctor", img: "../../../assets/image/doctor.jpg", links: ["https://www.edx.org/course/approaching-iatrology", "https://www.coursera.org/courses?languages=en&query=medicine+%26+healthcare", "https://www.ted.com/topics/medicine"] },
            // tslint:disable-next-line:max-line-length
            { id: 3, name: "Business", img: "../../../assets/image/business.jpg", links: ["https://www.coursera.org/courses?languages=en&query=business", "https://prometheus.org.ua/entrepreneurship/", "https://www.edx.org/course?search_query=business"] },
            // tslint:disable-next-line:max-line-length
            { id: 4, name: "Teacher", img: "../../../assets/image/teacher.jpg", links: ["https://www.coursera.org/courses?languages=en&query=pedagogy", "https://www.edx.org/course/?search_query=pedagog&subject=Education%20%26%20Teacher%20Training", "https://www.ted.com/search?q=teaching"] },
            // tslint:disable-next-line:max-line-length
            { id: 5, name: "Service", img: "../../../assets/image/service.jpg", links: ["https://www.edx.org/course/culture-services-new-perspective-kyotoux-002x-2", "https://www.ted.com/talks/siddhartha_roy_science_in_service_to_the_public_good", "https://www.coursera.org/courses?languages=en&query=service"] },
            // tslint:disable-next-line:max-line-length
            { id: 6, name: "Engineer", img: "../../../assets/image/engineer.jpg", links: ["https://www.edx.org/course?search_query=engineering", "https://www.ted.com/search?q=engineering", "https://www.coursera.org/courses?query=engineering"] },
            // tslint:disable-next-line:max-line-length
            { id: 7, name: "Cooker", img: "../../../assets/image/cooker.jpg", links: ["https://www.ted.com/search?q=culinary", "https://www.coursera.org/courses?languages=en&query=cook", "https://www.edx.org/course?search_query=cook"] },
            // tslint:disable-next-line:max-line-length
            { id: 8, name: "IT", img: "../../../assets/image/it.jpg", links: ["https://www.codecademy.com/", "https://www.edx.org/course?search_query=code", "https://courses.prometheus.org.ua/courses/Prometheus/CS50/2016_T1/about"] },
            // tslint:disable-next-line:max-line-length
            { id: 9, name: "Creative", img: "../../../assets/image/creative.jpg", links: ["https://www.ted.com/topics/creativity", "https://www.coursera.org/courses?languages=en&query=creativity", "https://www.edx.org/course/?search_query=creativity&subject=Art%20%26%20Culture"] },
            // tslint:disable-next-line:max-line-length
            { id: 10, name: "Fashion", img: "../../../assets/image/fashion.jpg", links: ["https://www.ted.com/search?q=fashion", "https://www.academiccourses.com/Courses/Fashion/", "https://www.vogue.com/fashion"] },
            // tslint:disable-next-line:max-line-length
            { id: 11, name: "Media", img: "../../../assets/image/media.jpg", links: ["https://www.edx.org/course?search_query=media", "https://edx.prometheus.org.ua/courses/KNU/103/2015_T2/about", "https://www.coursera.org/courses?languages=en&query=media"] },
            // tslint:disable-next-line:max-line-length
            { id: 12, name: "Politic", img: "../../../assets/image/politic.jpg", links: ["https://www.edx.org/course/?search_query=policy&subject=Law", "https://www.ted.com/search?q=policy", "https://courses.prometheus.org.ua/courses/Prometheus/GOV101/2015_T2/about"] },
            // tslint:disable-next-line:max-line-length
            { id: 13, name: "Transport", img: "../../../assets/image/transport.jpg", links: ["https://www.ted.com/search?q=transportation", "https://www.edx.org/course?search_query=transport", "https://www.coursera.org/courses?languages=en&query=transportationlink3"] },
            // tslint:disable-next-line:max-line-length
            { id: 14, name: "Sport", img: "../../../assets/image/sport.jpg", links: ["https://www.ted.com/search?q=sport", "https://www.coursera.org/courses?languages=en&query=sport", "https://www.edx.org/course/body-matters-why-exercise-makes-you-mcgillx-body101x-00"] }
        ];
        this.chosenProfessions = [];
        this.chosenProfessionsWithLinks = [];
    }
    AdvisedProfListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var profStr = this.lsService.getProfessionsRating();
        this.chosenProfessions = JSON.parse(profStr);
        this.chosenProfessions.forEach(function (chosenProfession) {
            _this.professions.forEach(function (profession) {
                if (chosenProfession.id === profession.id) {
                    _this.chosenProfessionsWithLinks.push(profession);
                }
            });
        });
    };
    AdvisedProfListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-advised-prof-list',
            template: __webpack_require__("../../../../../src/app/components/advised-prof-list/advised-prof-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/advised-prof-list/advised-prof-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ls_service__["a" /* LsService */]])
    ], AdvisedProfListComponent);
    return AdvisedProfListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/advised-prof-list/advised-prof/advised-prof.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\r\n  width: 700px;\r\n  border: 1px solid gray;\r\n  padding: 20px 30px 20px 30px;\r\n  border-radius: 20px;\r\n  position: relative;\r\n  margin: 30px auto;\r\n  background: white;\r\n  -webkit-box-shadow: 0px 0px 5px 0px #333333;\r\n          box-shadow: 0px 0px 5px 0px #333333;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.box:hover {\r\n  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\r\n          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.photo {\r\n  width: 40%;\r\n}\r\n\r\n.info a {\r\n  text-decoration: none;\r\n  padding: 5px;\r\n}\r\n\r\n.source1 {\r\n  border: 1px solid red;\r\n  color: red;\r\n}\r\n\r\n.source2 {\r\n  border: 1px solid green;\r\n  color: green;\r\n}\r\n\r\n.source3 {\r\n  border: 1px solid lightseagreen;\r\n  color: lightseagreen;\r\n}\r\n\r\n@media(min-width: 1024px) {\r\n    .info {\r\n        width: 400px;\r\n    }\r\n    \r\n    .info-wrapper {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .info-wrapper {\r\n    margin: 0 auto;\r\n  }\r\n  .info {\r\n    text-align: center;\r\n  }\r\n  .source-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .source {\r\n    width: 100px;\r\n    margin-top: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width:769px) and (max-width:1023px) {\r\n  .box {\r\n    width: 600px;\r\n  }\r\n  .info-wrapper {\r\n      width: 500px;\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n  }\r\n  .info {\r\n      width: 300px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width:320px) and (max-width:768px) {\r\n  .box {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    width: 200px;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/advised-prof-list/advised-prof/advised-prof.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <div class=\"info-wrapper\">\r\n    <div class=\"photo\">\r\n      <img [src]=\"photoProf\" width=\"150\" height=\"200\">\r\n    </div>\r\n    <div class=\"info\">\r\n      <h3>{{nameProf}}</h3>\r\n      <h4>Useful links</h4>\r\n      <div class=\"source-wrapper\">\r\n        <a [href]=\"link1Prof\" target=\"_blank\" class=\"source source1\">source 1</a>\r\n        <a [href]=\"link2Prof\" target=\"_blank\" class=\"source source2\">source 2</a>\r\n        <a [href]=\"link3Prof\" target=\"_blank\" class=\"source source3\">source 3</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/advised-prof-list/advised-prof/advised-prof.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvisedProfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvisedProfComponent = /** @class */ (function () {
    function AdvisedProfComponent() {
    }
    AdvisedProfComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AdvisedProfComponent.prototype, "photoProf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AdvisedProfComponent.prototype, "nameProf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AdvisedProfComponent.prototype, "link1Prof", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AdvisedProfComponent.prototype, "link2Prof", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AdvisedProfComponent.prototype, "link3Prof", void 0);
    AdvisedProfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-advised-prof',
            template: __webpack_require__("../../../../../src/app/components/advised-prof-list/advised-prof/advised-prof.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/advised-prof-list/advised-prof/advised-prof.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvisedProfComponent);
    return AdvisedProfComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n#main {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n\r\n#main .main-info .col-1 {\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 120px;\r\n    width: 300px;\r\n    height: 500px;\r\n    background-image: url('https://image.freepik.com/free-vector/profession-avatar-pack_23-2147536163.jpg');\r\n    background-position-y: -75px;\r\n}\r\n\r\n\r\n#main .main-info .col-2 {\r\n    margin: 40px auto 0 auto;\r\n    width: 400px;\r\n    text-align: center;\r\n    font-family: 'Courier';\r\n}\r\n\r\n\r\n#main .main-info .col-2 button {\r\n    width: 100px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-family: 'Courier';\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n#main .main-info .col-2 p {\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n#main .main-info .col-2 span {\r\n    margin: 10px;\r\n    display: block;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n#main .main-info .col-3 {\r\n    display: block;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 110px;\r\n    width: 300px;\r\n    height: 500px;\r\n    background-image: url('https://image.freepik.com/free-vector/profession-avatar-pack_23-2147536163.jpg');\r\n    background-position-x: 315px;\r\n    background-position-y: -85px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 980px) and (min-width: 720px) {\r\n    #main .main-info .col-1 {\r\n        width: 150px;\r\n        background-position-x: -25px;\r\n    }\r\n    #main .main-info .col-3 {\r\n        width: 150px;\r\n        background-position-x: 320px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 719px) and (min-width: 401px) {\r\n    #main .main-info .col-3 {\r\n        display: none;\r\n    }\r\n    #main .main-info .col-2 p {\r\n        font-size: 20px;\r\n    }\r\n    #main .main-info .col-1 {\r\n        -webkit-transform: translateX(-60%);\r\n                transform: translateX(-60%);\r\n        left: 50%;\r\n        height: 150px;\r\n    }\r\n    #main .main-info .col-2 .mobile-hidden {\r\n        display: none;\r\n    }\r\n    #main .main-info .col-2 {\r\n        margin-top: 180px;\r\n    }\r\n    #main .main-info .col-2 span {\r\n        font-size: 15px;\r\n    }\r\n    #main .main-info .col-2 button {\r\n        margin-top: 30px;\r\n    }    \r\n}\r\n\r\n\r\n@media screen and (max-width: 400px) {\r\n    #main .main-info .col-3 {\r\n        display: none;\r\n    }\r\n    #main .main-info .col-2 p {\r\n        font-size: 20px;\r\n    }\r\n    #main .main-info .col-1 {\r\n        -webkit-transform: translateX(-60%);\r\n                transform: translateX(-60%);\r\n        left: 50%;\r\n        height: 150px;\r\n    }\r\n    #main .main-info .col-2 .mobile-hidden {\r\n        display: none;\r\n    }\r\n    #main .main-info .col-2 {\r\n        margin-top: 180px;\r\n        width: 250px;\r\n    }\r\n    #main .main-info .col-2 span {\r\n        font-size: 15px;\r\n    }\r\n    #main .main-info .col-2 button {\r\n        margin-top: 30px;\r\n    } \r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n  <div class=\"main-info\">\r\n    <div class=\"col-1\">\r\n        \r\n    </div>\r\n    <div class=\"col-2\">\r\n          <p>Welcome to our site!</p>\r\n          <span>Do you want to define your professional future?</span>\r\n          <span> Then you are in the right place!</span>\r\n          <span class=\"mobile-hidden\">This site was developed for helping people in important choice of the possible ways of their career.\r\n          You just need to allow access to your camera and your emotions will reflect everything.</span>\r\n          <button routerLink=\"/image-viewer\">START</button>\r\n    </div>\r\n    <div class=\"col-3\">\r\n        \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/image-viewer/image-profession/image-profession.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profession-viewer-img {\r\n  -webkit-box-shadow: 0px 0px 18px -2px rgba(0, 0, 0, 0.75);\r\n  box-shadow: 0px 0px 18px -2px rgba(0, 0, 0, 0.75);\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n@media(max-width: 767px) {\r\n    .profession-viewer-img {\r\n        width: 300px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/image-viewer/image-profession/image-profession.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"profession-viewer-img pointer\" [src]=\"currentImage.image\">\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/image-viewer/image-profession/image-profession.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProfessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageProfessionComponent = /** @class */ (function () {
    function ImageProfessionComponent() {
        this.currentImage = null;
    }
    ImageProfessionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageProfessionComponent.prototype, "currentImage", void 0);
    ImageProfessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-profession',
            template: __webpack_require__("../../../../../src/app/components/image-viewer/image-profession/image-profession.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/image-viewer/image-profession/image-profession.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageProfessionComponent);
    return ImageProfessionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/image-viewer/image-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-viewer-heading {\r\n    text-align: center;\r\n    font-family: Courier sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/image-viewer/image-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"image-viewer-wrapper\">\r\n  <h2 class=\"image-viewer-heading\">Be attentive to pictures. It takes just 3 minutes.</h2>\r\n  <app-webcam [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event, currentImage)\"></app-webcam>\r\n  <app-image-profession [currentImage] = \"currentImage\" ></app-image-profession>\r\n</main>\r\n\r\n\r\n\r\n\r\n<!--<div class=\"snapshot\" *ngIf=\"webcamImage\">\r\n  <h2>Nice one!</h2>\r\n  <img [src]=\"webcamImage.imageAsDataUrl\"/>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/image-viewer/image-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_const__ = __webpack_require__("../../../../../src/app/shared/const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_emotions_service__ = __webpack_require__("../../../../../src/app/services/emotions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ls_service__ = __webpack_require__("../../../../../src/app/services/ls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent(emotionsService, router, route, lsService) {
        this.emotionsService = emotionsService;
        this.router = router;
        this.route = route;
        this.lsService = lsService;
        this.imagesBasisUrl = "https://spyemotions18.blob.core.windows.net/thumbs/";
        this.imagesCollection = __WEBPACK_IMPORTED_MODULE_1__shared_const__["a" /* AppConsts */].imagesCollection;
        this.weightsCollection = __WEBPACK_IMPORTED_MODULE_1__shared_const__["a" /* AppConsts */].weightsCollection;
        this.chosenProfessions = [];
        this.imagesUrls = [];
        this.startImageIndex = 0;
        this.currentImage = null;
        this.timerId = null;
        this.trigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.webcamImage = null;
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagesCollection.forEach(function (imagesBlock, idx) {
            imagesBlock.images.forEach(function (image, index) {
                var num = (idx + 1) + (index * 14);
                _this.imagesUrls.push({
                    id: num,
                    categoryId: imagesBlock.id,
                    name: imagesBlock.name,
                    image: _this.imagesBasisUrl + imagesBlock.name + "/" + image
                });
            });
        });
        this.imagesUrls.sort(function (imageUrl1, imagesUrl2) {
            return imageUrl1.id - imagesUrl2.id;
        });
        this.currentImage = this.imagesUrls[this.startImageIndex];
        setTimeout(function () {
            _this.triggerSnapshot();
        }, 600);
        this.timerId = setInterval(function () {
            _this.nextImage();
        }, 1200);
    };
    ImageViewerComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    ImageViewerComponent.prototype.handleImage = function (webcamImage, currentImage) {
        var _this = this;
        this.webcamImage = webcamImage;
        var body = {
            imageBase64: ''
        };
        body.imageBase64 = webcamImage.imageAsBase64;
        this.emotionsService.setImage(body).subscribe(function (result) {
            if (result[0]) {
                var categoryId = currentImage.categoryId;
                var weight = _this.countEquation(result[0].scores);
                var weightObjInCategory = _this.weightsCollection[categoryId - 1];
                weightObjInCategory.viewed++;
                weightObjInCategory.weight = (weightObjInCategory.weight + weight) / weightObjInCategory.viewed;
                _this.weightsCollection[categoryId - 1] = weightObjInCategory;
            }
        });
    };
    Object.defineProperty(ImageViewerComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ImageViewerComponent.prototype.countEquation = function (scores) {
        if (scores) {
            var s = scores;
            var result = s.anger + s.contempt + s.disgust + s.fear + s.sadness;
            return result;
        }
        else {
            return 0;
        }
    };
    ImageViewerComponent.prototype.nextImage = function () {
        var _this = this;
        if (this.startImageIndex === 55) {
            clearInterval(this.timerId);
            this.weightsCollection.sort(function (weight1, weight2) {
                return weight2.weight - weight1.weight;
            });
            this.router.navigate(['advised']);
            this.chosenProfessions.push(this.weightsCollection[0]);
            this.chosenProfessions.push(this.weightsCollection[1]);
            this.lsService.setProfessionsRating(this.chosenProfessions);
        }
        else {
            this.startImageIndex++;
            this.currentImage = this.imagesUrls[this.startImageIndex];
            setTimeout(function () {
                _this.triggerSnapshot();
            }, 600);
        }
    };
    ImageViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-viewer',
            template: __webpack_require__("../../../../../src/app/components/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/image-viewer/image-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_emotions_service__["a" /* EmotionsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_ls_service__["a" /* LsService */]])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Cube {\r\n    width: 80px;\r\n    height: 80px;\r\n    line-height: 80px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transition: -webkit-transform 0.5s 0.1s;\r\n    transition: -webkit-transform 0.5s 0.1s;\r\n    transition: transform 0.5s 0.1s;\r\n    transition: transform 0.5s 0.1s, -webkit-transform 0.5s 0.1s;\r\n    -webkit-perspective: 9999px;\r\n            perspective: 9999px;\r\n    color: #333;\r\n    margin: -40px 0 0 -40px;\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -37px;\r\n    top: 65px;\r\n    opacity: 1;\r\n  }\r\n  .Cube.panelLoad {\r\n    z-index: 11;\r\n    top: 50%;\r\n    margin-top: -60px;\r\n    -webkit-animation: panel 2.2s infinite forwards;\r\n    animation: panel 2.2s infinite forwards;\r\n  }\r\n  .Cube.panelLoad .cube-face {\r\n    color: black;\r\n    -webkit-box-shadow: inset 0 0 0 1px #111, 0 0 1px 1px #111;\r\n            box-shadow: inset 0 0 0 1px #111, 0 0 1px 1px #111;\r\n  }\r\n  .Cube .cube-face {\r\n    width: inherit;\r\n    height: inherit;\r\n    position: absolute;\r\n    background: white;\r\n    -webkit-box-shadow: inset 0 0 0 1px #333, 0 0 1px 1px #333;\r\n            box-shadow: inset 0 0 0 1px #333, 0 0 1px 1px #333;\r\n    opacity: 1;\r\n  }\r\n  .Cube .cube-face-front {\r\n    transform: translate3d(0, 0, 40px);\r\n    -webkit-transform: translate3d(0, 0, 40px);\r\n    font-size: 57px;\r\n  }\r\n  .Cube .cube-face-back {\r\n    -webkit-transform: rotateY(180deg) translate3d(0, 0, 40px);\r\n    transform: rotateY(180deg) translate3d(0, 0, 40px);\r\n  }\r\n  .Cube .cube-face-left {\r\n    -webkit-transform: rotateY(-90deg) translate3d(0, 0, 40px);\r\n    transform: rotateY(-90deg) translate3d(0, 0, 40px);\r\n  }\r\n  .Cube .cube-face-right {\r\n    -webkit-transform: rotateY(90deg) translate3d(0, 0, 40px);\r\n    transform: rotateY(90deg) translate3d(0, 0, 40px);\r\n  }\r\n  .Cube .cube-face-top {\r\n    -webkit-transform: rotateX(90deg) translate3d(0, 0, 40px);\r\n    transform: rotateX(90deg) translate3d(0, 0, 40px);\r\n  }\r\n  .Cube .cube-face-bottom {\r\n    -webkit-transform: rotateX(-90deg) translate3d(0, 0, 40px);\r\n    transform: rotateX(-90deg) translate3d(0, 0, 40px);\r\n  }\r\n  @-webkit-keyframes panel {\r\n    0% {\r\n      -webkit-transform: rotateY(0deg) rotateZ(0deg);\r\n    }\r\n    20% {\r\n      -webkit-transform: rotateY(90deg) rotateZ(0deg);\r\n    }\r\n    40% {\r\n      -webkit-transform: rotateX(45deg) rotateZ(45deg);\r\n    }\r\n    60% {\r\n      -webkit-transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);\r\n    }\r\n    80% {\r\n      -webkit-transform: rotateX(310deg) rotateZ(230deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotateX(360deg) rotateZ(360deg);\r\n    }\r\n  }\r\n  @keyframes panel {\r\n    0% {\r\n      -webkit-transform: rotateY(0deg) rotateZ(0deg);\r\n      transform: rotateY(0deg) rotateZ(0deg);\r\n    }\r\n    20% {\r\n      -webkit-transform: rotateY(90deg) rotateZ(0deg);\r\n      transform: rotateY(90deg) rotateZ(0deg);\r\n    }\r\n    40% {\r\n      -webkit-transform: rotateX(45deg) rotateZ(45deg);\r\n      transform: rotateX(45deg) rotateZ(45deg);\r\n    }\r\n    60% {\r\n      -webkit-transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);\r\n      transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);\r\n    }\r\n    80% {\r\n      -webkit-transform: rotateX(310deg) rotateZ(230deg);\r\n      transform: rotateX(310deg) rotateZ(230deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotateX(360deg) rotateZ(360deg);\r\n      transform: rotateX(360deg) rotateZ(360deg);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='Cube panelLoad'>\r\n    <div class='cube-face cube-face-front'>㋡</div>\r\n    <div class='cube-face cube-face-back'>☺</div>\r\n    <div class='cube-face cube-face-left'>☹</div>\r\n    <div class='cube-face cube-face-right'>⍥</div>  \r\n    <div class='cube-face cube-face-bottom'>⍨</div>\r\n    <div class='cube-face cube-face-top'>⍡</div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/webcam/domain/webcam-image.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebcamImage; });
var WebcamImage = /** @class */ (function () {
    function WebcamImage(imageAsDataUrl, mimeType) {
        this._mimeType = null;
        this._imageAsBase64 = null;
        this._imageAsDataUrl = null;
        this._mimeType = mimeType;
        this._imageAsDataUrl = imageAsDataUrl;
    }
    Object.defineProperty(WebcamImage.prototype, "imageAsBase64", {
        get: function () {
            return this._imageAsBase64 ?
                this._imageAsBase64 : this._imageAsBase64 = this.getDataFromDataUrl(this._imageAsDataUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageAsDataUrl", {
        get: function () {
            return this._imageAsDataUrl;
        },
        enumerable: true,
        configurable: true
    });
    WebcamImage.prototype.getDataFromDataUrl = function (dataUrl) {
        return dataUrl.replace("data:" + this._mimeType + ";base64,", "");
    };
    return WebcamImage;
}());



/***/ }),

/***/ "../../../../../src/app/modules/webcam/webcam.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebcamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webcam_webcam_component__ = __webpack_require__("../../../../../src/app/modules/webcam/webcam/webcam.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__webcam_webcam_component__["a" /* WebcamComponent */]
];
var WebcamModule = /** @class */ (function () {
    function WebcamModule() {
    }
    WebcamModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                COMPONENTS
            ],
            exports: [
                COMPONENTS
            ]
        })
    ], WebcamModule);
    return WebcamModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/webcam/webcam/webcam.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".webcam-wrapper {\r\n    display: inline-block;\r\n    line-height: 0;\r\n    display: none;\r\n}\r\n\r\ncanvas {\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/webcam/webcam/webcam.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"width\" [height]=\"height\" autoplay muted playsinline></video>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/webcam/webcam/webcam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebcamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_webcam_image__ = __webpack_require__("../../../../../src/app/modules/webcam/domain/webcam-image.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebcamComponent = /** @class */ (function () {
    function WebcamComponent() {
        this.width = 640;
        this.height = 480;
        this.imageCapture = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.initError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.imageClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    WebcamComponent.prototype.ngAfterViewInit = function () {
        this.initWebcam();
    };
    WebcamComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeFromSubscriptions();
    };
    Object.defineProperty(WebcamComponent.prototype, "trigger", {
        set: function (trigger) {
            var _this = this;
            if (this.triggerSubscription) {
                this.triggerSubscription.unsubscribe();
            }
            this._trigger = trigger;
            // Subscribe on events from this Observable to take snapshots
            this.triggerSubscription = this._trigger.subscribe(function () {
                _this.takeSnapshot();
            });
        },
        enumerable: true,
        configurable: true
    });
    WebcamComponent.prototype.takeSnapshot = function () {
        // set canvas size to actual video size
        var _video = this.video.nativeElement;
        var dimensions = { width: this.width, height: this.height };
        if (_video.videoWidth) {
            dimensions.width = _video.videoWidth;
            dimensions.height = _video.videoHeight;
        }
        var _canvas = this.canvas.nativeElement;
        _canvas.width = dimensions.width;
        _canvas.height = dimensions.height;
        // paint snapshot image to canvas
        _canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0);
        // read canvas content as image
        var mimeType = 'image/jpeg';
        var dataUrl = _canvas.toDataURL(mimeType);
        this.imageCapture.next(new __WEBPACK_IMPORTED_MODULE_1__domain_webcam_image__["a" /* WebcamImage */](dataUrl, mimeType));
    };
    WebcamComponent.prototype.initWebcam = function () {
        var _this = this;
        var _video = this.video.nativeElement;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
                .then(function (stream) {
                _video.srcObject = stream;
                _video.play();
            })
                .catch(function (err) {
                _this.initError.next({ message: err.message, mediaStreamError: err });
                console.warn('Error initializing webcam', err);
            });
        }
        else {
            this.initError.next({ message: 'Cannot read UserMedia from MediaDevices.' });
        }
    };
    WebcamComponent.prototype.unsubscribeFromSubscriptions = function () {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], WebcamComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], WebcamComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], WebcamComponent.prototype, "imageCapture", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], WebcamComponent.prototype, "initError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], WebcamComponent.prototype, "imageClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], WebcamComponent.prototype, "video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvas'),
        __metadata("design:type", Object)
    ], WebcamComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]])
    ], WebcamComponent.prototype, "trigger", null);
    WebcamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-webcam',
            template: __webpack_require__("../../../../../src/app/modules/webcam/webcam/webcam.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/webcam/webcam/webcam.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebcamComponent);
    return WebcamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/emotions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmotionsService = /** @class */ (function () {
    function EmotionsService(http) {
        this.http = http;
        // private baseUrl = 'http://localhost:58277';
        this.baseUrl = 'https://spyemotions.azurewebsites.net';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
            })
        };
    }
    EmotionsService.prototype.getEmotions = function () {
        return this.http.get(this.baseUrl + '/api/Emotions/GetEmotions');
    };
    EmotionsService.prototype.setImage = function (body) {
        return this.http.post(this.baseUrl + '/api/Emotions/PostImageGetEmotions', body, this.httpOptions);
    };
    EmotionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmotionsService);
    return EmotionsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/ls.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LsService = /** @class */ (function () {
    function LsService() {
    }
    LsService.prototype.getProfessionsRating = function () {
        var professionsRating = localStorage.getItem("professionsRating");
        if (professionsRating) {
            return professionsRating;
        }
        return undefined;
    };
    LsService.prototype.setProfessionsRating = function (professionsRating) {
        if (professionsRating) {
            professionsRating = JSON.stringify(professionsRating);
            localStorage.setItem("professionsRating", professionsRating);
        }
    };
    LsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LsService);
    return LsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConsts; });
var AppConsts = /** @class */ (function () {
    function AppConsts() {
    }
    AppConsts.weightsCollection = [
        {
            id: 1,
            name: 'Business',
            weight: 0,
            viewed: 0
        },
        {
            id: 2,
            name: 'Creative',
            weight: 0,
            viewed: 0
        },
        {
            id: 3,
            name: 'Culinary',
            weight: 0,
            viewed: 0
        },
        {
            id: 4,
            name: 'Engineering',
            weight: 0,
            viewed: 0
        },
        {
            id: 5,
            name: 'Fashion',
            weight: 0,
            viewed: 0
        },
        {
            id: 6,
            name: 'IT',
            weight: 0,
            viewed: 0
        },
        {
            id: 7,
            name: 'Media',
            weight: 0,
            viewed: 0
        },
        {
            id: 8,
            name: 'Medicine',
            weight: 0,
            viewed: 0
        },
        {
            id: 9,
            name: 'Military',
            weight: 0,
            viewed: 0
        },
        {
            id: 10,
            name: 'Pedagogy',
            weight: 0,
            viewed: 0
        },
        {
            id: 11,
            name: 'Political',
            weight: 0,
            viewed: 0
        },
        {
            id: 12,
            name: 'Service',
            weight: 0,
            viewed: 0
        },
        {
            id: 13,
            name: 'Sport',
            weight: 0,
            viewed: 0
        },
        {
            id: 14,
            name: 'Transportation',
            weight: 0,
            viewed: 0
        }
    ];
    AppConsts.imagesCollection = [
        {
            id: 1,
            name: 'Business',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 2,
            name: 'Creative',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 3,
            name: 'Culinary',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 4,
            name: 'Engineering',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 5,
            name: 'Fashion',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 6,
            name: 'IT',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 7,
            name: 'Media',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 8,
            name: 'Medicine',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 9,
            name: 'Military',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 10,
            name: 'Pedagogy',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 11,
            name: 'Political',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 12,
            name: 'Service',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 13,
            name: 'Sport',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        },
        {
            id: 14,
            name: 'Transportation',
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        }
    ];
    return AppConsts;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map