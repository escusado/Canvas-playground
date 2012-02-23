(function(){

  var kinect = {
    //Attributes

    //Methods
    init:function(){
      this.canvas = document.getElementById("myCanvas");
      this.context = this.canvas.getContext("2d");
      
      var myRectangle = {
        x: 0,
        y: 50,
        width: 100,
        height: 50,
        borderWidth: 5
      };

      var date = new Date();
      var time = date.getTime();

      //call animation
      this.animate(time, myRectangle);
    },
    animate: function(lastTime, myRectangle){
      var that = this;
      var canvas = this.canvas;
      var context = this.context;

      // update
      var date = new Date();
      var time = date.getTime();
      var timeDiff = time - lastTime;
      var linearSpeed = 100; // pixels / second
      var linearDistEachFrame = linearSpeed * timeDiff / 1000;
      var currentX = myRectangle.x;
   
      if (currentX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
          var newX = currentX + linearDistEachFrame;
          myRectangle.x = newX;
      }
      lastTime = time;
   
      // clear
      context.clearRect(0, 0, canvas.width, canvas.height);
   
      // draw
      context.beginPath();
      context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
   
      context.fillStyle = "#8ED6FF";
      context.fill();
      context.lineWidth = myRectangle.borderWidth;
      context.strokeStyle = "black";
      context.stroke();
   
      // request new frame
      requestAnimFrame(function(){
          that.animate(lastTime, myRectangle);
      });
    }
  };
  kinect.init();

})();