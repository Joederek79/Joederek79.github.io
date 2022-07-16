gsap.registerPlugin(CustomEase);

// function scrollTrig() {
//   let sections = gsap.utils.toArray(".main-a-propos");
//   gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".section-propos",
//       pin: true,
//       scrub: 1,
//       snap: 1 / (sections.length - 1),
//       // base vertical scrolling on how wide the container is so it feels more natural.
//       end: () => "+=" + document.querySelector(".main-a-propos").offsetWidth,
//     },
//   });
// }

let tlIntro;
function intro() {
  tlIntro = new gsap.timeline()
    .from(".landing", {
      opacity: 0,
      duration: 1,
    })
    .from(".main-title", {
      opacity: 0,
      duration: 1,
      stagger: 0.25,
    });

  tlVintage.play();
  return tlIntro;
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
}

function addDivs() {
  for (divs = 0; divs < 5; divs++) {
    let randomColor = randomRgbColor().toString(16);
    $(".screens-test").append(
      `<div class="screens-tests" style = "z-index: 10; width: 25%; background-color: rgb(${randomColor}")></div>`
    );
  }
}
addDivs();

let tlVintage;
function vintageEffect() {
  tlVintage = new gsap.timeline()
    .to(
      ".noiseBG",
      {
        repeat: -1,
        onRepeat: function () {
          repeatStatic();
        },
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.015,0.093,0.025,0.152,0.034,0.187,0.058,0.546,0.062,0.558,0.066,0.552,0.083,0.202,0.09,0.194,0.101,0.209,0.147,0.855,0.155,0.866,0.162,0.839,0.216,0.063,0.22,0.051,0.223,0.072,0.276,0.719,0.28,0.744,0.283,0.734,0.331,0.294,0.335,0.285,0.335,0.292,0.348,0.393,0.35,0.402,0.351,0.399,0.362,0.376,0.37,0.362,0.375,0.31,0.384,0.078,0.385,0.074,0.386,0.08,0.404,0.966,0.404,0.966,0.404,0.966,0.444,0.393,0.455,0.392,0.499,0.451,0.553,-0.064,0.61,0.01,0.621,0.077,0.652,0.956,0.655,0.968,0.657,0.959,0.773,0.642,0.796,0.648,0.83,0.735,0.889,0.977,0.9,1.004,0.903,0.995,0.92,0.116,0.924,0.104,0.931,0.115,1,1,1,1"
        ),
        duration: 0.1,
      },
      0.25
    )
    .to(
      "body",
      {
        repeat: -1,
        onRepeat: function () {
          bodyMoovin();
        },
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.015,0.093,0.025,0.152,0.034,0.187,0.058,0.546,0.062,0.558,0.066,0.552,0.083,0.202,0.09,0.194,0.101,0.209,0.147,0.855,0.155,0.866,0.162,0.839,0.216,0.063,0.22,0.051,0.223,0.072,0.276,0.719,0.28,0.744,0.283,0.734,0.331,0.294,0.335,0.285,0.335,0.292,0.348,0.393,0.35,0.402,0.351,0.399,0.362,0.376,0.37,0.362,0.375,0.31,0.384,0.078,0.385,0.074,0.386,0.08,0.404,0.966,0.404,0.966,0.404,0.966,0.444,0.393,0.455,0.392,0.499,0.451,0.553,-0.064,0.61,0.01,0.621,0.077,0.652,0.956,0.655,0.968,0.657,0.959,0.773,0.642,0.796,0.648,0.83,0.735,0.889,0.977,0.9,1.004,0.903,0.995,0.92,0.116,0.924,0.104,0.931,0.115,1,1,1,1"
        ),
        duration: 0.1,
      },
      "<"
    );
  function repeatStatic() {
    gsap.set([".noiseBG"], {
      backgroundPosition:
        Math.floor(Math.random() * 400) +
        1 +
        "% " +
        Math.floor(Math.random() * 300) +
        1 +
        "%",
    });
    gsap.set([".noiseBG"], {
      opacity: Math.random(),
      // scaleY: Math.random() + 0.4,
    });
  }
  function bodyMoovin() {
    gsap.set([".landing", ".wrapper", ".main-a-propos", ".cv-container"], {
      y: Math.floor(Math.random() * 2) + 1,
      x: Math.floor(Math.random() * 2) + 1,
    });
  }
  return tlVintage;
}

let tlFilmRoll;
function filmRoll() {
  tlFilmRoll = new gsap.timeline({ paused: true })
    .to(".film-roll", {
      backgroundPosition: "-1% " + "5000%",
      rotate: ".5deg",
      repeat: 2,
      duration: 0.1,
      opacity: 1,
    })
    .to(
      ".landing",
      {
        rotate: ".5deg",
      },
      "<"
    )

    .to(".film-roll", {
      rotate: "-1.1deg",
    })

    .to(".film-roll", {
      backgroundPosition: "-1% " + "-2000%",
      rotate: ".5deg",
      repeat: 2,
      duration: 2,
      ease: "expo.out",
    })
    .to(".film-roll", {
      rotate: "-1.1deg",
      onComplete: () => $(".wrapper").removeClass("killed"),
    });

  return tlFilmRoll;
}

function enteringMain() {
  $("body").css("cursor", "none");
  $(document).mousemove(function (evt) {
    $(".film-burn-hole").css({ top: evt.clientY, left: evt.clientX - 350 });
  });
  $(document).on("click", () => {
    tlFilmBurn.restart();
    tlFilmRoll.restart();
    $("body").css("cursor", "auto");
    $(document).off("click");
    tlBgImageAnim.restart();
    tlNavScale.restart();
    tlTyping.restart();
    tlVintage.restart();
  });
}

let tlBackToMain;
function backToMain() {
  $(".back-to-main").click(() => {
    tlBackToMain = new gsap.timeline().add(() => {
      if (!$(".section-propos").hasClass("killed")) {
        tlEnterSection.reverse();
      }
      if (!$(".cv-container").hasClass("killed")) {
        tlEnterCV.reverse();
      }
    });
  });

  tlNavScale.seek(1.5).play();

  return tlBackToMain;
}

let tlFilmBurn;
function filmBurn() {
  tlFilmBurn = new gsap.timeline({ paused: true })
    .from(".film-burn-hole", {
      scale: 0.075,
      rotate: "180deg",
      duration: 2,
      ease: "expoScale(0.1, 6, power1.inOut)",
      // onStart: function () {
      //   // tlVintage.pause();
      // },
    })
    .set(
      ".film-burn-hole",
      {
        visibility: "visible",
      },
      "<"
    )
    // .set(".noiseBG", { opacity: 0 })
    .set(".wrapper", { display: "block" })
    .set(".bg-landing", { display: "none" })
    .set(".film-roll", { opacity: 0 })
    .to(".film-burn-hole", {
      opacity: 0,
      duration: 1,
    })
    .set(".film-burn-hole", {
      display: "none",
    });

  return tlFilmBurn;
}

let tlBgImageAnim;
function bgImageAnim() {
  tlBgImageAnim = new gsap.timeline({ paused: true, overwrite: false })
    // .to("body", { backgroundColor: "rgb(9,9,11)" })
    // .from(".bg-img", {
    //   // scale: 0.0025,

    //   opacity: 0,
    //   // ease: "expoScale(0.0025, 1)",
    //   duration: 1,
    // })
    // .set(".image", { opacity: 1 }, "<")
    .set(".bg-2", { visibility: "visible" })
    .set(".bg-3", { visibility: "visible" })
    .fromTo(".bg-2", { y: "120vh" }, { y: "0vh", ease: "power4", duration: 1 })

    .fromTo(
      ".bg-3",
      { y: "-25vh" },
      { y: "0vh", ease: "power4", duration: 1 },
      "<"
    )
    .to(".bg-img", { opacity: 1, y: 0, ease: "power2", duration: 2 }, "<0.75")
    .to(".bg-img2", { opacity: 1, y: 0, ease: "power2", duration: 2 }, "<1.25")
    .to(
      ".bg-img2",
      {
        x: 2,
        ease: "none",
        yoyo: true,
        repeat: -1,
        duration: 1.5,
      },
      "<"
    );
  return tlBgImageAnim;
}

let tlRideau;
function rideau() {
  tlRideau = new gsap.timeline({ paused: true }).fromTo(
    ".screens-tests",
    {
      xPercent: -102,
      stagger: 0.04,
      duration: 2,
      ease: "circ",
    },
    {
      delay: 0.1,
      xPercent: 500,
      yoyo: true,
      repeat: 1,
      repeatDelay: 0.9,
      repeatRefresh: true,
    }
  );

  return tlRideau;
}

let tlTyping;
function typing() {
  tlTyping = new gsap.timeline({ paused: true })
    .to("#leftTag", { delay: 1, display: "inline-block", duration: 0.1 }, 5)
    .to("#jLetter", { display: "inline-block", duration: 0.2 })
    .to("#oLetter", { display: "inline-block", duration: 0.3 })
    .to("#rLetter", { display: "inline-block", duration: 0.15 })
    .to("#rLetter", { display: "none", duration: 0.2 })
    .to("#oLetter", { display: "inline-block", duration: 0.19 })
    .to("#eLetter", { display: "inline-block", duration: 0.23 })
    .to("#rigthTag", { display: "inline-block", duration: 0.26 })
    .to("#rigthTag", { display: "none", duration: 0.11 })
    .to("#rigthTag", { display: "none", duration: 0.09 })
    .to("#underscore", { display: "inline-block", duration: 0.18 })
    .to("#rigthTag", { display: "none", duration: 0.3 })
    .to("#aLetter", { display: "inline-block", duration: 0.22 })
    .to("#rigthTag", { display: "inline-block", duration: 0.3 })

    .from(".letter", {
      y: "-50vh",
      stagger: 0.25,
      duration: 1,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.14,0 0.244,0 0.278,0.14 0.318,0.307 0.354,0.963 0.362,1 0.37,0.985 0.402,0.51 0.492,0.51 0.596,0.51 0.574,0.928 0.6,1 0.632,0.912 0.622,0.814 0.696,0.814 0.77,0.814 0.786,0.987 0.8,1 0.811,0.996 0.792,0.944 0.854,0.944 0.896,0.944 0.9,1 0.9,1 0.9,1 0.92,0.972 0.94,0.972 0.947,0.972 0.956,1 0.956,1 0.956,1 0.975,0.984 0.975,0.984 0.975,0.984 1,1 1,1 "
      ),
    })
    .to(".titre1", { scaleX: 4, scaleY: 0.2, ease: "back", duration: 0.4 })
    .to(
      ".titre1",
      {
        scaleX: 1,
        scaleY: 1,
        ease: "elastic",
        onComplete: function () {
          lineScrollAnim();
        },
      },
      ">"
    );
  // .from(".titre1", { duration: 8, ease: "circ" }, 0);
  return tlTyping.timeScale(1.1);
}

// let pauseBtn = document.getElementById("pause");
// pauseBtn.onclick = function () {
//   tl.paused(!tl.paused());
//   pauseBtn.innerHTML = tl.paused() ? "play" : "pause";
// };

let tlNavScale;
function navScale() {
  tlNavScale = new gsap.timeline({ paused: true })
    .fromTo(
      ".navigation",
      {
        opacity: 0,
        yPercent: 200,
      },
      {
        opacity: 1,
        yPercent: 0,
        ease: "back",
        stagger: 0.25,
        duration: 1.25,
        delay: 1.5,
      }
    )
    .set(
      ".navigation",
      {
        display: "block",
      },
      "<"
    );
  // .to(".navigation", {
  //   rotate: ".000001",
  //   duration: 1.25,
  // });

  return tlNavScale;
}

gsap.registerEffect({
  name: "hover",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      scaleX: config.scaleX,
      scaleY: 1.2,
      color: "rgb(229, 206, 175)",
      fill: "rgb(229, 206, 175)",
    });
  },
  defaults: { duration: 1, scaleX: 1 },
  extendTimeline: true,
});

gsap.registerEffect({
  name: "hover2",
  effect: (targets, config) => {
    return gsap.fromTo(
      targets,
      {
        scale: 1,
        fill: "rgb(151, 49, 5)",
        color: "rgb(151, 49, 5)",
      },
      {
        duration: config.duration,
        scale: 1.2,
        fill: "rgb(229, 206, 175)",
        color: "rgb(229, 206, 175)",
      }
    );
  },
  defaults: { duration: 1 },
  extendTimeline: true,
});

function hoverGsapNav() {
  gsap.utils.toArray([".nav-title", ".certificate"]).forEach((title) => {
    let tlHover = gsap.timeline({ paused: true });
    tlHover.hover(title);

    title.addEventListener("mouseenter", () => tlHover.play());
    title.addEventListener("mouseleave", () => tlHover.reverse());
  });

  // gsap.utils.toArray(".back-to-main").forEach((face) => {
  //   let tlHover2 = gsap.timeline({ paused: true });
  //   tlHover2.hover2(face);
  // });
  // let tlHover2 = gsap.timeline({ paused: true });
  // tlHover2.hover2(".back-to-main, #menu, #menu-cv", {
  //   scaleY: 1.2,
  // });

  // $(".back-to-main, #menu, #menu-cv").on("mouseenter", () => {
  //   tlHover2.play();
  // });
  // $(".back-to-main, #menu, #menu-cv").on("mouseleave", () =>
  //   tlHover2.reverse()
  // );

  gsap.utils.toArray([".icon", ".icon2", ".back-to-main"]).forEach((icon) => {
    let tlHover2 = gsap.timeline({ paused: true });
    tlHover2.hover2(icon);
    icon.addEventListener("mouseenter", () => tlHover2.play());
    icon.addEventListener("mouseleave", () => tlHover2.reverse());
  });
}

let tlArrow;
function arrowLight() {
  tlArrow = new gsap.timeline({ paused: true, repeat: 2 })
    .fromTo(
      ".arrow1",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
      }
    )
    .fromTo(
      ".arrow2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
      },
      "<0.5"
    )
    .fromTo(
      ".arrow3",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
      },
      "<0.5"
    )
    // let tlTextPulse = new gsap.timeline({ repeat: -1, paused: true })
    .fromTo(
      ".fleche-group",
      {
        scale: 0.95,
        opacity: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "circ",
      },
      0
    );

  return tlArrow;
}

const letters = gsap.utils.toArray(".letter");
function letterJump() {
  let tlLetterJump;
  let tlLetterColorChange;
  letters.forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
      tlLetterColorChange = gsap.timeline({ paused: true });
      tlLetterJump = gsap.timeline({ paused: true });
      let randomColor = randomRgbColor().toString(16);
      tlLetterJump.fromTo(
        letter,
        { yPercent: 0 },
        { yPercent: -50, ease: "circ", repeat: 1, yoyo: true }
      );
      tlLetterColorChange.to(letter, {
        fill: `rgb(${randomColor})`,
        ease: "circ",
      });
      tlLetterJump.play();
      tlLetterColorChange.play();
      if (!tlArrow.isActive()) {
        tlArrow.restart();
      }
      if (!tlVintage.isActive()) {
        $(".fleche-text").text("Cliquez-moi pour redémarrer la bobine de film");
      } else {
        $(".fleche-text").text("Cliquez-moi pour arrêter la bobine de film");
      }
    });
    letter.addEventListener("mouseleave", () => {
      tlLetterJump.reverse();
    });
    letter.addEventListener("click", () => {
      if (tlVintage.isActive()) {
        tlVintage.pause();
      } else {
        tlVintage.restart();
      }
    });
  });
}

function lineScrollAnim() {
  const lineScroll = document.querySelector(".line-scroll");
  const pos = { x: window.innerWidth / 2 };
  const mouse = { x: pos.x };
  let speed = 0.7;

  let fpms = 60 / 1000;

  let x = gsap.quickSetter(lineScroll, "x", "px");

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  gsap.ticker.add((time, deltaTime) => {
    let delta = deltaTime * fpms;
    let dt = 1.0 - Math.pow(1.0 - speed, delta);

    pos.x += (mouse.x - pos.x) * dt;
    x(pos.x);
  });
}
// gsap.ticker.add(myFunction);

function myFunction(time) {
  //executes on every tick after the core engine updates
}

let tlContact;
function contact() {
  $(".contact").on("click", () => {
    if ($(".footer").hasClass("killed")) {
      $(".footer").removeClass("killed");
      tlContact = gsap.timeline().fromTo(
        ".icon",
        {
          scale: 4,
          opacity: 0,
          yPercent: 0,
          duration: 0.5,
        },
        {
          delay: 0.5,
          scale: 1,
          opacity: 1,
          yPercent: 5,
          stagger: 0.35,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0,0 0.05,0.228 0.09,0.373 0.12,0.484 0.139,0.547 0.18,0.654 0.211,0.737 0.235,0.785 0.275,0.864 0.291,0.896 0.306,0.938 0.325,0.978 0.34,1.011 0.362,1.055 0.38,1.088 0.412,1.146 0.41,1.136 0.432,1.172 0.453,1.206 0.481,1.233 0.498,1.244 0.528,1.264 0.567,1.28 0.59,1.28 0.66,1.28 0.684,1.252 0.712,1.232 0.776,1.184 0.822,1.035 0.91,1.011 0.943,1.002 1,1 1,1 "
          ),
          onReverseComplete: () => $(".footer").addClass("killed"),
        }
      );
    } else {
      tlContact.reverse();
    }
    // $(".footer").toggleClass("killed");
  });
  return tlContact;
}

let tlEnterSection;
function enterSection1() {
  $(".nav1").click(() => {
    tlNavScale.reverse();
    tlRideau.restart();
    if (!$(".footer").hasClass("killed")) {
      tlContact.reverse();
    }
    $(".section-propos").removeClass("killed");
    tlEnterSection = gsap
      .timeline()
      .to(".wrapper", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // tlBgImageAnim.reverse();
          gsap.to(".section-propos", { backgroundColor: "rgb(25,5,15)" });
          // gsap.to("body", { backgroundColor: "rgb(9,9,11)" });
          $(".wrapper").addClass("killed");
        },
      })
      .add(tlRideau.restart(), "-=0.7")
      .fromTo(
        ".propos > *",
        {
          opacity: 0,
          yPercent: 5,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.35,
          duration: 0.8,
          onReverseComplete: () => {
            $(".wrapper").removeClass("killed");
            tlRideau.restart();
            tlBgImageAnim.restart();
            tlNavScale.restart();
            $(".section-propos").addClass("killed");
          },
        },
        "-=1"
      )
      .fromTo(
        ".section-propos",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<"
      );
  });
  return tlEnterSection;
}

let tlEnterCV;
function enterCV() {
  $(".nav3").click(() => {
    tlNavScale.reverse();
    if (!$(".footer").hasClass("killed")) {
      tlContact.reverse();
    }
    $(".cv-container").removeClass("killed");
    tlEnterCV = gsap
      .timeline()
      .to(".image", {
        opacity: 0,
        onComplete: () => {
          // tlBgImageAnim.reverse();
          gsap.to(".cv-container", { backgroundColor: "rgb(9,25,12)" });
          // gsap.to("body", { backgroundColor: "rgb(9,9,11)" });
          $(".wrapper").addClass("killed");
        },
        onReverseComplete: () => {
          $(".wrapper").removeClass("killed");
          $(".cv-container").addClass("killed");
        },
      })
      .add(tlRideau.restart(), "-=0.7")
      .fromTo(
        [".cv-container > * ", "ul > *"],
        {
          opacity: 0,
          x: -15,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.25,
          onReverseComplete: () => {
            tlRideau.restart();
            tlBgImageAnim.restart();
            tlNavScale.restart();
          },
        }
      )
      .fromTo(
        ["aside > * "],
        {
          opacity: 0,
          x: 25,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.5,
        }
        // "-=1"
      );
  });
  return tlEnterCV;
}

window.addEventListener("load", () => {
  vintageEffect();
  rideau();
  filmRoll();
  letterJump();
  arrowLight();
  hoverGsapNav();
  bgImageAnim();
  typing();
  filmBurn();
  navScale();
  contact();
  enterCV();
  backToMain();
  enteringMain();
  enterSection1();
  intro();
});
