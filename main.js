var waypoint = new Waypoint({
  element: document.getElementsByClassName('circle')[0],
  handler: function () {
    console.log("Waypoint");
    $(".quarter").addClass("active");
    setTimeout(function(){
      $(".cloud-svg-text").find("h2").addClass("active");
    },1500);
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

/*balloon animation activate*/
var waypoint = new Waypoint({
  element: $('.main')[0],
  handler: function (direction) {
    console.log("up direction clouds container");
    if (direction == "down") {
      $("#html-container").addClass("animation-balloon-left");
      $("#wordpress-container").addClass("animation-balloon-left");
      $("#javascript-container").addClass("animation-balloon-right");
      $("#css-container").addClass("animation-balloon-right");
    }
    if(direction=="up"){
      $("#html-container").removeClass("animation-balloon-left");
      $("#wordpress-container").removeClass("animation-balloon-left");
      $("#javascript-container").removeClass("animation-balloon-right");
      $("#css-container").removeClass("animation-balloon-right");
    }
  },
  offset: 'bottom-in-view'
});
/*var sticky = new Waypoint.Sticky({
  element: $('#circle')
})*/

$(".more-desc-close").click(function(){
  $(".more-description").fadeOut(500);
  $(".more-desc-cloud").removeClass("active");
});

$(".cloud-svg-text").click(function(){
  $(".more-description").fadeIn(500);
  $(".more-desc-cloud").toggleClass("active");
});
$(document).ready(function(){
  $(".main-title").addClass("active");
});

/*Cloud modal content*/
$(".cloud-content").click(function(){
  var title=$(this).data("title");
  $(".more-desc-title").html(title);

  var contentSelector=$(this).data("content");
  var cloudContent=content[contentSelector];
  $(".more-desc-text").html(cloudContent);

  $(".more-description").fadeIn(500);
  $(".more-desc-cloud").toggleClass("active");
});

var content={
  "formContent":
  '<form id="moja-forma" action="https://formspree.io/milan.stan@hotmail.com" method="POST"><div class="input-group input-group-lg"><span class="input-group-addon" id="name-addon"><i class="glyphicon glyphicon-user"></i></span><input type="text" name="name" class="form-control" placeholder="Ime" aria-describedby="name-addon" maxlength="15" required></div><div class="input-group input-group-lg"><span class="input-group-addon" id="email-addon"><i class="glyphicon glyphicon-envelope"></i></span><input type="email" name="Email" class="form-control" placeholder="E-mail" aria-describedby="email-addon"></div><div class="input-group input-group-lg"><span class="input-group-addon" id="phone-addon"><i class="glyphicon glyphicon-earphone"></i></span><input type="text" name="phone" class="form-control" placeholder="Broj telefona" aria-describedby="phone-addon"></div><textarea name="message" class="form-control" placeholder="Poruka"></textarea><input type="submit" class="btn-primary form-control input-lg" value="Pošalji"/><input type="text" name="_gotcha" style="display:none" /></form>',
};

/*FORMSPREE AJAX*/

$(document).on('submit', '#moja-forma', function(e) {
  var $contactForm = $('#moja-forma');
	e.preventDefault();
	$.ajax({
		url: 'https://formspree.io/milan.stan@hotmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert-info">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert-info').hide();
			$contactForm.append('<div class="alert alert-success">Message sent!</div>');
      console.log($contactForm);
		},
		error: function(err) {
			$contactForm.find('.alert-info').hide();
      for(var e in err){
        console.log(e+""+err.e);
      }
			$contactForm.append('<div class="alert alert-danger">Ops, there was an error. '+err.responseJSON['error']+'</div>');
		}
	});
});