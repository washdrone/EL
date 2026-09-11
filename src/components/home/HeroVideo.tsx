"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    let visible = false;
    let loaded = document.readyState === "complete";
    let timer: ReturnType<typeof setTimeout> | undefined;

    const update = () => {
      clearTimeout(timer);
      const conserve = motion.matches || connection?.saveData ||
        ["slow-2g", "2g"].includes(connection?.effectiveType || "");
      if (!visible || !loaded || document.hidden || conserve) {
        video.pause();
        if (conserve) {
          video.removeAttribute("src");
          video.load();
          setPlaying(false);
        }
        return;
      }
      // Let the first page content finish loading before fetching background media.
      timer = setTimeout(() => {
        if (!video.getAttribute("src")) {
          video.src = window.matchMedia("(max-width: 767px)").matches
            ? "/video/performance/hero-mobile-v1.mp4"
            : "/video/performance/hero-desktop-v1.mp4";
        }
        void video.play().catch(() => setPlaying(false));
      }, 250);
    };
    const onLoad = () => { loaded = true; update(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(video);
    window.addEventListener("load", onLoad);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("load", onLoad);
      document.removeEventListener("visibilitychange", update);
      motion.removeEventListener("change", update);
      video.pause();
    };
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src="/images/performance/hero-poster-v1.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        onPlaying={() => setPlaying(true)}
        onError={() => setPlaying(false)}
        className={`absolute inset-0 h-full w-full object-cover ${playing ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-navy-950/70" />
    </div>
  );
}
