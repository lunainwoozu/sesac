'use strict';

gsap.to(".volume", {
  duration: 5,
  rotation: 360,
  repeat: -1
});

VANTA.CLOUDS({
  el: ".me-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
});

gsap.registerPlugin(SplitText);

console.clear();

// split elements with the class "split" into words and characters
let split = SplitText.create(".split", { type: "words, chars" });

// now animate the characters in a staggered fashion
gsap.from(split.chars, {
  duration: 1, 
  y: 100,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05 // 0.05 seconds between each
});
