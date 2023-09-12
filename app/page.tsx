"use client";
import "next-cloudinary/dist/cld-video-player.css";

import { CldVideoPlayer } from "next-cloudinary";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 px-10 mt-6">
        {Array.from({ length: 30 }).map((_, i) => (
          <CldVideoPlayer
            key={i}
            width={1620}
            height={1080}
            src="samples/animals/cld-sample-video"
          />
        ))}
      </div>
    </>
  );
}
