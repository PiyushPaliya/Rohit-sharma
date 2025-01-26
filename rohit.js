let TL = gsap.timeline();
TL.from("#part2",{
    y:100,
    delay:0.5,
    duration:2,
    opacity:0,
})
TL.from("#text-div h1",{
    x:-100,
    opacity:0,
    duration:3,
    delay:0.1,
    stagger:0.4,
})
TL.from("#small-img",{
    x:100,
    opacity:0,
    duration:1,
}
)
