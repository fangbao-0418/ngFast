!function e(r,o,t){function i(n,f){if(!o[n]){if(!r[n]){var c="function"==typeof require&&require;if(!f&&c)return c(n,!0);if(s)return s(n,!0);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}var u=o[n]={exports:{}};r[n][0].call(u.exports,function(e){var o=r[n][1][e];return i(o?o:e)},u,u.exports,e,r,o,t)}return o[n].exports}for(var s="function"==typeof require&&require,n=0;n<t.length;n++)i(t[n]);return i}({"./app/coffee/app.coffee":[function(e,r,o){e(7),e(8),e(9),e(2),e(6),e(3),angular.element(document).ready(function(){var r;return r=["ui.router","templates","app.controllers","app.services","app.directives"],angular.module("app",r).constant("AppSettings",e(1)).config(e(5)).run(e(4)),angular.bootstrap(document,["app"])})},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/constants.coffee",2:"/Users/soliury/soliury/work/git/ngFast/app/coffee/controllers/index.coffee",3:"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/index.coffee",4:"/Users/soliury/soliury/work/git/ngFast/app/coffee/on_run.coffee",5:"/Users/soliury/soliury/work/git/ngFast/app/coffee/routes.coffee",6:"/Users/soliury/soliury/work/git/ngFast/app/coffee/services/index.coffee",7:"angular",8:"angular-ui-router",9:"templates.js"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/config.coffee":[function(e,r,o){var t,i,s,n,f,c;f="192.168.31.142",c={baseApi:"http://lingyong.me"},s={baseApi:"http://test.lingyong.me"},i={baseApi:"http://"+f+":3000"},t={homeCoverMinHeight:500},n=function(){return s}(),angular.extend(t,n),r.exports=t},{}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/constants.coffee":[function(e,r,o){var t,i;i=e(1),t={appTitle:"NgFast · A boilerplate using AngularJS, Coffee, SASS, Gulp, and Browserify",apiUrl:i.baseApi},r.exports=t},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/config.coffee"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/controllers/example.coffee":[function(e,r,o){var t,i;i=e(1),t=function(){var e;return e=this,e.title="AngularJS, Gulp, and Browserify",e.number=1234},i.controller("ExampleCtrl",t)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/controllers/index.coffee"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/controllers/index.coffee":[function(e,r,o){e(2),r.exports=angular.module("app.controllers",[]),e(1)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/controllers/example.coffee",2:"angular"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/cover.coffee":[function(e,r,o){var t,i,s;i="../config",s=i.homeCoverMinHeight,t=function(){return function(e,r,o){var t;return t=window.innerHeight,s>t&&(t=s),r.css("height",t+"px")}},e(1).directive("cover",t)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/index.coffee"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/example.coffee":[function(e,r,o){var t,i;t=e(1),i=function(){var e;return e={restrict:"EA",link:function(e,r){return r.on("click",function(){return console.log("element clicked")})}}},t.directive("exampleDirective",i)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/index.coffee"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/index.coffee":[function(e,r,o){e(4),r.exports=angular.module("app.directives",[]),e(2),e(1),e(3)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/cover.coffee",2:"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/example.coffee",3:"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/well.coffee",4:"angular"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/well.coffee":[function(e,r,o){var t;t=function(e,r){return function(o,t,i){return angular.element(e).bind("scroll",function(){var e,o,i;return i=r.getScrollPos(),e=window.innerHeight,o=1-i/e,o>0?t.css("background-image","linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0, rgba(0, 0, 0, "+o+") 100%)"):void 0})}},t.$inject=["$window","util"],e(1).directive("well",t)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/directives/index.coffee"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/on_run.coffee":[function(e,r,o){var t;t=function(e,r){return e.$on("$stateChangeSuccess",function(o,t){return e.pageTitle="",t.title&&(e.pageTitle+=t.title,e.pageTitle+=" · "),e.pageTitle+=r.appTitle})},t.$inject=["$rootScope","AppSettings"],r.exports=t},{}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/routes.coffee":[function(e,r,o){var t;t=function(e,r,o){return r.html5Mode(!0),e.state("Home",{url:"/",controller:"ExampleCtrl as home",templateUrl:"home.html"}),o.otherwise("/")},t.$inject=["$stateProvider","$locationProvider","$urlRouterProvider"],r.exports=t},{}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/services/example.coffee":[function(e,r,o){var t,i;i=e(1),t=function(e,r,o){var t;return t={},t.get=function(){var t;return t=e.defer(),r.get(o.apiUrl+"/getinfo").success(function(e){return t.resolve(e)}).error(function(e,r){return t.reject(e,r)}),t.promise},t},t.$inject=["$q","$http","AppSettings"],i.service("ExampleService",t)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/services/index.coffee"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/services/index.coffee":[function(e,r,o){e(3),r.exports=angular.module("app.services",[]),e(1),e(2)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/services/example.coffee",2:"/Users/soliury/soliury/work/git/ngFast/app/coffee/services/util.coffee",3:"angular"}],"/Users/soliury/soliury/work/git/ngFast/app/coffee/services/util.coffee":[function(e,r,o){var t;t=function(){var e;return e={},e.getScrollPos=function(){var e;return e=0,window.pageYOffset?e=window.pageYOffset:document.compatMode&&"BackCompat"!==document.compatMode?e=document.documentElement.scrollTop:window.body&&(e=document.body.scrollTop),e},e},e(1).factory("util",t)},{1:"/Users/soliury/soliury/work/git/ngFast/app/coffee/services/index.coffee"}]},{},["./app/coffee/app.coffee"]);