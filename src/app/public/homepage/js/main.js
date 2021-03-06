function ReloadOwlCarousel() {
  $(".popup-main .owl-slider-full").owlCarousel({
    navigation: !0,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: !0,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ]
  }),
    $(".popup-main .owl-slider-full").click(function(t) {
      if (!$(t.target).is(".mfp-close")) return !1;
    });
}
function SetResizeContent() {
  var t = $(window).height();
  $(".full-screen").css("min-height", t);
}
function animatecounters() {
  $(".timer").each(function(t) {
    var e = $(this);
    (t = $.extend({}, t || {}, e.data("countToOptions") || {})), e.countTo(t);
  });
}
$(window).scroll(function() {
  50 < $(document).scrollTop()
    ? ($("nav").addClass("shrink"),
      $("nav ul li").addClass("shrink"),
      $("nav a img").attr("src", "./bonjour/images/logo-blue.png"))
    : ($("nav").removeClass("shrink"),
      $("nav ul li").removeClass("shrink"),
      $("nav a img").attr("src", "./bonjour/images/logo-transaction.png"));
}),
  $(document).ready(function() {
    $(".maps").click(function() {
      $(".maps iframe").css("pointer-events", "auto");
    }),
      $(".maps").mouseleave(function() {
        $(".maps iframe").css("pointer-events", "none");
      }),
      $(".timer").appear(),
      $(document.body).on("appear", ".timer", function(t) {
        $(this).hasClass("appear") ||
          (animatecounters(), $(this).addClass("appear"));
      }),
      $(".owl-slider-full").owlCarousel({
        navigation: !0,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: !0,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ]
      }),
      $("#owl-demo-background").owlCarousel({
        transitionStyle: "fade",
        autoPlay: 3e3,
        slideSpeed: 100,
        singleItem: !0,
        navigation: !1,
        pagination: !1,
        touchDrag: !1,
        mouseDrag: !1
      }),
      $(".blog-slider").owlCarousel({
        autoPlay: 4e3,
        slideSpeed: 1e3,
        navigation: !1,
        pagination: !1,
        items: 4,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1]
      }),
      $(window).scroll(),
      $(window).scroll(function() {
        10 < $(window).scrollTop()
          ? $("nav").addClass("shrink")
          : $("nav").removeClass("shrink");
      }),
      $(".navigation-menu").onePageNav({
        scrollSpeed: 750,
        scrollThreshold: 0.2,
        scrollOffset: 79,
        currentClass: "active",
        filter: ":not(.btn-very-small)"
      }),
      setTimeout(function() {
        $(window).scroll();
      }, 500),
      $("ul.navbar-nav li a").click(function(t) {
        $(this)
          .parents("div.navbar-collapse")
          .removeClass("in");
      }),
      $(".pull-menu a.section-link").click(function(t) {
        $(window).width() <= 500 && $("#close-button").click();
      });
    var t = window.location.hash.substr(1);
    if ("" != t) {
      var a = 1200,
        o = "easeInOutExpo",
        e = "#" + t;
      $("html, body")
        .stop()
        .animate({ scrollTop: $(e).offset().top }, a, o, function() {
          window.location.hash = e;
        });
    }
    (a = 1200), (o = "easeInOutExpo");
    $("a.scrollto").bind("click.smoothscroll", function(t) {
      t.preventDefault();
      var e = this.hash;
      $("html, body")
        .stop()
        .animate({ scrollTop: $(e).offset().top }, a, o, function() {
          window.location.hash = e;
        });
    }),
      $(".inner-link").smoothScroll({ speed: 900, offset: -59 }),
      $(".section-link").smoothScroll({ speed: 900, offset: 1 }),
      1030 < $(window).width() &&
        !n &&
        ($(".parallax1").parallax("50%", 0.1),
        $(".parallax2").parallax("50%", 0.2),
        $(".parallax3").parallax("50%", 0.3),
        $(".parallax4").parallax("50%", 0.4),
        $(".parallax5").parallax("50%", 0.5),
        $(".parallax6").parallax("50%", 0.6),
        $(".parallax7").parallax("50%", 0.7),
        $(".parallax8").parallax("50%", 0.8),
        $(".parallax9").parallax("50%", 0.05),
        $(".parallax10").parallax("50%", 0.02),
        $(".parallax11").parallax("50%", 0.01),
        $(".parallax12").parallax("50%", 0.099),
        (n = !0)),
      $(".parallax-fix").each(function() {
        if ($(this).children(".parallax-background-img").length) {
          var t = jQuery(this)
            .children(".parallax-background-img")
            .attr("src");
          jQuery(this).css("background", 'url("' + t + '")'),
            jQuery(this)
              .children(".parallax-background-img")
              .remove(),
            $(this).css("background-position", "50% 0%");
        }
      });
    var n = !1;
    ($portfolio_filter = $(".grid")),
      $portfolio_filter.imagesLoaded(function() {
        $portfolio_filter.isotope({
          itemSelector: "li",
          layoutMode: "masonry"
        });
      }),
      ($grid_selectors = $(".portfolio-filter > li > a")),
      $grid_selectors.on("click", function() {
        $grid_selectors.parent().removeClass("active"),
          $(this)
            .parent()
            .addClass("active");
        var t = $(this).attr("data-filter");
        return $portfolio_filter.isotope({ filter: t }), !1;
      }),
      $(window).resize(function() {
        setTimeout(function() {
          $portfolio_filter.isotope("layout");
        }, 500);
      }),
      $(".lightbox-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-fade",
        fixedContentPos: !0,
        closeBtnInside: !0,
        gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }
      }),
      $(".single-image-lightbox").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        fixedContentPos: !0,
        closeBtnInside: !0,
        mainClass: "mfp-no-margins mfp-with-zoom",
        image: { verticalFit: !0 },
        zoom: { enabled: !0, duration: 300 }
      }),
      $(".zoom-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        mainClass: "mfp-with-zoom mfp-img-mobile",
        fixedContentPos: !0,
        closeBtnInside: !0,
        image: {
          verticalFit: !0,
          titleSrc: function(t) {
            return t.el.attr("title");
          }
        },
        gallery: { enabled: !0 },
        zoom: {
          enabled: !0,
          duration: 300,
          opener: function(t) {
            return t.find("img");
          }
        }
      }),
      $(".popup-with-form").magnificPopup({
        type: "inline",
        preloader: !1,
        closeBtnInside: !0,
        fixedContentPos: !0,
        focus: "#name",
        callbacks: {
          beforeOpen: function() {
            $(window).width() < 700
              ? (this.st.focus = !1)
              : (this.st.focus = "#name");
          }
        }
      }),
      $(".popup-youtube, .popup-vimeo, .popup-googlemap").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !0
      }),
      $(".ajax-popup").magnificPopup({
        type: "ajax",
        alignTop: !0,
        fixedContentPos: !0,
        overflowY: "scroll",
        callbacks: {
          open: function() {
            $(".navbar .collapse").removeClass("in"),
              $(".navbar a.dropdown-toggle").addClass("collapsed");
          }
        }
      }),
      $(".collapse").on("show.bs.collapse", function() {
        var t = $(this).attr("id");
        $('a[href="#' + t + '"]')
          .closest(".panel-heading")
          .addClass("active-accordion"),
          $('a[href="#' + t + '"] .panel-title span').html(
            '<i class="fa fa-minus"></i>'
          );
      }),
      $(".collapse").on("hide.bs.collapse", function() {
        var t = $(this).attr("id");
        $('a[href="#' + t + '"]')
          .closest(".panel-heading")
          .removeClass("active-accordion"),
          $('a[href="#' + t + '"] .panel-title span').html(
            '<i class="fa fa-plus"></i>'
          );
      }),
      $(".accordion-style2 .collapse").on("show.bs.collapse", function() {
        var t = $(this).attr("id");
        $('a[href="#' + t + '"]')
          .closest(".panel-heading")
          .addClass("active-accordion"),
          $('a[href="#' + t + '"] .panel-title span').html(
            '<i class="fa fa-angle-up"></i>'
          );
      }),
      $(".accordion-style2 .collapse").on("hide.bs.collapse", function() {
        var t = $(this).attr("id");
        $('a[href="#' + t + '"]')
          .closest(".panel-heading")
          .removeClass("active-accordion"),
          $('a[href="#' + t + '"] .panel-title span').html(
            '<i class="fa fa-angle-down"></i>'
          );
      }),
      $(".toggles-style2 .collapse").on("show.bs.collapse", function() {
        var t = $(this).attr("id");
        $('a[href="#' + t + '"]')
          .closest(".panel-heading")
          .addClass("active-accordion"),
          $('a[href="#' + t + '"] .panel-title span').html(
            '<i class="fa fa-angle-up"></i>'
          );
      }),
      $(".toggles-style2 .collapse").on("hide.bs.collapse", function() {
        var t = $(this).attr("id");
        $('a[href="#' + t + '"]')
          .closest(".panel-heading")
          .removeClass("active-accordion"),
          $('a[href="#' + t + '"] .panel-title span').html(
            '<i class="fa fa-angle-down"></i>'
          );
      }),
      $(".fit-videos").fitVids(),
      $("#success").hide(),
      $("#success-contact").hide(),
      $("#restaurant-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#restaurantcontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#restaurantcontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#restaurantcontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#restaurantcontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#restaurantcontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/restaurant-contact.php",
            data: $("#restaurantcontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#architecture-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#architecturecontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#architecturecontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#architecturecontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#architecturecontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#architecturecontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/architecture-contact.php",
            data: $("#architecturecontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#wedding-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#weddingcontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#weddingcontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#weddingcontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#weddingcontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#weddingcontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/wedding-contact.php",
            data: $("#weddingcontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#travel-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#travelcontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#travelcontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#travelcontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#travelcontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#travelcontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/travel-contact.php",
            data: $("#travelcontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#tattoobooknow-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#tattoobooknowform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#tattoobooknowform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#tattoobooknowform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#tattoobooknowform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#tattoobooknowform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/tattoo-booknow.php",
            data: $("#tattoobooknowform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#tattoo-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#tattoocontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#tattoocontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#tattoocontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#tattoocontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#tattoocontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/tattoo-contact.php",
            data: $("#tattoocontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success-contact").html(t),
                $("#success-contact").fadeIn("slow"),
                $("#success-contact")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#spa-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#spacontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#spacontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#spacontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#spacontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#spacontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/spa-contact.php",
            data: $("#spacontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#photography-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#photographycontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#photographycontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#photographycontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#photographycontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#photographycontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/photography-contact.php",
            data: $("#photographycontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#personal-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#personalcontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#personalcontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#personalcontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#personalcontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#personalcontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/personal-contact.php",
            data: $("#personalcontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#eventticket-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#eventticketform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#eventticketform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#eventticketform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#eventticketform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#eventticketform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/event-ticket.php",
            data: $("#eventticketform").serialize(),
            success: function(t) {
              $("input[type=text],textarea,select").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#event-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#eventcontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#eventcontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#eventcontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#eventcontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#eventcontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/event-contact.php",
            data: $("#eventcontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success-contact").html(t),
                $("#success-contact").fadeIn("slow"),
                $("#success-contact")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#comingsoon-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#comingsoonscontactform input[type=text]").each(function(t) {
          0 == t &&
            (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
              ? $("#comingsoonscontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
              : ($("#comingsoonscontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/comingsoon-contact.php",
            data: $("#comingsoonscontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      }),
      $("#agency-contact-button").click(function() {
        var e;
        ((e = !0),
        $("#agencycontactform input[type=text]").each(function(t) {
          0 == t
            ? null == $(this).val() || "" == $(this).val()
              ? ($("#agencycontactform")
                  .find("input:eq(" + t + ")")
                  .addClass("required-error"),
                (e = !1))
              : $("#agencycontactform")
                  .find("input:eq(" + t + ")")
                  .removeClass("required-error")
            : 1 == t &&
              (/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())
                ? $("#agencycontactform")
                    .find("input:eq(" + t + ")")
                    .removeClass("required-error")
                : ($("#agencycontactform")
                    .find("input:eq(" + t + ")")
                    .addClass("required-error"),
                  (e = !1)));
        }),
        e) &&
          $.ajax({
            type: "POST",
            url: "email-templates/agency-contact.php",
            data: $("#agencycontactform").serialize(),
            success: function(t) {
              $("input[type=text],textarea").each(function() {
                $(this).val("");
              }),
                $("#success").html(t),
                $("#success").fadeIn("slow"),
                $("#success")
                  .delay(4e3)
                  .fadeOut("slow");
            }
          });
      });
  }),
  SetResizeContent(),
  $(window).resize(function() {
    SetResizeContent();
  }),
  jQuery(function(t) {
    animatecounters();
  }),
  jQuery(function(e) {
    e("div.widget-body ul.category-list li a").click(function(t) {
      e("div.widget-body ul.category-list li a").removeClass("active"),
        e(this).addClass("active");
    });
  });
var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 90,
  mobile: !1,
  live: !0
});
function bindEvent(t, e, a) {
  t.addEventListener
    ? t.addEventListener(e, a, !1)
    : t.attachEvent && t.attachEvent("on" + e, a);
}
wow.init(),
  $(".work-details-popup").on("click", function() {
    $.magnificPopup.open({
      items: {
        src: $(this)
          .parents("li")
          .find(".popup-main")
      },
      type: "inline",
      fixedContentPos: !0,
      closeOnContentClick: !0
    });
  }),
  (function() {
    var t = document.body,
      e = document.getElementById("open-button"),
      a = document.getElementById("close-button"),
      o = !1;
    function n() {
      o ? classie.remove(t, "show-menu") : classie.add(t, "show-menu"),
        (o = !o);
    }
    e && bindEvent(e, "click", n), a && bindEvent(a, "click", n);
  })(),
  $("#counter-event")
    .countdown($("#counter-event").attr("enddate"))
    .on("update.countdown", function(t) {
      $(this).html(
        t.strftime(
          '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Days</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
        )
      );
    }),
  $("body").on("touchstart click", function(t) {
    $(window).width();
  }),
  $(window).scroll(function() {
    100 < $(this).scrollTop()
      ? $(".scrollToTop").fadeIn()
      : $(".scrollToTop").fadeOut();
  }),
  $(".scrollToTop").click(function() {
    return $("html, body").animate({ scrollTop: 0 }, 1e3), !1;
  }),
  $(".panel a, .nav-tabs a").click(function(t) {
    ($(this).is("[data-parent]") || $(this).is("[data-toggle]")) &&
      t.preventDefault();
  }),
  $(function() {
    $(".dropdown").hover(
      function() {
        $(".dropdown-menu", this)
          .stop(!0, !0)
          .fadeIn("fast"),
          $(this).toggleClass("open"),
          $("b", this).toggleClass("caret caret-up");
      },
      function() {
        $(".dropdown-menu", this)
          .stop(!0, !0)
          .fadeOut("fast"),
          $(this).toggleClass("open"),
          $("b", this).toggleClass("caret caret-up");
      }
    );
  });
