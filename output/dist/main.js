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

/***/ "./src/app/accelerator/accelerator.component.css":
/*!*******************************************************!*\
  !*** ./src/app/accelerator/accelerator.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2VsZXJhdG9yL2FjY2VsZXJhdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/accelerator/accelerator.component.html":
/*!********************************************************!*\
  !*** ./src/app/accelerator/accelerator.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br><br>\n\n <h1 class=\"display-4\" style=\"font-weight:bolder;padding-left:15px\">DevOps Accelerators</h1>\n<br>\n\n\n<div class=\"card-deck\" style=\"padding:15px\">\n\t <div class=\"card border-secondary bg-light mb-0\">\n    \t\t<img src=\"../../assets/main.png\" class=\"card-img-top\" alt=\"...\">\n    \t\t<div class=\"card-body\">\n      \t\t\t<h5 class=\"card-title\">CI-CD pipeline using Jenkins</h5>\n      \t\t\t<p class=\"card-text\">The accelerator uses Jenkins as an orchestrator to create AMI and instances as well as pipeline Provisioning purpose.</p>\n                         <button class=\"btn btn-outline-success\" routerLink=\"/accljenkins\">Visit</button>\n      \t\t</div>\n \t </div>\n\n\t  <div class=\"card border-secondary bg-light mb-0\">\n    \t\t<img src=\"../../assets/open1.png\" class=\"card-img-top\" alt=\"...\">\n    \t\t<div class=\"card-body\">\n      \t\t\t<h5 class=\"card-title\">Deploy war file using Open-shift and Helm chart</h5>\n      \t\t\t<p class=\"card-text\">The accelerator uses  managed Kubernetes to deploy application on different platforms.</p>\n       \t\t\t<button class=\"btn btn-outline-success\" routerLink=\"/acclopenshift\">Visit</button>\n     \t       </div>\n  \t</div>\n\n <div class=\"card border-secondary bg-light mb-0\">\n  \t  <img src=\"../../assets/kub2.png\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n        \t<h5 class=\"card-title\">IAAC using terraform and Packer</h5>\n     \t\t <p class=\"card-text\">The accelerator uses terraform and packer as IAAC to create kubernetes cluster and packer to create AMI.</p>\n \t\t<button class=\"btn btn-outline-success\" routerLink=\"/acclkube\">Visit</button>\n         </div>\n </div>\n\n   <div class=\"card border-secondary bg-light mb-0\">\n                <img src=\"../../assets/elk2.png\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                        <h5 class=\"card-title\">Container based standard Enterprise Logging - ELK</h5>\n                        <p class=\"card-text\">A templatized ELK setup for centralized logging across Application, Load Balancer, Webserver & Infra. Using pre-defined Logstash patterns for log parsing and actionable analysis</p>\n                        <a href=\"https://github.com/Jay-Wani/elastic-docker.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n                </div>\n         </div>\n</div>\n<div class=\"card-deck\" style=\"padding:15px\">\n <div class=\"card border-secondary bg-light mb-0\">\n   <img src=\"../../assets/dotnet.png\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Azure Devops pipeline for dotnet application.</h5>\n    <p class=\"card-text\">The accelerator aims to create a CI/CD pipeline for dotnet application and integrates sonarcloud and NuGet to it.</p>\n     <a href=\"https://github.com/Devops-Accelerators/pipelines-dotnet-core.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n  </div>\n</div>\n\n<div class=\"card border-secondary bg-light mb-0\">\n   <img src=\"../../assets/apf.png\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Python flask sample app</h5>\n    <p class=\"card-text\"></p>\n     <a href=\"https://github.com/ameet-nandihal/python-flask-sample-app.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n  </div>\n</div>\n <div class=\"card border-secondary bg-light mb-0\">\n   <img src=\"../../assets/devsecops.png\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">DevSecOps</h5>\n    <p class=\"card-text\">The accelerator aims to run pipeline in a more secured way using trufflehog, WASP,Zap testing and Archerysec to monitor the report of vulnerabilities in the code</p>\n     <a href=\"https://github.com/Devops-Accelerators/Security_check_pipeline.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n  </div>\n</div>\n <div class=\"card border-secondary bg-light mb-0\">\n   <img src=\"../../assets/azure_java.png\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Azure Devops pipeline for java application</h5>\n    <p class=\"card-text\"></p>\n     <a href=\"https://github.com/Devops-Accelerators/mtkcc.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n  </div>\n</div>\n<br>\n\n<br><br><br>\n</div>\n<br>\n\n<br><br><br>\n"

/***/ }),

/***/ "./src/app/accelerator/accelerator.component.ts":
/*!******************************************************!*\
  !*** ./src/app/accelerator/accelerator.component.ts ***!
  \******************************************************/
/*! exports provided: AcceleratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceleratorComponent", function() { return AcceleratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcceleratorComponent = /** @class */ (function () {
    function AcceleratorComponent() {
    }
    AcceleratorComponent.prototype.ngOnInit = function () {
    };
    AcceleratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accelerator',
            template: __webpack_require__(/*! ./accelerator.component.html */ "./src/app/accelerator/accelerator.component.html"),
            styles: [__webpack_require__(/*! ./accelerator.component.css */ "./src/app/accelerator/accelerator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcceleratorComponent);
    return AcceleratorComponent;
}());



/***/ }),

/***/ "./src/app/accl-jenkins/accl-jenkins.component.css":
/*!*********************************************************!*\
  !*** ./src/app/accl-jenkins/accl-jenkins.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 75%;\n  width: 80%;\n  padding-left: 20%;\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjbC1qZW5raW5zL2FjY2wtamVua2lucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvYWNjbC1qZW5raW5zL2FjY2wtamVua2lucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xuICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/accl-jenkins/accl-jenkins.component.html":
/*!**********************************************************!*\
  !*** ./src/app/accl-jenkins/accl-jenkins.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br><br>\n<div class=\"card-deck\">\n        <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../assets/iaac1.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n                <h5 class=\"card-title\">Pipeline using Jenkins Shared Library</h5>\n                <a href=\"https://github.com/Devops-Accelerators/JenkinsSharedPipeline.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n\n        </div>\n        </div>\n        <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../assets/dsl.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n                <h5 class=\"card-title\">Pipeline provisioning using Jenkins Job DSL</h5>\n                <a href=\"https://github.com/Devops-Accelerators/microservice_CI_CD_Provisioning.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n        </div>\n        </div>\n        \n\n\n</div>\n<br><br><br>\n"

/***/ }),

/***/ "./src/app/accl-jenkins/accl-jenkins.component.ts":
/*!********************************************************!*\
  !*** ./src/app/accl-jenkins/accl-jenkins.component.ts ***!
  \********************************************************/
/*! exports provided: AcclJenkinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcclJenkinsComponent", function() { return AcclJenkinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcclJenkinsComponent = /** @class */ (function () {
    function AcclJenkinsComponent() {
    }
    AcclJenkinsComponent.prototype.ngOnInit = function () {
    };
    AcclJenkinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accl-jenkins',
            template: __webpack_require__(/*! ./accl-jenkins.component.html */ "./src/app/accl-jenkins/accl-jenkins.component.html"),
            styles: [__webpack_require__(/*! ./accl-jenkins.component.css */ "./src/app/accl-jenkins/accl-jenkins.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcclJenkinsComponent);
    return AcclJenkinsComponent;
}());



/***/ }),

/***/ "./src/app/accl-kube/accl-kube.component.css":
/*!***************************************************!*\
  !*** ./src/app/accl-kube/accl-kube.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2wta3ViZS9hY2NsLWt1YmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/accl-kube/accl-kube.component.html":
/*!****************************************************!*\
  !*** ./src/app/accl-kube/accl-kube.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br><br>\n<div class=\"card-deck\">\n  \t<div class=\"card\">\n    \t<img class=\"card-img-top\" src=\"../../assets/aks1.png\" alt=\"Card image cap\">\n\t<div class=\"card-body\">\n\t\t<h5 class=\"card-title\">Azure Kubernetes Service</h5>\n                <a href=\"https://github.com/Devops-Accelerators/AKS-Terraform.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n      \n    \t</div>\n  \t</div>\n  \t<div class=\"card\">\n    \t<img class=\"card-img-top\" src=\"../../assets/eks1.png\" alt=\"Card image cap\">\n\t<div class=\"card-body\">\n\t\t<h5 class=\"card-title\">Elastic Container Service for Kubernetes</h5>\n                <a href=\"https://github.com/Devops-Accelerators/EKS-Terraform.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n    \t</div>\n  \t</div>\n\t <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../assets/pck.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n                <h5 class=\"card-title\">Packer</h5>\n                <a href=\"https://github.com/Devops-Accelerators/Packer.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n        </div>\n        </div>\n\n  \n</div>\n<br><br><br>\n"

/***/ }),

/***/ "./src/app/accl-kube/accl-kube.component.ts":
/*!**************************************************!*\
  !*** ./src/app/accl-kube/accl-kube.component.ts ***!
  \**************************************************/
/*! exports provided: AcclKubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcclKubeComponent", function() { return AcclKubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcclKubeComponent = /** @class */ (function () {
    function AcclKubeComponent() {
    }
    AcclKubeComponent.prototype.ngOnInit = function () {
    };
    AcclKubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accl-kube',
            template: __webpack_require__(/*! ./accl-kube.component.html */ "./src/app/accl-kube/accl-kube.component.html"),
            styles: [__webpack_require__(/*! ./accl-kube.component.css */ "./src/app/accl-kube/accl-kube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcclKubeComponent);
    return AcclKubeComponent;
}());



/***/ }),

/***/ "./src/app/accl-openshift/accl-openshift.component.css":
/*!*************************************************************!*\
  !*** ./src/app/accl-openshift/accl-openshift.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2wtb3BlbnNoaWZ0L2FjY2wtb3BlbnNoaWZ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/accl-openshift/accl-openshift.component.html":
/*!**************************************************************!*\
  !*** ./src/app/accl-openshift/accl-openshift.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br><br>\n\n<div class=\"card-deck\">\n  \t<div class=\"card\">\n    \t<img class=\"card-img-top\" src=\"../../assets/helm1.png\" alt=\"helm chart\">\n\t<div class=\"card-body\">\n\t\t<h5 class=\"card-title\">Helm Charts</h5>\n\t\t<p class=\"card-text\">Package manager for Kubernetes</p>\n                <a href=\"https://github.com/Devops-Accelerators/HelmCharts.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n            \n    \t</div>\n  \t</div>\n  \t<div class=\"card\">\n    \t<img class=\"card-img-top\" src=\"../../assets/estio.png\" alt=\"istio\">\n\t<div class=\"card-body\">\n\n\t\t<h5 class=\"card-title\">Istio</h5>\n\t\t<p class=\"card-text\">Connecting, securing, controlling, and observing services.</p>\n                <a href=\"https://github.com/Devops-Accelerators/istio-gcp.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n\n        </div>\n        </div>\n <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../assets/openshift1.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n\n                <h5 class=\"card-title\">OpenShift</h5>\n\t\t<p class=\"card-text\">Cloud development Platform as a Service</p>\n                <a href=\"https://github.com/Devops-Accelerators/OpenShift-AWS.git\" type=\"button\" class=\"btn btn-outline-success\">Visit</a>\n\n        </div>\n        </div>\n\n</div>\n<br><br><br>\n"

/***/ }),

/***/ "./src/app/accl-openshift/accl-openshift.component.ts":
/*!************************************************************!*\
  !*** ./src/app/accl-openshift/accl-openshift.component.ts ***!
  \************************************************************/
/*! exports provided: AcclOpenshiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcclOpenshiftComponent", function() { return AcclOpenshiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcclOpenshiftComponent = /** @class */ (function () {
    function AcclOpenshiftComponent() {
    }
    AcclOpenshiftComponent.prototype.ngOnInit = function () {
    };
    AcclOpenshiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accl-openshift',
            template: __webpack_require__(/*! ./accl-openshift.component.html */ "./src/app/accl-openshift/accl-openshift.component.html"),
            styles: [__webpack_require__(/*! ./accl-openshift.component.css */ "./src/app/accl-openshift/accl-openshift.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcclOpenshiftComponent);
    return AcclOpenshiftComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_accelerator_accelerator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accelerator/accelerator.component */ "./src/app/accelerator/accelerator.component.ts");
/* harmony import */ var src_app_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var src_app_accl_kube_accl_kube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/accl-kube/accl-kube.component */ "./src/app/accl-kube/accl-kube.component.ts");
/* harmony import */ var src_app_accl_openshift_accl_openshift_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/accl-openshift/accl-openshift.component */ "./src/app/accl-openshift/accl-openshift.component.ts");
/* harmony import */ var src_app_accl_jenkins_accl_jenkins_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/accl-jenkins/accl-jenkins.component */ "./src/app/accl-jenkins/accl-jenkins.component.ts");








var routes = [
    {
        path: '', component: src_app_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
    },
    {
        path: 'accelerator', component: src_app_accelerator_accelerator_component__WEBPACK_IMPORTED_MODULE_3__["AcceleratorComponent"]
    },
    {
        path: 'acclkube', component: src_app_accl_kube_accl_kube_component__WEBPACK_IMPORTED_MODULE_5__["AcclKubeComponent"]
    },
    {
        path: 'acclopenshift', component: src_app_accl_openshift_accl_openshift_component__WEBPACK_IMPORTED_MODULE_6__["AcclOpenshiftComponent"]
    },
    {
        path: 'accljenkins', component: src_app_accl_jenkins_accl_jenkins_component__WEBPACK_IMPORTED_MODULE_7__["AcclJenkinsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow:hidden\">\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _paralax_component_paralax_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paralax-component/paralax-component.component */ "./src/app/paralax-component/paralax-component.component.ts");
/* harmony import */ var _accelerator_accelerator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accelerator/accelerator.component */ "./src/app/accelerator/accelerator.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _accl_kube_accl_kube_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accl-kube/accl-kube.component */ "./src/app/accl-kube/accl-kube.component.ts");
/* harmony import */ var _accl_openshift_accl_openshift_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accl-openshift/accl-openshift.component */ "./src/app/accl-openshift/accl-openshift.component.ts");
/* harmony import */ var _accl_jenkins_accl_jenkins_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./accl-jenkins/accl-jenkins.component */ "./src/app/accl-jenkins/accl-jenkins.component.ts");
/* harmony import */ var _devsecops_devsecops_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./devsecops/devsecops.component */ "./src/app/devsecops/devsecops.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _paralax_component_paralax_component_component__WEBPACK_IMPORTED_MODULE_6__["ParalaxComponentComponent"],
                _accelerator_accelerator_component__WEBPACK_IMPORTED_MODULE_7__["AcceleratorComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _accl_kube_accl_kube_component__WEBPACK_IMPORTED_MODULE_11__["AcclKubeComponent"],
                _accl_openshift_accl_openshift_component__WEBPACK_IMPORTED_MODULE_12__["AcclOpenshiftComponent"],
                _accl_jenkins_accl_jenkins_component__WEBPACK_IMPORTED_MODULE_13__["AcclJenkinsComponent"],
                _devsecops_devsecops_component__WEBPACK_IMPORTED_MODULE_14__["DevsecopsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/devsecops/devsecops.component.css":
/*!***************************************************!*\
  !*** ./src/app/devsecops/devsecops.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldnNlY29wcy9kZXZzZWNvcHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/devsecops/devsecops.component.html":
/*!****************************************************!*\
  !*** ./src/app/devsecops/devsecops.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  devsecops works!\n</p>\n"

/***/ }),

/***/ "./src/app/devsecops/devsecops.component.ts":
/*!**************************************************!*\
  !*** ./src/app/devsecops/devsecops.component.ts ***!
  \**************************************************/
/*! exports provided: DevsecopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevsecopsComponent", function() { return DevsecopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevsecopsComponent = /** @class */ (function () {
    function DevsecopsComponent() {
    }
    DevsecopsComponent.prototype.ngOnInit = function () {
    };
    DevsecopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devsecops',
            template: __webpack_require__(/*! ./devsecops.component.html */ "./src/app/devsecops/devsecops.component.html"),
            styles: [__webpack_require__(/*! ./devsecops.component.css */ "./src/app/devsecops/devsecops.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevsecopsComponent);
    return DevsecopsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    margin:0;\n    /*padding:10px;*/\n    height:100%;\n    left: 0;\n    /*top: 10px;\n*/    width: 100%;\n    /* background-color:grey; */\n    color: black;\n    text-align: center;\n    margin-bottom:0px;\n    position:static;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsT0FBTztJQUNQO0NBQ0gsS0FBSyxXQUFXO0lBQ2IsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBtYXJnaW46MDtcbiAgICAvKnBhZGRpbmc6MTBweDsqL1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgLyp0b3A6IDEwcHg7XG4qLyAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7ICovXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICBwb3NpdGlvbjpzdGF0aWM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" style=\"color:white;\">\n      <!-- [  <p>copyright@2018</p>] -->\n      <div class=\"container-fluid padding\" style=\"background-color:#242440\">\n        <div class=\"row text-center\">\n            <div class=\"col-md-4\">\n\t     </div>\n            <div class=\"col-md-4\">\n                <h5>copyright@mindtree.com</h5>\n            </div>\n            <div class=\"col-md-4\">\n\t     </div>\n\t</div>\n\t<br>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box;}\n\nbody { \n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n  overflow: hidden;\n  background-color:#242440;\n  padding-top:5px;\ncolor:white;\n}\n\n.header a {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px; \n  line-height: 25px;\n  border-radius: 4px;\n}\n\n@media screen and (max-width: 500px) {\n  .header a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n  \n  .header-right {\n    float: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFCO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQixXQUFXO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XG5cbmJvZHkgeyBcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IzI0MjQ0MDtcbiAgcGFkZGluZy10b3A6NXB4O1xuY29sb3I6d2hpdGU7XG59XG5cbi5oZWFkZXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7IFxuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n<img src=\"../../assets/mind1.png\" alt=\"mindtree\" width=\"300px\" height=\"60px\">\n<div class=\"pull-right\" style=\"padding-left:20px\">\n<button type=\"button\"  routerLink=\"/\" class=\"btn btn-light btn-lg\">Home...</button>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\n    margin-bottom: 0;\n    padding: 0;\n  }\n  .navbar{\n    padding:0;\n    margin:0\n  }\n  .dropdown {\n    float: left;\n    overflow: hidden;\n}\n  .dropdown .dropbtn {\n    font-size: 17px;    \n    border: none;\n    outline: none;\n    color: white;\n    padding: 14px 16px;\n    background-color: inherit;\n    font-family: inherit;\n    margin: 0;\n}\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);\n    z-index:1;\n}\n  /* .carousel-inner > .item > img{ width:100%; height:410px;  */\n  .carousel-inner > .item > img{ width:100%; height: 61vh; \n    display: block;\n    margin:0px;\n    max-width: 100%;\n    width: 100%; }\n  .row{\n    margin:0px;\n    margin-bottom:10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtFQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjtFQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxTQUFTO0FBQ2I7RUFFQSw4REFBOEQ7RUFDOUQsK0JBQStCLFVBQVUsRUFBRSxZQUFZO0lBQ25ELGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVcsRUFBRTtFQUNqQjtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAubmF2YmFye1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MFxuICB9XG4gIC5kcm9wZG93biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRyb3Bkb3duIC5kcm9wYnRuIHtcbiAgICBmb250LXNpemU6IDE3cHg7ICAgIFxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgei1pbmRleDoxO1xufVxuXG4vKiAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZ3sgd2lkdGg6MTAwJTsgaGVpZ2h0OjQxMHB4OyAgKi9cbi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gaW1neyB3aWR0aDoxMDAlOyBoZWlnaHQ6IDYxdmg7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjowcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4ucm93e1xuICAgIG1hcmdpbjowcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/paralax-component/paralax-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/paralax-component/paralax-component.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax {\n  /* The image used */\n  background-image: url('main-qimg-099e3a2689b7cab81091e83abff08b9f.jpg');\n\n  /* Set a specific height */\n  min-height: 500px; \n\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.parallax3 {\n  /* The image used */\n  background-image: url('drew-beamer-679505-unsplash.jpg');\n\n  /* Set a specific height */\n  min-height: 500px;\n\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.parallax2 {\n  /* The image used */\n  background-image: url('trent-erwin-338084-unsplash.jpg');\n\n  /* Set a specific height */\n  min-height: 500px;\n\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.parallax4 {\n  /* The image used */\n  background-image: url('alvin-engler-48444-unsplash.jpg');\n\n  /* Set a specific height */\n  min-height: 500px;\n\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nbody {\n    font-family: sans-serif;\n}\n/* Style the header*/\n.header1 {\n    background-color: #BFEFFF;\n    padding: 20px;\n    color: black;\n}\n.tble {\npadding-top:10%;\npadding-bottom:10%;\npadding-left:10%;\n}\n.tble1{\npadding-top:10%;\npadding-left:40%;\nwidth:100%;}\n/* .carousel-inner > .item > img{ width:100%; height:410px;  */\n.carousel-inner > .item > img{ width:100%; height:100%;\n    display: block;\n    margin:0px;\n    max-width: 100%;\n    width: 100%; }\n.row{\n    margin-top:10px;\n    margin-bottom:0px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyYWxheC1jb21wb25lbnQvcGFyYWxheC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix1RUFBb0Y7O0VBRXBGLDBCQUEwQjtFQUMxQixpQkFBaUI7O0VBRWpCLHlDQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix3REFBcUU7O0VBRXJFLDBCQUEwQjtFQUMxQixpQkFBaUI7O0VBRWpCLHlDQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix3REFBcUU7O0VBRXJFLDBCQUEwQjtFQUMxQixpQkFBaUI7O0VBRWpCLHlDQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQix3REFBcUU7O0VBRXJFLDBCQUEwQjtFQUMxQixpQkFBaUI7O0VBRWpCLHlDQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0FBQ0EsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsVUFBVSxDQUFDO0FBQ1gsOERBQThEO0FBQzlELCtCQUErQixVQUFVLEVBQUUsV0FBVztJQUNsRCxjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXLEVBQUU7QUFDakI7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFyYWxheC1jb21wb25lbnQvcGFyYWxheC1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbGxheCB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9tYWluLXFpbWctMDk5ZTNhMjY4OWI3Y2FiODEwOTFlODNhYmZmMDhiOWYuanBnXCIpO1xuXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICBtaW4taGVpZ2h0OiA1MDBweDsgXG5cbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wYXJhbGxheDMge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvZHJldy1iZWFtZXItNjc5NTA1LXVuc3BsYXNoLmpwZ1wiKTtcblxuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cbiAgbWluLWhlaWdodDogNTAwcHg7XG5cbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wYXJhbGxheDIge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdHJlbnQtZXJ3aW4tMzM4MDg0LXVuc3BsYXNoLmpwZ1wiKTtcblxuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cbiAgbWluLWhlaWdodDogNTAwcHg7XG5cbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG4ucGFyYWxsYXg0IHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2FsdmluLWVuZ2xlci00ODQ0NC11bnNwbGFzaC5qcGdcIik7XG5cbiAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLyogU3R5bGUgdGhlIGhlYWRlciovXG4uaGVhZGVyMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JGRUZGRjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi50YmxlIHtcbnBhZGRpbmctdG9wOjEwJTtcbnBhZGRpbmctYm90dG9tOjEwJTtcbnBhZGRpbmctbGVmdDoxMCU7XG59XG4udGJsZTF7XG5wYWRkaW5nLXRvcDoxMCU7XG5wYWRkaW5nLWxlZnQ6NDAlO1xud2lkdGg6MTAwJTt9XG4vKiAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZ3sgd2lkdGg6MTAwJTsgaGVpZ2h0OjQxMHB4OyAgKi9cbi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gaW1neyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTsgfVxuLnJvd3tcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/paralax-component/paralax-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/paralax-component/paralax-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\"></div>\n\n<div style=\"height:400px;background-color:#E8E8E8;font-size:36px\">\n<table>\n<tr>\n<td>\n<div class=\"container\" style=\"width: 500px;padding:40px;margin-left:20px;height:300px;\">\n\n<div class=\"row\" style=\"width:450px;height:300px;\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" >\n     <div class=\"carousel-inner\">\n\n\n       <div class=\"item active\">\n         <img src=\"../../assets/jenkins.jpg\" alt=\"jenkins\"style=\"width:100%;\" >\n       </div>\n\n       <div class=\"item\">\n         <img src=\"../../assets/terraform.png\" alt=\"terraform\"style=\"width:100%;\" >\n       </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/packer.png\" alt=\"packer\"style=\"width:100%;\" >\n      </div>\n     </div>\n  </div>\n</div>\n\n \n</div>\n</td>\n<td>\n  <div class=\"container\" style=\"width: 300px;padding:30px;margin-left:10px;\">\n    <h5>Accelerator-1</h5>\n    <a href=\"#\" class=\"btn btn-primary\">Git link</a>\n  </div>\n\n</td>\n</tr>\n</table>\n</div>\n\n\n<div class=\"parallax2\"></div>\n\n<div style=\"height:500px;background-color:#E8E8E8;font-size:36px\">\n<table>\n<tr>\n<td>\n<div class=\"card\" style=\"width: 300px;padding:10px 10px 10px 10px;\">\n\n<div class=\"row\" style=\"width:100%\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" >\n     <div class=\"carousel-inner\">\n\n\n       <div class=\"item active\">\n         <img src=\"../../assets/jenkins.jpg\" alt=\"jenkins\"style=\"width:100%;\" >\n       </div>\n\n       <div class=\"item\">\n         <img src=\"../../assets/terraform.png\" alt=\"terraform\"style=\"width:100%;\" >\n       </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/packer.png\" alt=\"packer\"style=\"width:100%;\" >\n      </div>\n     </div>\n  </div>\n</div>\n\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Accelerator-1</h5>\n    <a href=\"#\" class=\"btn btn-primary\">Git link</a>\n  </div>\n</div>\n</td>\n<td>\n<p>hihihi</p>\n</td>\n</tr>\n</table>\n</div>\n\n\n<div class=\"parallax4\"></div>\n\n<div style=\"height:400px;background-color:#E8E8E8;font-size:36px\">\n<table>\n<tr>\n<td>\n<div class=\"card\" style=\"width: 300px;padding:30px;margin-left:10px;\">\n\n<div class=\"row\" style=\"width:100%\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" >\n     <div class=\"carousel-inner\">\n\n\n       <div class=\"item active\">\n         <img src=\"../../assets/jenkins.jpg\" alt=\"jenkins\"style=\"width:100%;\" >\n       </div>\n\n       <div class=\"item\">\n         <img src=\"../../assets/terraform.png\" alt=\"terraform\"style=\"width:100%;\" >\n       </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/packer.png\" alt=\"packer\"style=\"width:100%;\" >\n      </div>\n     </div>\n  </div>\n</div>\n\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Accelerator-1</h5>\n    <a href=\"#\" class=\"btn btn-primary\">Git link</a>\n  </div>\n</div>\n</td>\n<td>\n<p>hhh</p>\n</td>\n</tr>\n</table>\n\n</div>\n\n<div class=\"parallax3\"></div>\n\n<div style=\"height:400px;background-color:#E8E8E8;font-size:36px\">\n<table>\n<tr>\n<td>\n<div class=\"card\" style=\"width: 300px;padding:30px;margin-left:10px;\">\n\n<div class=\"row\" style=\"width:100%\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" >\n     <div class=\"carousel-inner\">\n\n\n       <div class=\"item active\">\n         <img src=\"../../assets/jenkins.jpg\" alt=\"jenkins\"style=\"width:100%;\" >\n       </div>\n\n       <div class=\"item\">\n         <img src=\"../../assets/terraform.png\" alt=\"terraform\"style=\"width:100%;\" >\n       </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/packer.png\" alt=\"packer\"style=\"width:100%;\" >\n      </div>\n     </div>\n  </div>\n</div>\n\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Accelerator-1</h5>\n    <a href=\"#\" class=\"btn btn-primary\">Git link</a>\n  </div>\n</div>\n</td>\n<td>\n<p>hihih</p>\n</td>\n</tr>\n</table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/paralax-component/paralax-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paralax-component/paralax-component.component.ts ***!
  \******************************************************************/
/*! exports provided: ParalaxComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParalaxComponentComponent", function() { return ParalaxComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParalaxComponentComponent = /** @class */ (function () {
    function ParalaxComponentComponent() {
    }
    ParalaxComponentComponent.prototype.ngOnInit = function () {
    };
    ParalaxComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paralax-component',
            template: __webpack_require__(/*! ./paralax-component.component.html */ "./src/app/paralax-component/paralax-component.component.html"),
            styles: [__webpack_require__(/*! ./paralax-component.component.css */ "./src/app/paralax-component/paralax-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParalaxComponentComponent);
    return ParalaxComponentComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  overflow: hidden;\n  background-color:#242440;\n  padding-top:5px;\ncolor:white;\n}\n/*.carousel-inner > .item > img{ width:100%; height:500px;\n/*.carousel-inner > .item > img{ width:100%; height: 61vh;\n    display: block;\n    margin:0px;\n    max-width: 100%;\n    width: 100%; }*/\n/*.row{\n    margin:0px;\n    margin-bottom:10px;\n}*/\n/* @media only screen  and (max-width : 100%) {\n .row> img{ width:100%; height:500px;\n/*.carousel-inner > .item > img{ width:100%; height: 61vh;\n    display: block;\n    margin:0px;\n    max-width: 100%;\n    width: 100%; }\n.row{\n    margin:0px;\n    margin-bottom:10px;\n}*/\n/*@media only screen  and (min-width : 1224px) {\n .carousel-inner > .item > img{ width:100%; height:500px;\n/*.carousel-inner > .item > img{ width:100%; height: 61vh;\n    display: block;\n    margin:0px;\n    max-width: 100%;\n    width: 100%; }\n.row{\n    margin:0px;\n    margin-bottom:10px;\n}\n}\n\n@media only screen  and (min-width : 975px) and (max-width : 1234px) {\n .carousel-inner > .item > img{ width:100%; height:500px;\n/*.carousel-inner > .item > img{ width:100%; height: 61vh;\n    display: block;\n    margin:0px;\n    max-width: 100%;\n    width: 100%; }\n.row{\n    margin:0px;\n    margin-bottom:10px;\n}\n}\n\n@media only screen  and (min-width : 768px) and (max-width : 1224px) {\n .carousel-inner > .item > img{ width:100%; height:500px;\n/*.carousel-inner > .item > img{ width:100%; height: 61vh;\n    display: block;\n    margin:0px;\n    max-width: 100%;\n    width: 100%; }\n.row{\n    margin:0px;\n    margin-bottom:10px;\n}\n}\n\n@media only screen  and (max-width : 768px) {\n .carousel-inner > .item > img{ width:100%; height:500px;\n/*.carousel-inner > .item > img{ width:100%; height: 61vh;\n    display: block;\n    margin:0px;\n    max-width: 100%;\n    width: 100%; }\n.row{\n    margin:0px;\n    margin-bottom:10px;\n}\n}*/\n.img-container{\n    \n    width: 100%;\n    height: 85vh;\n    background-image: url(\"/home/ubuntu/myapp/src/assets/accelerator_driver.png\");\n    background-repeat: no-repeat;\n  background-size: cover;\n  /* The image used*/ \n/*background-image: url(\"/home/ubuntu/myapp/src/assets/accelerator_driver.png\");*/\n /* height: 80%;\n  overflow: hidden;*/\n}\n.image{\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakIsV0FBVztBQUNYO0FBQ0E7Ozs7O21CQUttQjtBQUNuQjs7O0VBR0U7QUFFRjs7Ozs7Ozs7OztFQVVFO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0RDO0FBQ0Y7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWiw2RUFBNkU7SUFDN0UsNEJBQTRCO0VBQzlCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEIsaUZBQWlGO0NBQ2hGO29CQUNtQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IzI0MjQ0MDtcbiAgcGFkZGluZy10b3A6NXB4O1xuY29sb3I6d2hpdGU7XG59XG4vKi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gaW1neyB3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7XG4vKi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gaW1neyB3aWR0aDoxMDAlOyBoZWlnaHQ6IDYxdmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOjBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7IH0qL1xuLyoucm93e1xuICAgIG1hcmdpbjowcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufSovXG5cbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGggOiAxMDAlKSB7XG4gLnJvdz4gaW1neyB3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7XG4vKi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gaW1neyB3aWR0aDoxMDAlOyBoZWlnaHQ6IDYxdmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOjBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7IH1cbi5yb3d7XG4gICAgbWFyZ2luOjBweDtcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG59Ki9cblxuIC8qQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aCA6IDEyMjRweCkge1xuIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gaW1neyB3aWR0aDoxMDAlOyBoZWlnaHQ6NTAwcHg7XG4vKi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gaW1neyB3aWR0aDoxMDAlOyBoZWlnaHQ6IDYxdmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOjBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7IH1cbi5yb3d7XG4gICAgbWFyZ2luOjBweDtcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG59XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiA5NzVweCkgYW5kIChtYXgtd2lkdGggOiAxMjM0cHgpIHtcbiAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZ3sgd2lkdGg6MTAwJTsgaGVpZ2h0OjUwMHB4O1xuLyouY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZ3sgd2lkdGg6MTAwJTsgaGVpZ2h0OiA2MXZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjowcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4ucm93e1xuICAgIG1hcmdpbjowcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LXdpZHRoIDogMTIyNHB4KSB7XG4gLmNhcm91c2VsLWlubmVyID4gLml0ZW0gPiBpbWd7IHdpZHRoOjEwMCU7IGhlaWdodDo1MDBweDtcbi8qLmNhcm91c2VsLWlubmVyID4gLml0ZW0gPiBpbWd7IHdpZHRoOjEwMCU7IGhlaWdodDogNjF2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTsgfVxuLnJvd3tcbiAgICBtYXJnaW46MHB4O1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbn1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XG4gLmNhcm91c2VsLWlubmVyID4gLml0ZW0gPiBpbWd7IHdpZHRoOjEwMCU7IGhlaWdodDo1MDBweDtcbi8qLmNhcm91c2VsLWlubmVyID4gLml0ZW0gPiBpbWd7IHdpZHRoOjEwMCU7IGhlaWdodDogNjF2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTsgfVxuLnJvd3tcbiAgICBtYXJnaW46MHB4O1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbn1cbn0qL1xuLmltZy1jb250YWluZXJ7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9ob21lL3VidW50dS9teWFwcC9zcmMvYXNzZXRzL2FjY2VsZXJhdG9yX2RyaXZlci5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLyogVGhlIGltYWdlIHVzZWQqLyBcbi8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2hvbWUvdWJ1bnR1L215YXBwL3NyYy9hc3NldHMvYWNjZWxlcmF0b3JfZHJpdmVyLnBuZ1wiKTsqL1xuIC8qIGhlaWdodDogODAlO1xuICBvdmVyZmxvdzogaGlkZGVuOyovXG59XG4uaW1hZ2V7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n<img src=\"../../assets/mind1.png\" alt=\"mindtree\" width=\"300px\" height=\"60px\">\n<div class=\"pull-right\" style=\"padding-left:20px\">\n<button type=\"button\"  routerLink=\"/accelerator\" class=\"btn btn-light btn-lg\">Lets start...</button>\n</div>\n</div>\n                  \n\n           \t\t<!--<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" >\n    \t\t\t\n     \t\t\t<ol class=\"carousel-indicators\" >\n        \t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\"  class=\"active\"></li>\n        \t\t<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        \t\t<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        \t\t<li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n        \t\t <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li> \n    \t\t\t </ol>-->\n\n     \t\t\t<!-- Wrapper for slides -->\n     \n\t\t\t\t<!--<div class=\"carousel-inner\">-->\n\n\n      \t\t\t\t\t\t <!--<div class=\"item active\">\n         \t\t\t\t\t<img src=\"../../../assets/acc1st.png\" alt=\"hotel2\"style=\"width: 100%\" >\n       \t\t\t\t\t\t</div>-->\n                                               \n       \t\t\t\t\t       <div class=\"img-container\">\t\n         \t\t\t\t\t  <img class=\"image\"  src=\"../../../assets/accelerator_driver.png\" align=\"middle\"  alt=\"Responsive image\" > \n\t\t\t\t\t\t</div> \n       \t\t\t\t\n\n      \t\t\t\t\t\t<!--<div class=\"item\">\n        \t\t\t\t\t<img src=\"../../../assets/acc3rd.png\" alt=\"hotel3\"style=\"width: 100%\" >\n      \t\t\t\t\t\t</div>-->\n      \t\t\t\t\t\t\t\n\t\t\t\t\t\n\n\t\t\t\t\t<!--\t<div class=\"item\">\n        \t\t\t\t\t<img src=\"../../../assets/acc4th.png\" alt=\"hotel3\"style=\"width: 100%\" >\n      \t\t\t\t\t\t</div>-->\n    \t\t\t\t<!-- </div>-->\n\n    \t\t\t\t<!-- <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n     \t\t\t\t <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      \t\t\t\t<span class=\"sr-only\">Previous</span>\n  \t\t\t\t  </a>\n   \t\t\t\t <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      \t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\n      \t\t\t\t<span class=\"sr-only\">Next</span>\n    \t\t\t\t</a>-->\n  \t<!--\t</div>-->\n<!--</div>--> \n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map