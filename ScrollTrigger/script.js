gsap.from("#box1",{
    scale:0,
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:"100%"
})

/* gsap.from("#box2",{
    scale:0,
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:"100%",
    // scrollTrigger: "#box2"
    scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
}) */

gsap.from("#page2 h1",{
    opacity: 0,
    scale: 0,
    y: -200,
    rotate: 360,
    duration: 1.5,
    delay: 0.7,
    scrollTrigger: {
        trigger: "#page2 h2",
        scrollers: "body",
        markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: true,
    }
});
gsap.from("#page2 h2",{
    opacity: 0,
    scale: 0,
    y: 200,
    rotate: 360,
    duration: 1.5,
    delay: 0.7,
    scrollTrigger: {
        trigger: "#page2 h2",
        scrollers: "body",
        markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: 1.5,
    }
});