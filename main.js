var waypoint = new Waypoint({
  element: document.getElementsByClassName('circle')[0],
  handler: function () {
    console.log("Waypoint");
    $(".quarter").addClass("active");
  },
  offset: '50%'
});

var waypoint = new Waypoint({
  element: $('.main')[0],
  handler: function () {
    console.log("clouds container");
    $(".circle").addClass("sun-fixed");
    $(".sun-rays").addClass("sun-rays-fixed");
  },
  offset: '-50%'
});

var waypoint = new Waypoint({
  element: $('.main')[0],
  handler: function (direction) {
    console.log("up direction clouds container");
    if (direction == "up") {
      $(".circle").removeClass("sun-fixed");
      $(".sun-rays").removeClass("sun-rays-fixed");
    }
  },
  offset: '-50%'
});
/*var sticky = new Waypoint.Sticky({
  element: $('#circle')
})*/