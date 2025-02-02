import React, { useEffect,useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useLocation } from "react-router-dom";
import Kv from "./index/kv";
import About from "./index/About";
import Experience from "./index/Experience";
import Work from "./index/Work";

gsap.registerPlugin(ScrollToPlugin);

const IndexPage = () => {
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const location = useLocation()

  useEffect(()=>{
    if(location.state?.targetSection){
      const target = location.state.targetSection
      let targetElement = null

      if(target === 'about'){
        targetElement = aboutRef.current
      }else if(target === 'works'){
        targetElement = workRef.current
      }
      if (targetElement) {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: {
            y: targetElement,
            offsetY: 0,
          },
          ease: "power2.out",
        });
      }

    }
  },[location])

  const handleScrollToAbout = () => {
    const targetElement = aboutRef.current
    if (targetElement) {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: {
          y: targetElement,
          offsetY: 0,
        },
        ease: "power2.out", // 緩動效果
      });
    } 
  }
  return (
    <div className="animate-fadeIn">
      <div className="kv relative flex justify-center items-center w-[100vw] h-[100vh]">
        <Kv onScrollTo={handleScrollToAbout}/>
      </div>
      <div className="max-w-[830px] m-auto pb-4 px-5 lg:px-0">
        <div className="pt-20 lg:pt-40" ref={aboutRef}>
          <About/>
        </div>
        <Experience/>
      </div>
      <div ref={workRef}>
        <Work/>
      </div>
    </div>
  );
};

export default IndexPage;
