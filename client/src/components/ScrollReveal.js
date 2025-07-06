import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 2,
  blurStrength = 20,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  wordStagger = 0.05
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const processChildren = (children) => {
      return React.Children.map(children, (child) => {
        if (typeof child === 'string') {
          return child.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word; // Preserve spaces
            return (
              <span className="word" key={index}>
                {word}
              </span>
            );
          });
        }
        if (React.isValidElement(child)) {
          // If it's a component like <br />, return it directly.
          if (typeof child.type === 'string' && child.type === 'br') {
            return child;
          }
          // If it has children, recursively process them.
          return React.cloneElement(
            child,
            child.props,
            processChildren(child.props.children)
          );
        }
        return child;
      });
    };
    return processChildren(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { 
        opacity: baseOpacity, 
        willChange: 'opacity, transform, filter' 
      },
      {
        ease: 'power1.out',
        opacity: 1,
        stagger: wordStagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: 1.5,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'power1.out',
          filter: 'blur(0px)',
          stagger: wordStagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: 1.5,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, wordStagger]);

  return (
    <h1 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h1>
  );
};

export default ScrollReveal; 