gsap.from("img",{
    rotate: 360,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".page2",
        scrollers: "body",
        markers: true,
        start: "top 50%",
        scrub: 0.5
    }
})