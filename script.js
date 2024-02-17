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
}

firstPageAnim();