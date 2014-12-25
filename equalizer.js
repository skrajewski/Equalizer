/*jslint browser:true */

/**
 * Equalizer - A simple way to keep elements with equal height!
 *
 * @author Szymon Krajewski szykra@gmail.com
 * @license The MIT License (MIT)
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
        if (!(this instanceof Equalizer)) {
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

            maxHeight = Math.max(maxHeight, this.blocks[i].clientHeight);
        }

        for (i = 0; i < max; i += 1) {
            this.blocks[i].style.minHeight = maxHeight + "px";
        }
    };

    return Equalizer;
}());
