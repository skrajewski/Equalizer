(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Equalizer = factory();
  }
}(this, function() {
/*jslint browser:true */

/**
 * Equalizer - A simple way to keep elements with equal height!
 *
 * @author Szymon Krajewski szykra@gmail.com
 * @license The MIT License (MIT)
 * 
 */
var Equalizer = (function () {
    "use strict";

    /**
     * Initial the equalizer with 
     *
     * @param {String} blocks
     * @constructor
     */
    function Equalizer(blocks) {
        if (!this instanceof Equalizer) {
            return new Equalizer(blocks);
        }

        this.blocks = document.querySelectorAll(blocks);
    }

    /**
     * Recalculate height of blocks
     */
    Equalizer.prototype.align = function () {
        var maxHeight = 0,
            max = this.blocks.length,
            i;

        for (i = 0; i < max; i += 1) {
            this.blocks[i].style.minHeight = "";

            if (this.blocks[i].clientHeight > maxHeight) {
                maxHeight = this.blocks[i].clientHeight;
            }
        }

        for (i = 0; i < max; i += 1) {
            this.blocks[i].style.minHeight = maxHeight + "px";
        }
    };

    return Equalizer;
}());

return Equalizer;
}));

},{}],2:[function(require,module,exports){
var Equalizer = require('../dist/equalizer.js'),
	eq = new Equalizer('div');

eq.align();
},{"../dist/equalizer.js":1}]},{},[2]);
