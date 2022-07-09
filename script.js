

$(document).ready(function () {
  animateDiv(".a");
  animateDiv(".b");
  animateDiv(".c");
  animateDiv(".d");
});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 100;
  var w = $(window).width() - 100;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 2000, function () {
    animateDiv(myclass);
  });
}

$(".floating").click(function() {
  let reward = confirm("Congratulations ...!!! If you want to get the money, please click 'OK' and watch a vedio.");

  if (reward) {
    playvid();
  } else {
    console.log("try to go back to previous page")
  }
})

function playvid() {
  console.log("this is not ok")
  
}