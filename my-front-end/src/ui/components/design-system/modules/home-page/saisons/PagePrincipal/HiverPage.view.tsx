import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/components/design-system/buttons/button";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { useRouter } from 'next/router';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





interface  ListActiviteInterface {
    imagePath: string,
    imageAlt: string,  
    tittle: string,
    baseUrl: string,
}

const activiteData: ListActiviteInterface[] = [
    {
        imagePath: "/assets/images/ImagesHiver/ski1.jpg",
        imageAlt: "ski",
        tittle: "SKI",
        baseUrl: "/Appel",
    
    },
    {
        imagePath: "/assets/images/ImagesHiver/snowboard1.jpg",
        imageAlt: "snowboard",
        tittle: "SNOWBOARD",
        baseUrl: "/AppelActiviteHiver/AppelSnowboard",
    
    },
    {
        imagePath: "/assets/images/ImagesHiver/motoneige1.jpg",
        imageAlt: "Motoneige",
        tittle: "MOTONEIGE",
        baseUrl: "/AppelActiviteHiver/AppelMotoneige",
    
    },
    {
      imagePath: "/assets/images/ImagesHiver/luge1.png",
      imageAlt: "luge",
      tittle: "LUGE",
      baseUrl: "/AppelActiviteHiver/AppelLuge",
  
  }
]
interface Props {
  id?: string;
}

export const HiverPageView = ({id} :Props) => {

    const router = useRouter();

   
    const settings = {
        
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      
      
    };

    
  
    const activiteListe = activiteData.map((activite) => (
      <div key={uuidv4()} className="flex flex-col items-center justify-center">
        <div className="relative rounded-lg w-[330px] h-[330px] mb-6 my-5">
          <Image
            src={activite.imagePath}
            alt={activite.imagePath}
            fill
            className="rounded"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
        <Typography
          variant="lead"
          component="h3"
          weight="medium"
          className="mb-2.5 text-center"
        >
          {activite.tittle}
        </Typography>
        <Button
          size="large"
          variant="accent"
          icon={{ icon: RiArrowRightDoubleFill }}
          iconPosition="right"
          baseUrl={activite.baseUrl}
          linkType="internal"
          action={() => {
            // Utilisez l'action personnalisée ici, par exemple, la redirection vers baseUrl
            window.location.href = activite.baseUrl;
        }}
        >
          Découvrir
        </Button>
        </div>
      </div>
    ));
  
    return (
      <div className="bg-[url('/assets/images/Bg/bg1.jpg')]" id="hiver">
        <Container className="gap-24 py-10 space-y-0 ">
          <Typography variant="h3" className="text-center" theme="black">
          ❄️⛄ Sport Days : Plaisirs Givrés de l'Hiver ! ❄️🎿
          </Typography>
  
          <div className="relative ">
            <Slider {...settings} className="flex">
              {activiteListe}
            </Slider>
          </div>
        </Container>
      </div>
    );
  };
  