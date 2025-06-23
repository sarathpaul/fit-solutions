let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 2,
  smoothTouch: 0.1
});

const titles = gsap.utils.toArray('.scroll-text-anim')

titles.forEach((text, i) => {
  let split = SplitText.create(text, { type: "words, chars" });
  gsap.from(split.chars, {
    scrollTrigger: {
      trigger: text,
      toggleActions: 'restart pause reverse pause',
      start: 'top 80%',
      end: 'top 20%',
      // markers: true,
    },
    opacity: 0.1,
    stagger: 0.1
  });
})

let split = SplitText.create(".text-anim", { type: "words, chars, lines" });

gsap.from(split.chars, {
  duration: 1,
  y: 100,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05 // 0.05 seconds between each
});

// Move Items

const move_items = gsap.utils.toArray('.move-item')

move_items.forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      toggleActions: 'restart pause reverse none'
    },
    x: 50,
    duration: 3,
  });
})

// Rotate Animation

const rotatingItem = document.querySelector(".rotate-item");

gsap.from(rotatingItem, { rotation: 360, duration: 40, repeat: -1 });

var rotate = gsap.timeline({
  scrollTrigger: {
    trigger: "html",
    scrub: 0.2,
    start: "top top",
    end: "+=10000"
  }
}).to(rotatingItem, {
  rotation: 360 * 5,
  duration: 1,
  ease: "none"
})

// fade animations

gsap.from(".fade-items", {
  scrollTrigger: {
    trigger: ".fade-items",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom center"
  },
  stagger: 1,
  opacity: 0.1,
});


// Rotate Animation
gsap.to(".rotate-circle", {
  scrollTrigger: {
    trigger: ".rotate-circle",
    toggleActions: 'restart pause reverse none'
  },
  x: 0,
  rotation: 360,
  duration: 2,
})


// counter

gsap.utils.toArray("section").forEach(section => {
  gsap.fromTo(section, { y: 100, opacity: 0 }, {
    y: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "100px bottom",
      end: "+=100",
      scrub: true
    }
  });
});

gsap.from(".animCounter", {
  textContent: "0",
  duration: 1,
  ease: "power1.inOut",
  modifiers: {
    textContent: value => formatNumber(value, 0) + "+"
  },
  scrollTrigger: {
    trigger: "#fast-facts",
    start: "100px 80%",
    end: "+=100",
    toggleActions: "play none none reverse",
    // markers: true
  }
});



function formatNumber(value, decimals) {
  let s = (+value).toLocaleString('en-US').split(".");
  return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
}

// moving

const moveDiv = gsap.utils.toArray('.moving-div')

moveDiv.forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      toggleActions: 'restart pause reverse none'
    },
    x: 200,
    duration: 2,
  });
})

// Background line trasition
gsap.to(".why-choose-wraper-outer", {
  scrollTrigger: {
    trigger: ".why-choose-wraper-outer",
    toggleActions: "play none none reverse",
    // markers: true,
    scrub: 1,
    start: "100px 80%",
    end: "+=100",
  },
  stagger: 1,
  opacity: 1,
  duration: 3,
  ease: "power2.in",
  keyframes: {
    "0%": {
      backgroundSize: "0"
    },
    "100%": {
       backgroundSize: "100%"
    }
  }
});


// Parallax
const panels = gsap.utils.toArray(".sticky-wraper .sticky-item");
panels.forEach((panel, i) => {
  gsap.to(panel, {
    scrollTrigger: {
      trigger: panel,
      start: "top top",
      pin: i === panels.length - 1 ? false : true,
      pinSpacing: i === panels.length - 1 ? true : false,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false
    },
    scale: 1.15
  });
});


// Scale animation
gsap.fromTo(
  ".platforms",
  { scale: 0.8 },
  {
    scale: 1,
    scrollTrigger: {
      trigger: ".platforms",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      markers: false,
    },
  }
);
