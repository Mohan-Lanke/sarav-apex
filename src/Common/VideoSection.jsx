import React from 'react';
import { FaPlay } from 'react-icons/fa'; 
import video from '../assets/sample-5.mp4'
const VideoSection = () => {
    const videoSrc = require('../assets/sample-5.mp4');
  return (
    <div>
      <section className="relative flex justify-center items-center h-[400px] bg-black">
      <video
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        autoPlay
      />
      <div className="relative z-10 flex justify-center items-center">
        <button
          onClick={() => {
            const videoElement = document.getElementById('videoPlayer');
            if (videoElement.paused) {
              videoElement.play();
            } else {
              videoElement.pause();
            }
          }}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-black"
        >
          <FaPlay size={30} />
        </button>
      </div>
    </section>
    </div>
  )
}

export default VideoSection
