/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _background = __webpack_require__(1);
	
	var _background2 = _interopRequireDefault(_background);
	
	var _scroll = __webpack_require__(2);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  $('.animation-wrapper').hide();
	  $('.about-wrapper').hide();
	  $('.contact-wrapper').hide();
	  $('flikr-carousel').carousel({
	    interval: false
	  });
	  $('typewars-carousel').carousel({
	    interval: false
	  });
	  $('overtrack-carousel').carousel({
	    interval: false
	  });
	
	  (0, _scroll2.default)();
	
	  var canvas = document.getElementById('canvas');
	  new _background2.default(canvas);
	
	  var prefix = function () {
	    var styles = window.getComputedStyle(document.documentElement, ''),
	        pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1],
	        dom = 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1];
	    return {
	      dom: dom,
	      lowercase: pre,
	      css: '-' + pre + '-',
	      js: pre[0].toUpperCase() + pre.substr(1)
	    };
	  }();
	
	  var animationEnd = '\n                        ' + prefix['lowercase'] + 'AnimationEnd\n                        ' + prefix['lowercase'] + 'animationend\n                       ';
	  $.fn.extend({
	    animateCss: function animateCss(animationName) {
	      var _this = this;
	
	      $(this).addClass('animated ' + animationName).one(animationEnd, function () {
	        $(_this).removeClass('animated ' + animationName);
	      });
	    }
	  });
	
	  $('.popper li').mouseover(function (e) {
	    $(e.currentTarget).animateCss('rubberBand');
	  });
	
	  $('.home').one(animationEnd, function (e) {
	    $('.home-h2').animateCss('tada');
	  });
	
	  $('.fa-bars').click(function (e) {
	    $('.fa-bars').toggle('fast', function () {
	      $('nav').toggleClass('hidden-xs');
	    });
	  });
	
	  $('.fa-times').click(function (e) {
	    $('nav').toggleClass('hidden-xs');
	    $('.fa-bars').toggle();
	  });
	
	  $('#home-link').click(function () {
	    $('html,body').animate({
	      scrollTop: $(".home").offset().top + 20 }, 'slow', function () {
	      return $('.home-h2').animateCss('tada');
	    });
	  });
	
	  $('#port-link').click(function () {
	    $('html,body').animate({
	      scrollTop: $(".portfolio").offset().top + 20 }, 'slow');
	  });
	
	  $('#about-link').click(function () {
	    $('html,body').animate({
	      scrollTop: $(".about").offset().top + 20 }, 'slow');
	  });
	
	  $('#contact-link').click(function () {
	    $('html,body').animate({
	      scrollTop: $(document).height() + 1000 }, 'slow');
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var rand = function rand(num) {
	  return Math.round(Math.random() * num);
	};
	
	var BackgroundManager = function () {
	  function BackgroundManager(canvas) {
	    var _this = this;
	
	    _classCallCheck(this, BackgroundManager);
	
	    this.canvas = canvas;
	    this.ctx = canvas.getContext("2d");
	    this.canvas.width = innerWidth;
	    this.size = window.innerWidth < 931 ? 2 : 5;
	    this.canvas.height = innerHeight;
	    this.stage = new createjs.Stage(this.canvas);
	    createjs.Ticker.setFPS(60);
	    createjs.Ticker.addEventListener("tick", function () {
	      return _this.tick();
	    });
	    this.draw();
	  }
	
	  _createClass(BackgroundManager, [{
	    key: "tick",
	    value: function tick() {
	      this.stage.update();
	    }
	  }, {
	    key: "draw",
	    value: function draw() {
	      var _this2 = this;
	
	      var i = 0;
	      window.setInterval(function () {
	        var circle = new createjs.Shape();
	        i += 1;
	        _this2.addCircle(circle, i);
	      }, 50);
	    }
	  }, {
	    key: "addCircle",
	    value: function addCircle(circle, i) {
	      var color = i % 2 === 0 ? '#8f9193' : 'rgb(106,168,79)';
	      var x = Math.round(Math.random() * this.canvas.width);
	      var y = Math.round(Math.random() * this.canvas.height);
	      circle.graphics.beginFill(color).drawCircle(x, y, rand(this.size));
	      this.move(circle);
	      this.stage.addChild(circle);
	    }
	  }, {
	    key: "move",
	    value: function move(circle) {
	      var _this3 = this;
	
	      var x = circle.x + rand(10);
	      var y = circle.y + rand(10);
	      createjs.Tween.get(circle, { loop: true }).to({ x: x }, 1000, createjs.Ease.getPowInOut(4)).to({ alpha: 0, y: y - 100 }, 500, createjs.Ease.getPowInOut(2)).to({ alpha: 0, y: y + 40 }, 100).to({ alpha: 1, y: x - 100 }, 500, createjs.Ease.getPowInOut(2)).to({ x: y }, 800, createjs.Ease.getPowInOut(2)).call(function () {
	        return _this3.tweenComplete(circle);
	      });
	    }
	  }, {
	    key: "tweenComplete",
	    value: function tweenComplete(circle) {
	      this.stage.removeChild(circle);
	    }
	  }]);
	
	  return BackgroundManager;
	}();
	
	exports.default = BackgroundManager;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var checkScrolls = function checkScrolls() {
	  return $(document).scroll(function () {
	    var navTop = $('nav').offset().top;
	    var portfolioTop = $('.portfolio').offset().top;
	    var barsTop = $('.fa-bars').offset().top;
	    var aboutTop = $('.about').offset().top;
	    var contactTop = $('.contact').offset().top;
	    if (navTop > aboutTop || barsTop > aboutTop) {
	      $('nav').removeClass('light-nav');
	      $('.fa-bars').removeClass('light-bars');
	    } else if (navTop > portfolioTop || barsTop > portfolioTop) {
	      $('nav').addClass('light-nav');
	      $('.fa-bars').addClass('light-bars');
	    } else {
	      $('nav').removeClass('light-nav');
	      $('.fa-bars').removeClass('light-bars');
	    }
	
	    if ($(document).scrollTop() > portfolioTop - 250) {
	      $('.animation-wrapper').show();
	      $('.animation-wrapper').addClass('fadeIn');
	    }
	
	    if ($(document).scrollTop() > aboutTop - 350) {
	      $('.about-wrapper').show();
	      $('.about-wrapper').addClass('fadeIn');
	    }
	
	    if ($(document).scrollTop() > contactTop - 350) {
	      $('.contact-wrapper').show();
	      $('.contact-wrapper').animateCss('fadeIn');
	      $('.contact ul li').animateCss('swing');
	    }
	  });
	};
	
	exports.default = checkScrolls;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map