gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier:.19
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl2 = gsap.timeline()
tl2.to("#loader",{
  y:-850,
  delay:2,
  duration:2
},"k")
// tl2.to("#main",{
  // y:-800,
  // delay:2,
  // duration:2
// },"k")
// tl2.to("#loader",{
//   display:"none"
// })

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    markers:true,
    start:"top 90%",
    end :"top 5%",

  },
})
tl.to("#description",{
  rotate: "-15deg",
  duration : 1,
  yoyo : true,
  // repeat:Infinity,
})
tl.to("#description",{
  rotate: "15deg",
  duration:1,
  yoyo : true,
  // repeat:Infinity,
})
tl.to("#description",{
  rotate: "-10deg",
  duration:0.8,
  yoyo : true,
  // repeat:Infinity,
})
tl.to("#description",{
  rotate: "10deg",
  duration:0.8,
  yoyo : true,
  // repeat:Infinity,
})
tl.to("#description",{
  rotate: "-5deg",
  duration:0.6,
  yoyo : true,
  // repeat:Infinity,
})
tl.to("#description",{
  rotate: "5deg",
  duration:0.6,
  yoyo : true,
  // repeat:Infinity,
})
tl.to("#description",{
  rotate: "0deg",
  yoyo : true,
  // repeat:Infinity,
})
