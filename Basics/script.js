gsap.to("#inner",{
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 60,
    backgroundColor: "lightgreen",
    borderRadius: "100%",
    scale: "0.5",
    repeat: -1,
    yoyo: true
});

gsap.from("#inner2",{
    x: 1000,
    y: 500,
    duration: 2,
    delay: 1
});

// gsap.from("h1",{
//     opacity: 0,
//     color: "orange",
//     y:500,
//     duration:3,
//     delay:1,
//     stagger: -1,
// })