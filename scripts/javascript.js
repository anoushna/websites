// View Vendors Button:
$("#view_vendors").on("click", function() {
    $("#vendors_list").removeClass("hidden");
  });

// Close Vendor List Button:
$("#close_vendor").on("click", function() {
    $("#vendors_list").addClass("hidden");
  });

// Show Map Button:
$("#show_map_button").on("click", function() {
  $("#map_modal").removeClass("hidden");
});

// Close Map List Button:
$("#close_map_button").on("click", function() {
  $("#map_modal").addClass("hidden");
});

// Window Resize:
$(window).on("resize", function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
      $("#big_nav").addClass("hidden");
      $("#hamburger_button").removeClass("hidden");
    } else {
      $("#big_nav").removeClass("hidden");
      $("#hamburger_button").addClass("hidden");
      $("#nav_menu").addClass("hidden");
    }
  });

// Hamburger Button:
$("#hamburger_button").on("click", function () {
    if ($("#nav_menu").hasClass("hidden")) {
      $("#nav_menu").removeClass("hidden");
    } else {
      $("#nav_menu").addClass("hidden");
    }
  });

// Narrow Screen Show Hamburger Menu Button:
$(document).ready(function () {
  if (window.matchMedia("(max-width: 900px)").matches) {
    $("#big_nav").addClass("hidden");
    $("#hamburger_button").removeClass("hidden");
    $("#nav_menu").addClass("hidden");
  } else {
    $("#big_nav").removeClass("hidden");
    $("#hamburger_button").addClass("hidden");
    $("#nav_menu").addClass("hidden");
  }
});
