(function(){

  //window.kinetic = {
  var kinetic = {

    //Attributes
    stage: new Kinetic.Stage("kinetic", 578, 200),
    layer: new Kinetic.Layer(),
    group: new Kinetic.Group(),
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
    animate:function(){
      var that = this;
      var stage = this.stage;
      var layer = this.layer;
      var group = this.group;
      
      var currentDate = new Date();
      var currentTime = currentDate.getTime();

      var timeDiff = currentTime - this.initialTime;
      $('#console').text(timeDiff);

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