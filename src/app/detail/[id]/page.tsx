import React from "react";


type VideoDetail = {
  videoId:string;
  title:string;
  channel:string;
  channelImg:string;  
}

const Detail:React.FC<VideoDetail> = ({ videoId = "SPaa9JWIPoA", title, channel, channelImg}) => {
  return (
    <div className="flex">
    <div style={{flex:0.6}}>
      {/* <div className="leftScreen"> */}
        <div className="m-[25px] w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="Detail__videoInfo">
            <h1 className="Detail__title">{title}</h1>
          </div>
          <hr />
          <div className="Detail__channelInfo">
            <img className="Detail__channelIcon" src={channelImg} />
            <p>
              <strong>{channel}</strong>
            </p>
          {/* </div> */}
        </div>
      </div>
      <div className="rightScreen">
        {/* <VideoColumn /> */}
      </div>
    </div>
    </div>
  );
}

export default Detail;