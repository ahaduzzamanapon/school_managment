var CargoZone = (function () {
    siteUrl = "";
    var e = jQuery(window).width(),
        t = function () {
            jQuery(".header").css("height", "");
            var e = jQuery(".header").height();
            jQuery(".header").css("height", e);
        },
        r = function () {
            "use strict";
            if (
                (jQuery(".dzload").each(function () {
                    var e = siteUrl + jQuery(this).attr("dzsrc");
                    jQuery(this).hide(function () {
                        jQuery(this).load(e, function () {
                            jQuery(this).fadeIn("slow");
                        });
                    });
                }),
                e < 991)
            ) {
                var t = document.getElementById("logoImage").getAttribute("src");
                if (0 == jQuery(".mo-left .header-nav").children("div").length) {
                    var r = jQuery("<div>").append(jQuery(".mo-left .logo-header").clone()).html();
                    jQuery(".mo-left .header-nav").prepend(r),
                        jQuery(".mo-left .header-nav .logo-header > a > img").attr("src", t),
                        jQuery(".mo-left.lw .header-nav .logo-header > a > img").attr("src", "images/logo-white.png"),
                        jQuery(".header-style-4.mo-left.style-1 .header-nav .logo-header > a > img").attr("src", "images/logo-white.png"),
                        jQuery(".mo-left.onepage .header-nav .logo-header > a > img").attr("src", t);
                }
            } else jQuery(".mo-left .header-nav div").remove(), jQuery(".mo-left.lw .header-nav div").remove();
            e <= 991 &&
                jQuery(".navbar-nav > li > a, .sub-menu > li > a")
                    .unbind()
                    .on("click", function (e) {
                        jQuery(this).parent().hasClass("open") ? jQuery(this).parent().removeClass("open") : (jQuery(this).parent().parent().find("li").removeClass("open"), jQuery(this).parent().addClass("open"));
                    });
        },
        i = function () {
            if (jQuery(".setResizeMargin").length > 0 && e >= 1280) {
                var t = jQuery(".container").width(),
                    r = (e - t) / 2;
                jQuery(".setResizeMargin").css("margin-left", r);
            }
        },
        s = function (e) {
            var t,
                r = 0,
                i = 0,
                s = new Array();
            jQuery(e).each(function () {
                if (((t = jQuery(this)), jQuery(t).height("auto"), (topPostion = t.position().top), i != topPostion)) {
                    for (currentDiv = 0; currentDiv < s.length; currentDiv++) s[currentDiv].height(r);
                    (s.length = 0), (i = topPostion), (r = t.height()), s.push(t);
                } else s.push(t), (r = r < t.height() ? t.height() : r);
                for (currentDiv = 0; currentDiv < s.length; currentDiv++) s[currentDiv].height(r);
            });
        },
        o = function () {
            "use strict";
            jQuery(".site-footer").css("display", "block"), jQuery(".site-footer").css("height", "auto");
            var e = jQuery(".site-footer").outerHeight();
            jQuery(".footer-fixed > .page-wraper").css("padding-bottom", e), jQuery(".site-footer").css("height", e);
        },
        a = function () {
            "use strict";
            var t = [];
            jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (e) {
                t.push(jQuery(this).height());
            }),
                jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (e) {
                    var r = Math.max.apply(Math, t);
                    jQuery(this).css("height", r);
                }),
                (t = []),
                e < 991 &&
                    jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (e) {
                        jQuery(this).css("height", "");
                    });
        },
        l = function () {
            jQuery(".openbtn").on("click", function (e) {
                e.preventDefault(), jQuery("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "0"), jQuery("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.left = "0");
            }),
                jQuery(".closebtn").on("click", function (e) {
                    e.preventDefault(), jQuery("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "-300px"), jQuery("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.left = "-820px");
                });
        },
        n = function () {
            jQuery(".header-nav li")
                .unbind()
                .each(function (e) {
                    if (jQuery("ul", this).length) {
                        var t = jQuery("ul:first", this),
                            r = t.offset().left,
                            i = t.width();
                        jQuery("body").height();
                        r + i <= jQuery("body").width() ? jQuery(this).find(".sub-menu:first").removeClass("left") : jQuery(this).find(".sub-menu:first").addClass("left");
                    }
                });
        },
        u = function () {
            "use strict";
            var e = jQuery(this),
                t = e.find(".modal-dialog");
            e.css("display", "block"), t.css("margin-top", Math.max(0, (jQuery(window).height() - t.height()) / 2));
        },
        c = new Date();
    return (
        c.setMonth(c.getMonth() + 1),
        (c = c.getDate() + " " + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][c.getMonth()] + " " + c.getFullYear()),
        {
            init: function () {
                jQuery(".box-hover").on("mouseenter", function () {
                    jQuery(".box-hover").removeClass("active"), jQuery(this).addClass("active");
                }),
                    jQuery(".wow").length > 0 && new WOW({ boxClass: "wow", animateClass: "animated", offset: 50, mobile: !1 }).init(),
                    jQuery(".price-slide, .price-slide-2").length > 0 &&
                        jQuery("#slider-range,#slider-range-2").slider({
                            range: !0,
                            min: 200,
                            max: 4e3,
                            type: "single",
                            values: [200, 4e3],
                            slide: function (e, t) {
                                var r = t.values[0],
                                    i = t.values[1];
                                jQuery("#" + this.id)
                                    .prev()
                                    .val("$" + r + " - $" + i);
                            },
                        }),
                    (function () {
                        "use strict";
                        var e = parseInt(jQuery(".onepage").css("height"), 10);
                        jQuery(".scroll")
                            .unbind()
                            .on("click", function (e) {
                                if ((e.preventDefault(), "" !== this.hash)) {
                                    var t = this.hash,
                                        r = jQuery(t).offset().top,
                                        i = parseInt(jQuery(".onepage").css("height"), 10);
                                    jQuery("body").scrollspy({ target: ".navbar", offset: i + 2 });
                                    var s = r - i;
                                    jQuery("html, body").animate({ scrollTop: s }, 800, function () {});
                                }
                            }),
                            jQuery("body").scrollspy({ target: ".navbar", offset: e + 2 });
                    })(),
                    r(),
                    t(),
                    (function () {
                        "use strict";
                        var e = jQuery("#quik-search-btn"),
                            t = jQuery("#quik-search-remove");
                        e.on("click", function () {
                            jQuery(".dez-quik-search").animate({ width: "100%" }), jQuery(".dez-quik-search").delay(500).css({ left: "0" });
                        }),
                            t.on("click", function () {
                                jQuery(".dez-quik-search").animate({ width: "0%", right: "0" }), jQuery(".dez-quik-search").css({ left: "auto" });
                            });
                    })(),
                    (function () {
                        "use strict";
                        jQuery(".mfp-gallery").magnificPopup({
                            delegate: ".mfp-link",
                            type: "image",
                            tLoading: "Loading image #%curr%...",
                            mainClass: "mfp-img-mobile",
                            gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
                            image: {
                                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                                titleSrc: function (e) {
                                    return e.el.attr("title") + "<small></small>";
                                },
                            },
                        }),
                            jQuery(".project-pdf").magnificPopup({
                                type: "iframe",
                                iframe: {
                                    markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
                                    patterns: { pdf: { index: "pdf", src: "%id%" } },
                                    srcAction: "iframe_src",
                                },
                            }),
                            jQuery(".video").magnificPopup({
                                type: "iframe",
                                iframe: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>' },
                                callbacks: {
                                    markupParse: function (e, t, r) {
                                        t.title = r.el.attr("title");
                                    },
                                },
                            }),
                            jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
                            jQuery(".image-popup-vertical-fit").magnificPopup({ type: "image", closeOnContentClick: !0, mainClass: "mfp-product-image", image: { verticalFit: !0 } });
                    })(),
                    jQuery("#accordion").on("hidden.bs.collapse", function (e) {
                        jQuery(e.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus");
                    }),
                    jQuery("#accordion").on("shown.bs.collapse", function (e) {
                        jQuery(e.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus");
                    }),
                    (function () {
                        "use strict";
                        jQuery("button.scroltop").on("click", function () {
                            return jQuery("html, body").animate({ scrollTop: 0 }, 1e3), !1;
                        }),
                            jQuery(window).bind("scroll", function () {
                                jQuery(window).scrollTop() > 900 ? jQuery("button.scroltop").fadeIn(1e3) : jQuery("button.scroltop").fadeOut(1e3);
                            });
                    })(),
                    (jQuery.support.placeholder = "placeholder" in document.createElement("input")),
                    jQuery.support.placeholder ||
                        (jQuery("[placeholder]")
                            .focus(function () {
                                jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("");
                            })
                            .blur(function () {
                                "" == jQuery(this).val() && jQuery(this).val(jQuery(this).attr("placeholder"));
                            })
                            .blur(),
                        jQuery("[placeholder]")
                            .parents("form")
                            .submit(function () {
                                jQuery(this)
                                    .find("[placeholder]")
                                    .each(function () {
                                        jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("");
                                    });
                            })),
                    jQuery(".dezPlaceAni").length &&
                        (jQuery("input, textarea").focus(function () {
                            jQuery(this).parents(".form-group").addClass("focused");
                        }),
                        jQuery("input, textarea").blur(function () {
                            "" == jQuery(this).val() ? (jQuery(this).removeClass("filled"), jQuery(this).parents(".form-group").removeClass("focused")) : jQuery(this).addClass("filled");
                        })),
                    o(),
                    (function () {
                        "use strict";
                        jQuery(document).on("change", ".btn-file :file", function () {
                            var e = jQuery(this),
                                t = e.get(0).files ? e.get(0).files.length : 1,
                                r = e.val().replace(/\\/g, "/").replace(/.*\//, "");
                            e.trigger("fileselect", [t, r]);
                        }),
                            jQuery(".btn-file :file").on("fileselect", function (e, t, r) {
                                input = jQuery(this).parents(".input-group").find(":text");
                                var i = t > 10 ? t + " files selected" : r;
                                input.length ? input.val(i) : i && alert(i);
                            });
                    })(),
                    (function () {
                        "use strict";
                        jQuery(window).on("scroll", function () {
                            var e = jQuery(".sticky-header"),
                                t = document.getElementById("logoImage"),
                                r = document.getElementById("logoTransparentImage");
                            jQuery(".sticky-header").length > 0 &&
                                (jQuery(window).scrollTop() > e.offset().top
                                    ? (e.addClass("is-fixed"), (r.style.display = "none"), (t.style.display = "block"))
                                    : (e.removeClass("is-fixed"), (r.style.display = "block"), (t.style.display = "none")));
                        });
                    })(),
                    (function () {
                        "use strict";
                        jQuery(window).on("scroll", function () {
                            var e = jQuery(".responsive-sticky-header"),
                                t = document.getElementById("logoImage"),
                                r = document.getElementById("logoTransparentImage");
                            jQuery(".responsive-sticky-header").length > 0 &&
                                (jQuery(window).scrollTop() > e.offset().top
                                    ? (e.addClass("is-fixed"), (r.style.display = "none"), (t.style.display = "block"))
                                    : (e.removeClass("is-fixed"), (r.style.display = "block"), (t.style.display = "none")));
                        });
                    })(),
                    a(),
                    jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),
                    jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),
                    jQuery("#image-gallery-mix").length &&
                        (jQuery(".gallery-filter")
                            .find("li")
                            .each(function () {
                                jQuery(this).addClass("filter");
                            }),
                        jQuery("#image-gallery-mix").mixItUp()),
                    jQuery(".gallery-filter.masonary").length &&
                        jQuery(".gallery-filter.masonary").on("click", "span", function () {
                            var e = jQuery(this).parent().attr("data-filter");
                            return jQuery(".gallery-filter.masonary span").parent().removeClass("active"), jQuery(this).parent().addClass("active"), jQuery("#image-gallery-isotope").isotope({ filter: e }), !1;
                        }),
                    (function (e) {
                        jQuery(".countdown").length &&
                            jQuery(".countdown").countdown({ date: e + " 23:5" }, function () {
                                jQuery(".countdown").text("we are live");
                            });
                    })(c),
                    jQuery(".content-scroll").length && jQuery(".content-scroll").mCustomScrollbar({ setWidth: !1, setHeight: !1, axis: "y" }),
                    l(),
                    jQuery(".item-close").on("click", function () {
                        jQuery(this).closest(".cart-item").hide("500");
                    }),
                    jQuery(".cart-btn")
                        .unbind()
                        .on("click", function () {
                            jQuery(".cart-list").slideToggle("slow");
                        }),
                    jQuery(".full-height").css("height", jQuery(window).height()),
                    i(),
                    jQuery(window).on("resize", function () {
                        jQuery(".modal:visible").each(u), jQuery(".equal-wraper").length && s(".equal-wraper .equal-col"), o();
                    }),
                    jQuery(".filter-btn").on("click", function () {
                        jQuery(".filter-left").toggleClass("filter-on").toggleClass("filter-off");
                    }),
                    jQuery(".modal").on("show.bs.modal", u);
            },
            load: function () {
                e > 1023 &&
                    jQuery(".bgeffect").length &&
                    skrollr.init({
                        edgeStrategy: "set",
                        easing: {
                            WTF: Math.random,
                            inverted: function (e) {
                                return 1 - e;
                            },
                        },
                    }),
                    jQuery("select").length && jQuery("select").selectpicker(),
                    jQuery("input[name='demo_vertical2']").TouchSpin({ verticalbuttons: !0, verticalupclass: "ti-plus", verticaldownclass: "ti-minus" }),
                    s(".equal-wraper .equal-col"),
                    s(".equal-wraper2 .equal-col"),
                    s(".equal-wraper3 .equal-col"),
                    jQuery(".counter").length && jQuery(".counter").counterUp({ delay: 10, time: 3e3 }),
                    (function () {
                        "use strict";
                        if (jQuery("#masonry, .masonry").length) {
                            var e = jQuery("#masonry, .masonry");
                            jQuery(".card-container").length &&
                                e.imagesLoaded(function () {
                                    e.masonry({ gutterWidth: 15, isAnimated: !0, itemSelector: ".card-container" });
                                });
                        }
                        jQuery(".filters").length &&
                            jQuery(".filters").on("click", "li", function (t) {
                                t.preventDefault();
                                var r = jQuery(this).attr("data-filter");
                                e.masonryFilter({
                                    filter: function () {
                                        return !r || jQuery(this).hasClass(r);
                                    },
                                });
                            });
                    })(),
                    n(),
                    i();
            },
            resize: function () {
                (e = jQuery(window).width()), r(), t(), l(), n(), a(), i();
            },
        }
    );
})();
jQuery(document).ready(function () {
    "use strict";
    CargoZone.init(),
        jQuery(".dez-page").on("click", function () {
            ("#" == jQuery(this).attr("href") && "" == jQuery(this).attr("href")) || jQuery("#loading-area").find("div").addClass("la-animate");
        }),
        jQuery(".navicon").on("click", function () {
            jQuery(this).toggleClass("open");
        }),
        jQuery('a[data-toggle="tab"]').click(function () {
            jQuery('a[data-toggle="tab"]').click(function () {
                jQuery(jQuery(this).attr("href")).show().addClass("show active").siblings().hide();
            });
        });
}),
    jQuery(".banner-slider").slick({ infinite: !0, autoplay: !0, autoplaySpeed: 1e4, slidesToShow: 1, slidesToScroll: 1, arrows: !1, fade: !0, dots: !0 }),
    jQuery(".award-certificate").slick({
        infinite: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="slider-arrow-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        dots: !1,
        responsive: [
            { breakpoint: 1800, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }),
    jQuery(".client-slider").slick({
        infinite: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="slider-arrow-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        dots: !1,
        responsive: [
            { breakpoint: 1800, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }),
    jQuery(".blog-slider").slick({
        infinite: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="slider-arrow-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        dots: !1,
        responsive: [
            { breakpoint: 1800, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }),
    jQuery(".event-slider").slick({
        infinite: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="slider-arrow-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        dots: !1,
        responsive: [
            { breakpoint: 1800, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }),
    jQuery(".product-slider").slick({
        infinite: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="slider-arrow-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        dots: !1,
        responsive: [
            { breakpoint: 1800, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }),
    jQuery(".testimonial-slider").slick({
        infinite: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="slider-arrow-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        dots: !1,
        responsive: [
            { breakpoint: 1800, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }),
    jQuery(window).on("load", function (e) {
        jQuery("#preloader").fadeOut(2e3);
    }),
    jQuery(window).on("load", function (e) {
        CargoZone.load();
    }),
    jQuery(window).on("resize", function () {
        "use strict";
        CargoZone.resize();
    }),
    AOS.init({ duration: 1e3 });


    let currentDate = dayjs();
let daysInMonth = dayjs().daysInMonth();
let firstDayPosition = dayjs().startOf("month").day();
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let dateElement = document.querySelector("#calendar .calendar-dates");
let calendarTitle = document.querySelector(".calendar-title-text");
let nextMonthButton = document.querySelector("#nextMonth");
let prevMonthButton = document.querySelector("#prevMonth");
let dayNamesElement = document.querySelector(".calendar-day-name");
let todayButton = document.querySelector("#today");
let dateItems = null;
let newMonth = null;

weekNames.forEach(function (item) {
  dayNamesElement.innerHTML += `<div>${item}</div>`;
});

function plotDays() {
  let count = 1;
  dateElement.innerHTML = "";

  let prevMonthLastDate = currentDate.subtract(1, "month").endOf("month").$D;
  let prevMonthDateArray = [];

  //plot prev month array
  for (let p = 1; p < firstDayPosition; p++) {
    prevMonthDateArray.push(prevMonthLastDate--);
  }
  prevMonthDateArray.reverse().forEach(function (day) {
    dateElement.innerHTML += `<button class="calendar-dates-day-empty">${day}</button>`;
  });

  //plot current month dates
  for (let i = 0; i < daysInMonth; i++) {
    dateElement.innerHTML += `<button class="calendar-dates-day">${count++}</button>`;
  }

  //next month dates
  let diff =
    42 - Number(document.querySelector(".calendar-dates").children.length);
  let nextMonthDates = 1;
  for (let d = 0; d < diff; d++) {
    document.querySelector(
      ".calendar-dates"
    ).innerHTML += `<button class="calendar-dates-day-empty">${nextMonthDates++}</button>`;
  }

  //month name and year
  calendarTitle.innerHTML = `${
    monthNames[currentDate.month()]
  } - ${currentDate.year()}`;
}

//highlight current date
function highlightCurrentDate() {
  dateItems = document.querySelectorAll(".calendar-dates-day");
  if (dateElement && dateItems[currentDate.$D - 1]) {
    dateItems[currentDate.$D - 1].classList.add("today-date");
  }
}

//next month button event
nextMonthButton.addEventListener("click", function () {
  newMonth = currentDate.add(1, "month").startOf("month");
  setSelectedMonth();
});

//prev month button event
prevMonthButton.addEventListener("click", function () {
  newMonth = currentDate.subtract(1, "month").startOf("month");
  setSelectedMonth();
});

//today button event
todayButton.addEventListener("click", function () {
  newMonth = dayjs();
  setSelectedMonth();
  setTimeout(function () {
    highlightCurrentDate();
  }, 50);
});

//set next and prev month
function setSelectedMonth() {
  daysInMonth = newMonth.daysInMonth();
  firstDayPosition = newMonth.startOf("month").day();
  currentDate = newMonth;
  plotDays();
}

//init
plotDays();
setTimeout(function () {
  highlightCurrentDate();
}, 50);