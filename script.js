var tl = gsap.timeline()


tl.from("nav h1,nav h4, nav button",{
    y:-30,
    delay:0.5,
    opacity:0,
    duration:0.8,
    stagger:0.15,
})

tl.from(".centre-part1 h1",{
    x:-400,
    opacity:0,
    duration:0.7,
})

tl.from(".centre-part1 p",{
    x:-100,
    opacity:0,
    duration:0.5,
})

tl.from(".centre-part1 button",{
    opacity:0,
    duration:0.5,
})

tl.from(".centre-part2 img",{
    opacity:0,
    duration:0.5,

},"-=1")

tl.from(".section1-bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
})



var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
    }
})

tl2.from(".services",{
    y:50,
    opacity:0,
    duration:0.8,
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:0.8,
},"test")

tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:0.8,
},"test")

tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:0.8,
},"test2")

tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:0.8,
},"test2")

