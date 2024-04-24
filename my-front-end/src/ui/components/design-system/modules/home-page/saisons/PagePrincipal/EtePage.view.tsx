import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/components/design-system/buttons/button";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
import { RiArrowRightDoubleFill } from "react-icons/ri";

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
        imagePath: "/assets/images/ImagesEte/jet-ski.jpg",
        imageAlt: "image de jet-ski",
        tittle: "JET-SKI",
        baseUrl: "/AppelActiviteEte/AppelJetSki",
    
    },
    {
        imagePath: "/assets/images/ImagesEte/surf1.jpeg",
        imageAlt: "surf",
        tittle: "SURF",
        baseUrl:"/AppelActiviteEte/AppelSurf",
    
    },
    {
        imagePath: "/assets/images/ImagesEte/velo1.jpg",
        imageAlt: "velo",
        tittle: "VELO",
        baseUrl:"/AppelActiviteEte/AppelVelo",
    
    },
    {
      imagePath: "/assets/images/ImagesEte/randonne1.jpeg",
      imageAlt: "velo",
      tittle: "RANDONNE ",
      baseUrl:"/AppelActiviteEte/AppelRandonne",
  
  }
]

interface Props {
  id?: string;
}

export const EtePageView1 = ({id} :Props) => {

   
    const settings = {
        
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      
      
    };

    
  
    const activiteListe = activiteData.map((activite) => (
      <div key={uuidv4()} className="flex flex-col items-center justify-center" >
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
      <div className="bg-white-100" id="ete" >
        <Container className="gap-24 py-10 space-y-0 ">
          <Typography variant="h3" className="text-center" theme="black">
          🌞☀️ Sport Days : Éclatez-vous au Soleil ! 🏖️🌊
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
  