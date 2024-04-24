import clsx from "clsx";
import Image from "next/image";

interface Props {
    size?: "small"|"medium" |"large" ;
    src: string;
    alt: string;
   
}
export const Img =({
    size="medium",src,alt
}:Props) => {
    let sizeImg: string;

    switch (size) {
        case "small":
            sizeImg = "w-[24px] h-[24px]";
            break;
        case "medium":
            sizeImg = "w-[34px] h-[34px]";
            break;
        case "large":
            sizeImg = "w-[500px] h-[500px]";
        
            break;

        
    }
    return <div className={clsx(sizeImg, "bg-primary-200 rounded-full relative")}
    >
        
        <Image
        fill
        src={src}
        alt={alt}
       // width={50}
        //height={50}
        className="rounded-full object-cover object-center"
        />
        
    </div>
};