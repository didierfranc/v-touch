# vue-touch


## Introduction

Vue-touch is the easiest way to use HammerJS with the excellent VueJS framework, **compatible with VueJS 1.x**


## Usage
Vue-touch add the **`v-touch:event`** directive to your vue instance. You can use easily play with `tap` `doubletap` `press` `swipe` `swiperight` `swipeleft` and more with next updates.

## Installation
Just add `vue-touch.min.js` to your project after Vue.js

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

Copyright (c) 2016 Didier Franc
