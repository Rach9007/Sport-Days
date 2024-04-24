// pages/ski.tsx

import React from 'react';
import { Button } from '@/ui/components/design-system/buttons/button';
import { Typography } from '@/ui/components/design-system/typography/typography';
import Image from 'next/image';
import { Container } from '@/ui/components/container/container';


const MotoneigePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="relative pt-10 pb-10  overflow-hidden ">
      <Typography variant="h2" className="text-black text-center">
      🏔️❄️ Motoneige Extrême : Glissez !
    </Typography>
        <div className="flex items-center justify-between w-full ">
         
            <div className="relative rounded-lg mb-4 w-1/2 h-80">
              <Image
                src="/assets/images/ImagesHiver/motoneige3.jpeg"
                alt="Image de motoneige"
                fill
              
                objectFit="cover"
                className="rounded"
              />
            
            </div>
          <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
            <Typography variant="h3" className=" max-w-100" theme='primary'>
            Aventure Hivernale en Motoneige avec Sport Days ! ❄️
            </Typography>
            <Typography 
              variant="body-lg"
              theme="black"
              className="mx-w-xl"
              component="p"
            >
             Plongez dans un monde hivernal magique avec nos Sports Days en motoneige ! Que vous soyez un débutant enthousiaste ou un passionné de sensations fortes, nos excursions en motoneige vous promettent une expérience inoubliable. Dévalez les sentiers enneigés, ressentez le frisson de la vitesse et découvrez la beauté des paysages enneigés avec Sport Days !
            </Typography>
            </div>
        </div>
        <div className="flex items-center justify-between">
                <div className="w-1/2 text-center max-w-3xl   space-y-9 mx-8 ">
                    <Typography variant="h3" className='max-w-100' theme="primary">
                    🌨️ Profitez de l'Émotion de la Vitesse Pure
                    </Typography>

                    <Typography 
                        variant="body-lg"
                        theme="black"
                        className='mx-w-xl'
                        component="p"
                    >
                    Plongez dans l'émotion de la vitesse pure avec Sport Days ! Nos excursions en motoneige vous permettent de ressentir la puissance de la nature alors que vous traversez des étendues enneigées à une vitesse vertigineuse, offrant une expérience palpitante pour les amateurs de sensations fortes.
                    </Typography>
                    
                </div>
                <div className="relative rounded-lg w-1/2 h-80 ">
                <Image
                src="/assets/images/ImagesHiver/motoneige6.jpg"
                alt="mon image"
            
                fill

                className=" rounded "

                />
                </div>
            </div>
            <div className="flex items-center justify-between w-full ">
         
         <div className="relative rounded-lg mb-4 w-1/2 h-80">
           <Image
             src="/assets/images/ImagesHiver/motoneige4.jpg"
             alt="Image de ski"
             fill
           
             objectFit="cover"
             className="rounded"
           />
         
         </div>
       <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
         <Typography variant="h3" className=" max-w-100" theme='primary'>
         🎉🏔️ Motoneige Party 
         </Typography>
         <Typography 
           variant="body-lg"
           theme="black"
           className="mx-w-xl"
           component="p"
         >
          Préparez-vous à une fête hivernale sensationnelle avec notre Motoneige Party ! Rejoignez-nous pour une aventure palpitante sur les pistes enneigées, où l'ambiance festive rencontre l'excitation de la motoneige. Que vous soyez en famille, entre amis ou en solo, notre Motoneige Party vous promet des moments de pur plaisir et de divertissement au cœur de la nature hivernale. Avec Sport Days, chaque descente devient une célébration de la neige et de l'amusement ! 🎉❄️🏔️
         </Typography>
         </div>
     </div>    
        <div className="bg-gray-100 min-h-4 -h-screen">
                <div className="container mx-auto py-8 px-4">
                    <Typography variant='h3' className='mb-4 text-center'>
                    Prix des séances du Motoneige

                    </Typography>
                    <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-primary-200">
                        <th className="border border-gray-300 py-2 px-4">Type de séance</th>
                        <th className="border border-gray-300 py-2 px-4">Durée</th>
                        <th className="border border-gray-300 py-2 px-4">Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Séance individuelle</td>
                        <td className="border border-gray-300 py-2 px-4">1 heure</td>
                        <td className="border border-gray-300 py-2 px-4">80€</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="border border-gray-300 py-2 px-4">Forfait journée</td>
                        <td className="border border-gray-300 py-2 px-4">6 heures</td>
                        <td className="border border-gray-300 py-2 px-4">170€</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait semaine</td>
                        <td className="border border-gray-300 py-2 px-4">5 jours</td>
                        <td className="border border-gray-300 py-2 px-4">700€</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
   
        <div className="mt-8 text-center">
          <Typography variant="h3" className="mb-4">
            Réservez dès maintenant !
          </Typography>
          <Button baseUrl="/AppelReservation" size="large" variant="secondary">
            Réserver
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default MotoneigePage;
