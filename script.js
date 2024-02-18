const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function MouseFollower()
{
    window.addEventListener("mousemove",function(dets)
    {
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

MouseFollower();

function firstPageAnim()
{
    var tl = gsap.timeline();

    tl.from("#nav",
    {
        y: '-10',
        opacity :0,
        duration : 1.3,
        delay : 1,
        ease: Expo.easeInout
    })

    .to(".boundingElem",
    {
        y :0,
        ease:Expo.easeInout,
        duration:1.5,
        delay : -1,
        stagger:.2
    })

    .from(".herofooter",
    {
        y:-10,
        opacity:0,
        ease:Expo.easeInout,
        duration : .9,
        delay : -.7
    })
}

firstPageAnim();


let elements = document.querySelectorAll(".elem");

elements.forEach(function(eleme)
{
   

    let rotate = 0;
    let diffRot= 0;
    
    eleme.addEventListener("mousemove",function(dets)
    {
        let diff = (dets.clientY-eleme.getBoundingClientRect().top);

        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(eleme.querySelector("img"),{
            opacity:1,
            ease : Power3,
            top: diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffRot)
        })
    })

    eleme.addEventListener("mouseleave",function(dets)
    {
        gsap.to(eleme.querySelector("img"),{
            opacity:0,
            ease : Power3
        })
    })
})