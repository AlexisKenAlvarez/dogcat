gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({ defaults: {opacity: 0, duration: 2, x: 200, ease: Power4.easeInOut}})
var block = gsap.timeline({defaults: {duration: 3, x: -1500, ease: Power4.easeInOut}});
block.to('.blockage', {});

tl.add(block);
tl.from('.right', {}, "-=1.5")
.from('.pet1', {}, "-=1.5")


