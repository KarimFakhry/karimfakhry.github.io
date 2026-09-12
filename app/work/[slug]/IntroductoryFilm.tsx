"use client";

import { useEffect, useRef } from "react";
import styles from "./IntroductoryFilm.module.css";

export default function IntroductoryFilm({ src, poster, label, className }: {
  src: string;
  poster: string;
  label: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const syncPlayback = () => {
      // Never restart a finished film; keep its final frame on screen.
      video.autoplay = visible && !motion.matches && !video.ended;
      if (video.autoplay) {
        void video.play().catch(() => {
          // Native controls remain available if autoplay is blocked.
        });
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.2 });

    observer.observe(video);
    motion.addEventListener("change", syncPlayback);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, [src]);

  return (
    <div className={styles.insertion}>
      <figure className={`prototype-walkthrough ${className} ${styles.frame}`}>
        <video
          ref={videoRef}
          className={styles.video}
          width={1920}
          height={1080}
          muted
          playsInline
          controls
          preload="none"
          poster={poster}
          aria-label={label}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video. <a href={src}>Open the film.</a>
        </video>
      </figure>
    </div>
  );
}
