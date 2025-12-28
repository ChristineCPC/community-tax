import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animatedElements = (target: HTMLElement) => {
    const ctx = gsap.context(() => {

        gsap.utils.toArray<HTMLElement>(".fade-upwards").forEach((element) => {
            gsap.fromTo(element,
                {
                    y: -100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1,
                        once: true
                    }
                }
            )
        });

        gsap.utils.toArray<HTMLElement>(".fade-upwards-mobile").forEach((element) => {
            gsap.fromTo(element,
                {
                    y: -50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1,
                        once: true
                    }
                }
            )
        });

        gsap.utils.toArray<HTMLElement>(".slide-in").forEach((element) => {
            gsap.fromTo(element,
                {
                    x: -50,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 80%",
                        scrub: 1,
                        once: true
                    }
                }
            )
        });

         gsap.utils.toArray<HTMLElement>(".slide-in-mobile").forEach((element) => {
            gsap.fromTo(element,
                {
                    x: -50,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 80%",
                        scrub: 1,
                        once: true
                    }
                }
            )
        });

        gsap.utils.toArray<HTMLElement>(".card-animation").forEach((element) => {
            gsap.from(element, 
                {
                    opacity: 0,
                    y: -100,
                    duration: 1,
                    
                    ease: "power.out",
                    stagger: {
                        grid: "auto",
                        from: "center",
                        amount: 0.5,
                        each: 1
                    },
                    scrollTrigger:{
                        trigger: element,
                        start: "top 80%",
                        
                        once: true
                    }
                }
                
            )
        });

        gsap.utils.toArray<HTMLElement>(".card-animation-mobile").forEach((element) => {
            gsap.from(element, 
                {
                    opacity: 0,
                    y: -40,
                    duration: 1,
                    
                    ease: "power.out",
                    stagger: {
                        grid: "auto",
                        from: "center",
                        amount: 0.5,
                        each: 1
                    },
                    scrollTrigger:{
                        trigger: element,
                        start: "top 85%",
                        
                        once: true
                    }
                }
                
            )
        });
    }, target);

    return () => ctx.revert();
        
};