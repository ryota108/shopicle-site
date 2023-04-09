import VideoCard from "./VideoCard"
import VideoList from "../components/VideoList";

type VideoInfo = {
  id:string;
  url:string;
}



const VideoRow:React.FC<VideoInfo> =({id,url}) => {
  
    const func = (id:string) => {
        console.log(id)
    }

    return (
        <>
       <div className="flex overflow-scroll w-11/12 ml-[4%] mt-[5%]">
      
       <VideoCard
        channelImage="#"
        videoId ={id}
        url={url}
        clickHandler={func}
      />
       <VideoCard
        channelImage="#"
        videoId ={id}
        url={url}
        clickHandler={func}
      />
       <VideoCard
        channelImage="#"
        videoId ={id}
        url={url}
        clickHandler={func}
      />
       <VideoCard
        channelImage="#"
        videoId ={id}
        url={url}
        clickHandler={func}
      />
       <VideoCard
        channelImage="#"
        videoId ={id}
        url={url}
        clickHandler={func}
      />
      <VideoCard
        channelImage="#"
        videoId ={id}
        url={url}
        clickHandler={func}
      />
      <VideoCard
        channelImage="#"
        videoId ={id}
        url={url}
        clickHandler={func}
      />
       </div>
        </>
    )
}

export default VideoRow