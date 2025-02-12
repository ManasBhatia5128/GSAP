/* gsap.to("#inner",{
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
}); */

// gsap.from("h1",{
//     opacity: 0,
//     color: "orange",
//     y:500,
//     duration:3,
//     delay:1,
//     stagger: -1,
// })

/* gsap.to("#inner",{
    x:1200,
    rotate:360,
    duration:1.5,
    delay:1
});
gsap.to("#inner2",{
    x:1200,
    rotate:360,
    duration:1.5,
    scale: 0.5,
    delay:2.5 // prev wale ka duration + delay if we want it to start after first is finished
});
gsap.to("#inner3",{
    x:1200,
    rotate:360,
    duration:1.5,
    borderRadius: "200px",
    delay:4
}); */

const t1 = gsap.timeline();
/* t1.to("#inner",{
    x:1200,
    rotate:360,
    duration:1.5,
    delay:1, 
});
t1.to("#inner2",{
    x:1200,
    rotate:360,
    duration:1.5,
    scale:0.5,
    borderRadius: "100%",
    backgroundColor: "grey",
    delay:1, 
});
t1.to("#inner3",{
    x:1200,
    rotate:360,
    duration:1.5,
    scale:1.5,
    borderRadius: "100%",
    backgroundColor: "pink",
    delay:1, 
}); */

t1.from("h2",{
    y:-100,
    duration: 1,
    delay: 0.5
})
t1.from("li",{
    y:-100,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})
t1.from("h1",{
    opacity: 0,
    scale:0.2,
    y:-20,
    duration: 1.4,
})