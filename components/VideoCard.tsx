"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image"
import dummyIMG from "../assets/dummy.png"

type VideoInfo = {
  title?: string;
  channel?: string;
  channelImage: string;
  url: string;
  videoId: string;
  clickHandler: (id:string) => void;
};

const VideoCard: React.FC<VideoInfo> = ({
  title,
  channel,
  channelImage,
  url,
  videoId,
  clickHandler,
}) => {
  const clickHandle = () => {
    const id = videoId;
    clickHandler(id);
  };
  return (
    <Link href={`detail/${videoId}`} className="text-white no-underline" onClick={clickHandle}>
      <div className="mb-2 w-[270px] ml-2.5">
        {/* <iframe
          className="h-[140px] w-[250px] select-none"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
        <Image src={dummyIMG} width={250} height={140} alt="" className="aspect-video"/>
        <div className="flex mt-[10px] pr-6">
          <div className="videoCard__text">
            <h4 className="text-sm mb-[5px] mt-0">{title}</h4>
            <p className="text-sm mt-0 mb-0 text-gray-400">{channel}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
