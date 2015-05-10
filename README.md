Equalizer
===========================
![npm version](https://img.shields.io/npm/v/equalizer.svg)
![bower version](https://img.shields.io/bower/v/equalizer.svg)
![dependencies](https://img.shields.io/david/skrajewski/equalizer.svg)
![devDependencies](https://img.shields.io/david/dev/skrajewski/equalizer.svg)

Dependency free package to keep HTML elements with equal height!

## Install

#### Using _bower_
```
bower install equalizer
```

#### Using _npm_

```
npm install equalizer
```

## What is Equalizer?

Equalizer is small JavaScript file. Sometimes you need to keep some block with equal height, e.g all divs in row. Equalizer gets maximum height and set it to all blocks as min-height property.

Before equalize:
![before equalize](http://i.imgur.com/4NWL6Sk.png, "Blocks before equalize")

After:
![before equalize](http://i.imgur.com/lq7EUcd.png, "Blocks after equalize")

## How to use

### Import directly in HTML through `<script>` tag

After import equalizer directly in **HTML** it will expose in global variable named `Equalizer`

```html
<script src="/path/to/script/equalizer.min.js"></script>
<script>
    var eq = new Equalizer('.row .align');
    eq.align();

    // or

    var blocks = document.querySelectorAll('.row .align');
    var eq2 = new Equalizer(blocks);
    eq2.align();
</script>
```

### *CommonJS* (node style), e.g. using browserify
```javascript
var Equalizer = require('equalizer');
var eq = new Equalizer('.row .align');

eq.align();
```

### *RequireJS* (AMD)
```javascript
requirejs(['equalizer'], function(Equalizer) {
    var blocks = new Equalizer('.row .align');
    blocks.align();
});
```

### Simple alignment
```javascript
Equalizer('.row .align').align();
```

## License
The MIT License. Copyright &copy; 2014 - 2015 Szymon Krajewski.
