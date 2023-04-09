import React from "react";
import VideoCard from "./VideoCard";

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Videos = {
  id: string;
  movie_id: string;
  movie_title: string;
  thumbnail: Thumbnail;
};

const VideoList: React.FC<{ videos: any }> = ({ videos }) => {
  const dummyFunc = (text: string) => {
    console.log(text);
  };

  return (
    <>
      {videos.map((video: Videos) => (
        <VideoCard
          key={video.movie_id}
          videoId={video.movie_id}
          url=""
          channelImage={video?.thumbnail?.url}
          title={video.movie_title}
          clickHandler={dummyFunc}
        />
      ))}
    </>
  );
};

export default VideoList;
