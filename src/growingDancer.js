var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left - 100, timeBetweenSteps);
  // this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.css({"background-color": "transparent", "border-radius": "0px"});
  this.$node.addClass("growing-dancer");
  // this.$node.css(background: 'none');
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;
GrowingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.animate({width: "300px", height: "440px"}, 5000);
}
