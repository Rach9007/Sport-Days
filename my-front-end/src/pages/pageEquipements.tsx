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
        imagePath: "/assets/images/Equipements/image1.jpg",
        imageAlt: "image1",
        tittle: "jet SKI",
        baseUrl: "/AppelReservation",
    
    },
    {
        imagePath: "/assets/images/Equipements/Image2.jpg",
        imageAlt: "SKi",
        tittle: "SKi",
        baseUrl: "/AppelReservation",
    
    },
    {
        imagePath: "/assets/images/Equipements/Image3.jpg",
        imageAlt: "Voilier",
        tittle: "Voilier",
        baseUrl: "/#",
    
    },
    {
      imagePath: "/assets/images/Equipements/image4.jpg",
      imageAlt: "Velo",
      tittle: "Velo",
      baseUrl: "/#",
  
  },
  {
    imagePath: "/assets/images/Equipements/image5.jpg",
    imageAlt: "Surf",
    tittle: "Surf",
    baseUrl: "/#",

},
{
  imagePath: "/assets/images/Equipements/image6.jpg",
  imageAlt: "Bateau",
  tittle: "Bateau",
  baseUrl: "/#",

}
]

export const Eq = () => {

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
           
            window.location.href = activite.baseUrl;
        }}
        >
          Reserver
        </Button>
        </div>
      </div>
    ));
  
    return (
      <div className="bg-black]">
        <Container className="gap-24 py-10 space-y-0 ">
          <Typography variant="h3" className="text-center" theme="black">
          
"Équipez-vous pour toutes saisons : printemps, été, automne, hiver - Aventurez-vous sans limites !"
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
  
  export default Eq;
  