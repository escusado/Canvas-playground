(function(){

  //window.kinetic = {
  var kinetic = {

    //Attributes
    stage: new Kinetic.Stage("kinetic", 640, 480),
    date:  new Date(),
    willStop: true,
    //Methods
    init: function(){
      var that = this;
      $('#stop').click(function(){
        that.willStop = false;
      });

      this.initialTime = this.date.getTime();
      this.animate();
    },
    animation: function(){
      //update setup
      var that = this;
      var stage = this.stage;
      var currentDate = new Date();
      var currentTime = currentDate.getTime();

      this.timeDiff = currentTime - this.initialTime;

      var layer = new Kinetic.Layer();

      //update
      this.update();
      //clear

      //draw

      //animate loop

    },
    update: function(){

    },
    animate:function(){
      var that = this;
      var stage = this.stage;
      var layer = this.layer;
      var group = this.group;
      
      var currentDate = new Date();
      var currentTime = currentDate.getTime();

      var timeDiff = currentTime - this.initialTime;
      $('#console').text(timeDiff);

      if(triangle){
        layer.remove(triangle);  
      }

      //update
      var triangle = new Kinetic.Shape(function(){
        var context = this.getContext();
        context.beginPath();
        context.lineWidth = 4;
        context.strokeStyle = "black";
        context.fillStyle = "#00D2FF";
        context.moveTo(1+timeDiff, 50);
        context.lineTo(250, 80);
        context.lineTo(150, 170);
        context.closePath();
        context.fill();
        context.stroke();
      });

      //clear
      stage.clear();

      // add the group to the layer
      layer.add(triangle);

      // add the layer to the stage
      stage.add(layer);

      if(this.willStop){
        requestAnimFrame(function(){
          that.animate();
        });
      }
    }
  };
  kinetic.init();
})();