"use client"
import { useEffect, useState } from "react";
import VideoRow from "../../components/VideoRow";
import {client} from "../../libs/client"
import VideoList from "../../components/VideoList";
import Image from "next/image"

type Thumbnail = {
  url:string;
  width:number;
  height:number;
}

type Videos = {
id:string;
movie_id:string;
movie_title:string;
thumbnail:Thumbnail
}


export default function Home() {
const [videos,setVideos] = useState<Videos[]>([])

   useEffect(()=>{
    const getVideos = async () => {
    const data =  await client.get({ endpoint: "videos" })
    setVideos(data.contents)
    }
    getVideos()
   },[])


  return (
    <>
    <VideoList videos={videos}/>
     {/* <VideoRow id={videos[0]?.movie_id} url={videos[0]?.thumbnail?.url}/> */}
    </>
  );
}
