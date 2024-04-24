import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/components/design-system/typography/typography"

import Image from "next/image"
import { BiFullscreen } from "react-icons/bi";

export const HeroTopView =() => {
    return (
        <div className="w-full">
            <Image
                src='/assets/images/ski0.jpg'
                alt="Un skieur en pleine exercice "
                width={1780}
                height={50}
               
                className="w-full h-auto"
            />
        
        
        </div>
        
        
    );
}
