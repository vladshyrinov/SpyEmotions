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
exports.push([module.i, "#snapshotBtn {\r\n    margin-top: 5px;\r\n    font-size: 1.2em;\r\n  }\r\n  \r\n  .snapshot {\r\n    text-align: center;\r\n  }\r\n  \r\n  ul {\r\n    padding-bottom: 20px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='panel-heading'>\r\n  {{greetings}}\r\n</h2>\r\n<hr/>\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Ngx-Webcam Demo\r\n  </h1>\r\n\r\n  <div>\r\n    <app-webcam [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\"></app-webcam>\r\n    <br/>\r\n    <button id=\"snapshotBtn\" (click)=\"triggerSnapshot();\">Take A Snapshot</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"snapshot\" *ngIf=\"webcamImage\">\r\n  <h2>Nice one!</h2>\r\n  <img [src]=\"webcamImage.imageAsDataUrl\"/>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_emotions_service__ = __webpack_require__("../../../../../src/app/services/emotions.service.ts");
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
    function AppComponent(emotionsService) {
        // this.emotionsService.getEmotions().toPromise().then( result => {
        //   console.log(result);
        // });
        this.emotionsService = emotionsService;
        this.trigger = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.webcamImage = null;
        // this.emotionsService.setImage(body).subscribe( result => {
        //   console.log(result);
        // });
    }
    AppComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    AppComponent.prototype.handleImage = function (webcamImage) {
        this.webcamImage = webcamImage;
        var body = {
            imageBase64: ''
        };
        body.imageBase64 = webcamImage.imageAsBase64;
        this.emotionsService.setImage(body).subscribe(function (result) {
            console.log(result[0]);
        });
    };
    Object.defineProperty(AppComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_emotions_service__["a" /* EmotionsService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_webcam_webcam_module__ = __webpack_require__("../../../../../src/app/modules/webcam/webcam.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_emotions_service__ = __webpack_require__("../../../../../src/app/services/emotions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__modules_webcam_webcam_module__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_emotions_service__["a" /* EmotionsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
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
        this.imageCapture = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.initError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.imageClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], WebcamComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], WebcamComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], WebcamComponent.prototype, "imageCapture", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], WebcamComponent.prototype, "initError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], WebcamComponent.prototype, "imageClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], WebcamComponent.prototype, "video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('canvas'),
        __metadata("design:type", Object)
    ], WebcamComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]])
    ], WebcamComponent.prototype, "trigger", null);
    WebcamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmotionsService);
    return EmotionsService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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