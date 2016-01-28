# vue-touch


## Introduction

Vue-touch is the easiest way to use HammerJS with the excellent VueJS framework, it's essential to make decent mobile app.. **Compatible with VueJS 1.x**


## Usage
Vue-touch adds the **`v-touch:event`** directive to your vue instance. You can easily play with `tap` `doubletap` `press` `swipe` `swiperight` `swipeleft` and more.

## Installation
Just add `vue-touch.min.js` to your project after Vue.js. It includes a fresh version of Hammer.

```html
<script src="lib/vue.min.js"></script>
<script src="lib/vue-touch.min.js"></script>
```


## Example
```html
<div id="app">
  <a v-touch:swipeleft="plus()" v-touch:swiperight="moins()" v-model="number">{{ number }}</a>
</div>
```


```javascript
var app = new Vue({
  el: '#app',
  data : {
    number: 1
  },
  methods : {
    plus : function(){
      this.number++
    },
    moins : function(){
      this.number--
    }
  }
})
```

## Thanks

VueJS https://github.com/vuejs/vue
HammerJS https://github.com/hammerjs/hammer.js

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright © 2016 Didier Franc
