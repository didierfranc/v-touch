Vue.directive('touch', {
  acceptStatement: true,

  update: function (fn) {
    hammer(this.el, this.arg, fn)
  }

})

function hammer (element, event, callback){

  var touchable = new Hammer(element)

  touchable.on(event, function(ev) {
    callback()
  })

}
