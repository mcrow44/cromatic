'use client'
import Image from "next/image";
import styles from "./page.module.css";
import GalleryCarousel from "./GalleryCarousel";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
<link rel="stylesheet" href="https://use.typekit.net/ebp7hqz.css"></link>;


export default function Home() {

  const container = useRef();
  const blockLeft = useRef();
  const blockRight = useRef();
  const leftTop = useRef();
  const leftBottom = useRef();
  const center = useRef();
  const centertwo = useRef();
  const biography = useRef();


  const animateHeroItems = () => {
    const bw = document.getElementsByClassName("center")[0];
    const color = document.getElementsByClassName("centertwo")[0];
    
    gsap.timeline()
      .to(bw, {
        opacity: 0,
        transform: 'translateX(-80px)',
        duration: 1,
        ease: 'ease-in-out'
      })
      .to(color, {
        opacity: 0,
        transform: 'translateX(-80px)',
        duration: 1,
        ease: 'ease-in-out'
      }, '-=1'); // Start this animation 1 second before the end of the previous one
  };

  const animateHeroItemsTwo = () => {
    
    gsap.timeline()
      .to(leftTop?.current, {
        opacity: 0,
        duration: 1,
        ease: 'ease-out'
      },)

      .to(leftBottom?.current, {
        opacity: 0,
        duration: 1,
        ease: 'ease-out'
      }, '-=1')
      .to(biography?.current,{
        opacity: 1,
        duration: 1,
        ease: 'ease-in'
      }, '-=1'); // Start this animation 1 second before the end of the previous one
  };

  const animateWhiteOutMain = () => {
    
    gsap.timeline()
      .to(center?.current,{
        transform: 'translateX(-80px)', // corrected "translatex" to "translateX"
        duration: 1,
        ease: 'ease-in-out'
      },)
      .to(center?.current,{
        transform: 'translateX(-80px)', // corrected "translatex" to "translateX"
        duration: 1,
        ease: 'ease-in-out'
      }, '-=1.09')  
      .to(blockLeft?.current, {
        transform: 'translateX(-355px)',
        duration: 1,
        ease: 'ease-in-out'
      }, '-=1.09')
      .to(blockRight?.current, {
        transform: 'translateX(-880px)', // corrected "translatex" to "translateX"
        duration: 1,
        ease: 'ease-in-out'
      }, '-=1.09'); // Start this animation 1 second before the end of the previous one
  };

  
  // const heroItems: MouseEventHandler<HTMLAnchorElement> | undefined = () => {
  //   var bw = document.getElementsByClassName("center");
  //   var color = document.getElementsByClassName("centertwo"); {
  //     bw[0].style.transition = "opacity 1s ease-in-out";
  //     color[0].style.transition = "opacity 1s ease-in-out";
  //     bw[0].style.transition = "transform 1s ease";
  //     color[0].style.transition = "transform 1s ease";
  //     // bw[0].style.opacity = 0;
  //     // color[0].style.opacity = 0;
  //     bw[0].style.transform = "translateX(-80px)";
  //     color[0].style.transform = "translateX(-80px)";
  //   }
  // };

  // const heroItemsTwo: MouseEventHandler<HTMLAnchorElement> | undefined = () => {
  //   var left = document.getElementsByClassName("left");
  //   var leftbottom = document.getElementsByClassName("leftbottom"); {
  //     left[0].style.transition = "opacity 1s ease-in-out";
  //     leftbottom[0].style.transition = "opacity 1s ease-in-out";
  //     left[0].style.opacity = 0;
  //     leftbottom[0].style.opacity = 0;

      
  //   };
  // };

  // const heroItemsThree: MouseEventHandler<HTMLAnchorElement> | undefined = () => {
  //   var boxLeft = document.getElementsByClassName("blockL")[0];
  //   var boxRight = document.getElementsByClassName("blockR")[0]; {
  //     boxLeft.style.transition = "transform 1s ease";
  //     boxRight.style.transition = "transform 1s ease";
  //     boxLeft.style.transform = "scaleX(1.1)";
  //     boxRight.style.transform = "scaleX(1.1)";

      
  //   };

  return (
        
    
    <section>
      <main className={styles.main}>
        <div className={styles.description}>
          
          <div>
            <a href="#"><Image
                src="/cromatic.dark.svg"
                alt="cromatic Logo"
                className={styles.cromaticLogo}
                width={240}
                height={108}
                priority
              />
            </a>
          </div>

          

          <nav>
            <ul className={styles.navBar}>
              <a href=""><li className={styles.Home}>Home</li></a>
              <a href="#design"><li className={styles.Design}>Design</li></a>
              <a href="#contact"><li className={styles.Contact}>Contact</li></a>
            </ul>
          </nav>
        </div>

        <div className={styles.heroAll}>
            <div className={styles.left}>
              <div className={styles.leftTop}>
                <div ref={leftTop} className={styles.hero}><Image
                        src="/welcome.message.svg"
                        alt="hero text"
                        className={styles.cromaticLogo}
                        width={1000}
                        height={200}
                        priority
                      /></div>
                </div>
              <div ref={leftBottom} className={styles.leftbottom}>
                <div className={styles.aboutMe} onClick={() => {animateWhiteOutMain(), animateHeroItemsTwo()}} >
                  <a>About Me</a>
                </div>
              </div>

              <div ref={blockLeft} className={styles.blockLeft} ></div>
              <div ref={blockRight} className={styles.blockRight} ></div>

            </div>
          <div className={styles.right}>
            <div className={styles.center}>
              <div ref={center} className="center" id="center">
                <Image
                  src="/image-hero.jpg"
                  alt="hero shot"
                  className={styles.logo}
                  width={800}
                  height={533.3333}
                  // priority
                />
              </div>
            </div>
            <div className={styles.centertwo}>
              <div ref={centertwo} className="centertwo" id="centertwo">
                <Image
                  src="/image-hero-2.jpg"
                  alt="hero shot"
                  className={styles.logoC}
                  width={800}
                  height={533.3333}
                  // priority
                />
              </div>
            </div>
            <div ref={biography} className={styles.biography}>
              <div className={styles.bioTitle}>
                <h2>About Me.</h2>
              </div>
              <div className={styles.bioText}>
                <p>In a world full of business owners, insane ad campaigns, and gross logos... Michael Cronin, thats me and my company, try to do the impossible... Create a style guide to help you survive running a business

                    <br/><br/>Cromatic Collective's declassified brand survival guide.<br/><br/>
                    Im a graphic designer, photographer, web designer, and overall pretty decent dude. I have 10 years of experience in design as well as a basic understanding in HTML, CSS, and JavaScript. I also have expertise in the full adobe suite of design tools.<br/><br/> So take a look through my pixel perfect designs that will show your customers who you are to see if we would be a good fit.</p>
              </div>
            </div>
            <div className={styles.centerthree}>
              <div className="centerthree">
                <Image
                  src="/image-hero-pt-2.jpg"
                  alt="hero shot"
                  className={styles.logoC}
                  width={355}
                  height={533.3333}
                  // priority
                />
              </div>
            </div>
            <div className={styles.centerfour}>
              <div className="centerfour">
                <Image
                  src="/image-hero-pt-2-1.jpg"
                  alt="hero shot"
                  className={styles.logoC}
                  width={355}
                  height={533.3333}
                  // priority
                />
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className={styles.middle}>
            <div id="design"></div>
            <div className={styles.work}><Image
                    src="/what.we.do.svg"
                    alt="work text"
                    className={styles.cromaticLogo}
                    width={450}
                    height={150}
                    priority
                  /></div>

            <div className={styles.gallery}>
              <GalleryCarousel/>
            </div>
            
            <div className={styles.allDesigns} onClick={() => {} }>
                  <a>All Designs</a>
                </div>
          </div>
        </section>
        <section>
          <div className={styles.end}>
            <div id="contact"></div>
            <div className={styles.reachout}><Image
                    src="/reach.out.svg"
                    alt="reachout text"
                    className={styles.cromaticLogo}
                    width={450}
                    height={150}
                    priority
                  /></div>
            <div>
              <form className={styles.form} action="index.php" method="POST">
                <input type="text" className={styles.firstName} id="firstName" placeholder="FIRST NAME" required/>
                <input type="text"  className={styles.lastName} id="lastName" placeholder="LAST NAME" required/><br/>
                <input type="email" className={styles.email} id="email" placeholder="EMAIL" required/><br/>
                <input type="text" className={styles.message} id="message" placeholder="MESSAGE (OPTIONAL)"/><br/>
                <input type="tel" className={styles.phone} id="phone" placeholder="PHONE NUMBER (OPTIONAL)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>

                <input type="submit" className={styles.submit}/>

              </form>
            </div>
          </div>
            
        </section>
      </main>
      <footer>
        <div className={styles.footer}>
          <p className={styles.allRights}>Cromatic Collective © All Rights Reserved</p>
          <a href="https://www.instagram.com/cromatic_collective/" target="_blank"><Image
          src="/insta.logo.svg"
          alt="insta logo"
          className={styles.instaLogo}
          width={40}
          height={40}
          priority
          /></a>
          <a href="https://twitter.com/CromaticCo" target="_blank"><Image
          src="/x.logo.svg"
          alt="x logo"
          className={styles.xLogo}
          width={40}
          height={40}
          priority
          /></a>
        </div>
      </footer>
    </section>
  );
}
