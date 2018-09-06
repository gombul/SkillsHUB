$(document).ready(function () {

  // Ensure footer sits below the navigation as a minimum
  heightCalc = $(".container-functional-nav").css("height");
  $("#main-content").css("min-height", heightCalc);

});