(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Equalizer=e()}(this,function(){var t=function(){"use strict";function t(e){return this instanceof t?"string"==typeof e?void(this.blocks=document.querySelectorAll(e)):void(this.blocks=e):new t(e)}return t.prototype.align=function(){var t,e=0,i=this.blocks.length;for(t=0;i>t;t+=1)this.blocks[t].style.minHeight="",e=Math.max(e,this.blocks[t].clientHeight);for(t=0;i>t;t+=1)this.blocks[t].style.minHeight=e+"px"},t}();return t});
},{}],2:[function(require,module,exports){
var Equalizer = require('../');
var equalizerString = new Equalizer('div');
var equalizerBlock = new Equalizer(document.querySelectorAll('article'));

equalizerString.align();
equalizerBlock.align();

},{"../":1}]},{},[2]);
