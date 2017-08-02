;(function () {
  window.myViz = function init () {
    // public config, default
    build.width = 300
    build.height = 200

    // the build/update function, where all the magic should happen
    function build (selection) {
      selection.each(function (data, index) {
        var element = d3.select(this)

        var label = element.selectAll('.myLabel')
          .data([null])

        var enterLabel = label.enter()
          .append('text')
          .attr('y', build.height / 2)
          .attr('x', build.width / 2)
          .style('text-anchor', 'middle')
          .classed('myLabel', true)

        label.merge(enterLabel).text('Your chart: ' + build.width + ' ' + data.length)
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
