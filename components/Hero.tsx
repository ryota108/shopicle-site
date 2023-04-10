import Image from "next/image";
import dummyImage from "../assets/dummy.png"

const Hero:React.FC = () =>{
    return (
        <>
        <div className="w-full bg-white h-96 shadow-lg border-b-black">
            <Image src = {dummyImage} width={100} height={100} className="blur-3xl w-full h-full"/>
            <div className="">
                
            </div>
        </div>
        </>
    )
}

export default Hero;