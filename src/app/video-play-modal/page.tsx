"use client";
import Modal from "@/components/modal";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const VideoPlayModalPage = () => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [open]);

  return (
    <>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleOpen}
          className="flex gap-2 items-center"
        >
          <FaRegCirclePlay className="h-10 w-10 bg-[#ED7214] rounded-full text-white" />
          Play Video
        </button>
      </div>

      {/* modal  */}
      <Modal
        open={open}
        setOpen={setOpen}
      >
        <div className="w-full md:w-[700px] lg:w-[1200px] md:h-[400px] lg:h-[800px]">
          <video
            src="/vid01.mp4"
            width="100%"
            height="100%"
            autoPlay
            controls
            ref={videoRef}
          ></video>
        </div>
      </Modal>
    </>
  );
};

export default VideoPlayModalPage;
