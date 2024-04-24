import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/components/design-system/buttons/button";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
import { RiArrowRightDoubleFill } from "react-icons/ri";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



interface Props {
  id?: string;
}

interface  ListActiviteInterface {
    imagePath: string,
    imageAlt: string,  
    tittle: string,
    baseUrl: string,
}

const activiteData: ListActiviteInterface[] = [
    {
        imagePath: "/assets/images/ImagesPrintemps/canoe2.jpg",
        imageAlt: "image de canoe",
        tittle: "CANOE KAYAK",
        baseUrl: "/AppelActivitePrintemps/AppelCanoe",
    
    },
    {
        imagePath: "/assets/images/ImagesPrintemps/boue1.jpg",
        imageAlt: "BAIN DE BOUE",
        tittle: "BAIN DE BOUE",
        baseUrl:"/AppelActivitePrintemps/AppelBoue",
    
    },
    {
        imagePath: "/assets/images/ImagesPrintemps/cheval1.jpg",
        imageAlt: "CHEVAL",
        tittle: "CHEVAL",
        baseUrl:"/AppelActivitePrintemps/AppelCheval",
    
    }
    
]

export const PrintempsView = ({id} :Props) => {

   
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
            objectFit="cover"
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
        >
          Découvrir
        </Button>
        </div>
      </div>
    ));
  
    return (
      <div className="bg-white-100" id="printemps">
        <Container className="gap-24 py-10 space-y-0 ">
          <Typography variant="h3" className="text-center" theme="black">
          🌸🌷 Sport Days : Éveil Printanier des Sens ! 🌱🌸
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
  