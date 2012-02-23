// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  function(/* function */ callback, /* DOMElement */ element){
   window.setTimeout(callback, 1000 / 60);
  };
})();

(function(){
  var toily ={
    initTime: new Date().getTime(),
    mouseCoords: {},

    init: function(){
      var that = this;
      _.bindAll(this, 'draw', 'animate');
      // Creates canvas 320 × 200 at 10, 50
      this.paper = Raphael(0, 0, getViewport()[0], getViewport()[1]);
      
      //create circle
      this.cursor = this.paper.circle(0, 0, 10);
      // Sets the fill attribute of the circle to red (#f00)
      this.cursor.attr("fill", "#f00");

      // Sets the stroke attribute of the circle to white
      this.cursor.attr("stroke", "#f00"); 

      //update mouse coords
      $(document).mousemove(function(ev){
        that.mouseCoords.x = ev.pageX;
        that.mouseCoords.y = ev.pageY;
      });

      //start animation
      this.animate();
    },
    draw: function(){
      var time = new Date().getTime() - this.initTime;

      // Creates circle at x = 50, y = 40, with radius 10
      this.cursor.attr('cx',this.mouseCoords.x);
      this.cursor.attr('cy',this.mouseCoords.y);

    },
    animate: function(){
      this.draw();
      requestAnimFrame(this.animate);
    }
  }
  toily.init();
})();

function getViewport(){var viewPortWidth;var viewPortHeight;if(typeof window.innerWidth!='undefined'){viewPortWidth=window.innerWidth,viewPortHeight=window.innerHeight}else if(typeof document.documentElement!='undefined'&&typeof document.documentElement.clientWidth!='undefined'&&document.documentElement.clientWidth!=0){viewPortWidth=document.documentElement.clientWidth,viewPortHeight=document.documentElement.clientHeight}else{viewPortWidth=document.getElementsByTagName('body')[0].clientWidth,viewPortHeight=document.getElementsByTagName('body')[0].clientHeight}return[viewPortWidth,viewPortHeight];}


// // example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/
// var canvas, context;

// init();
// animate();

// function init() {

//   canvas = document.createElement( 'canvas' );
//   canvas.width = 256;
//   canvas.height = 256;

//   context = canvas.getContext( '2d' );

//   document.body.appendChild( canvas );

// }

// function animate() {
//   requestAnimFrame( animate );
//   draw();

// }

// function draw() {

//   var time = new Date().getTime() * 0.001;
//   var x = Math.sin( time ) * 96 + 128;
//   var y = Math.cos( time * 0.9 ) * 96 + 128;

//   context.fillStyle = 'rgb(245,245,245)';
//   context.fillRect( 0, 0, 255, 255 );

//   context.fillStyle = 'rgb(255,0,0)';
//   context.beginPath();
//   context.arc( x, y, 10, 0, Math.PI * 2, true );
//   context.closePath();
//   context.fill();

// }