var Equalizer = require('../');
var equalizerString = new Equalizer('div');
var equalizerBlock = new Equalizer(document.querySelectorAll('article'));

equalizerString.align();
equalizerBlock.align();
