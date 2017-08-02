;(function () {
  window.myViz = function init () {
    // public config, default
    build.width = 300
    build.height = 200

    // the build/update function, where all the magic should happen
    function build (selection) {
      selection.each(function (data, index) {
        var element = d3.select(this)

        console.log(build.width, data.length)
      })
    }

    // public config function, only public props/functions will be set
    build.config = function (options) {
      for (var k in options) {
        if (build.hasOwnProperty(k)) {
          build[k] = options[k]
        }
      }
      return build
    }

    return build
  }
})()
