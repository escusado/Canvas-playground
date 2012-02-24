(function(){

  //window.kinetic = {
  var kinetic = {

    //Attributes
    stage: new Kinetic.Stage("kinetic", $('#kinetic').width(), $('#kinetic').height()),
    date:  new Date(),
    
    //animation stop
    willStop: true,

    //Methods
    init: function(){
      var that = this;

      $('#stop').click(function(){
        that.willStop = false;
      });

      this.initialTime = this.date.getTime();
      this.animation();
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

    }

  //----------------------  
  }; //end kinetic Object

  kinetic.init();
})();