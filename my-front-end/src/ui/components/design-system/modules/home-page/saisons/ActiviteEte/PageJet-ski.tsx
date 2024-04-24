// pages/ski.tsx

import React from 'react';
import { Button } from '@/ui/components/design-system/buttons/button';
import { Typography } from '@/ui/components/design-system/typography/typography';
import Image from 'next/image';
import { Container } from '@/ui/components/container/container';


const JetSkiPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="relative pt-10 pb-10  overflow-hidden ">
      <Typography variant="h2" className="text-black text-center">
      🌊💥 Plongez dans l'Excitation Aquatique avec Sport Days 🏄‍♂️🚤
    </Typography>
        <div className="flex items-center justify-between w-full ">
         
            <div className="relative rounded-lg mb-4 w-1/2 h-80">
              <Image
                src="/assets/images/ImagesEte/jet-ski4.jpg"
                alt="Image de ski"
                fill
              
                objectFit="cover"
                className="rounded"
              />
            
            </div>
          <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
            <Typography variant="h3" className=" max-w-100" theme='primary'>
            🌊 Jet-Ski Extrême : Vibrez au Rythme des Vagues ! 🚤
            </Typography>
            <Typography 
              variant="body-lg"
              theme="black"
              className="mx-w-xl"
              component="p"
            >
             Plongez dans une aventure aquatique remplie d'adrénaline avec nos Sports Days en jet-ski ! Que vous soyez un passionné de vitesse ou un débutant cherchant à repousser ses limites, nos excursions en jet-ski vous promettent des moments palpitants. Prenez le contrôle, défiez les vagues et ressentez l'excitation pure de naviguer sur les eaux cristallines avec Sport Days !
            </Typography>
            </div>
        </div>
        <div className="flex items-center justify-between">
                <div className="w-1/2 text-center max-w-3xl   space-y-9 mx-8 ">
                    <Typography variant="h3" className='max-w-100' theme="primary">
                    L'Adrénaline à l'État Pur ! 🌊
                    </Typography>

                    <Typography 
                        variant="body-lg"
                        theme="black"
                        className='mx-w-xl'
                        component="p"
                    >
                    Êtes-vous prêt à embrasser le frisson de la vitesse sur l'eau ? Avec Sport Days, chaque sortie en jet-ski devient une aventure inoubliable ! Que vous recherchiez des vagues géantes ou des virages serrés, nos Sports Days en jet-ski sont conçus pour vous offrir une dose d'adrénaline pure. Laissez-vous emporter par la folie des vagues et vivez des moments de pur plaisir et d'excitation avec Sport Days !
                    </Typography>
                    
                </div>
                <div className="relative rounded-lg w-1/2 h-80 ">
                <Image
                src="/assets/images//ImagesEte/jet-ski1.jpg"
                alt="mon image"
            
                fill

                className=" rounded "

                />
                </div>
            </div>
            <div className="flex items-center justify-between w-full ">
         
         <div className="relative rounded-lg mb-4 w-1/2 h-80">
           <Image
             src="/assets/images//ImagesEte/jet-ski5.jpg"
             alt="Image de ski"
             fill
           
             objectFit="cover"
             className="rounded"
           />
         
         </div>
       <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
         <Typography variant="h3" className=" max-w-100" theme='primary'>
         🎉 Jet-Ski Party 
         </Typography>
         <Typography 
           variant="body-lg"
           theme="black"
           className="mx-w-xl"
           component="p"
         >
           Préparez-vous à une fête aquatique comme jamais auparavant avec nos Sports Days en jet-ski ! Que vous soyez en famille, entre amis ou en solo, nos excursions en jet-ski sont l'occasion parfaite de créer des souvenirs mémorables. Éclaboussez-vous de fun, défiez vos amis et plongez dans l'aventure avec Sport Days !
         </Typography>
         </div>
     </div>    
        <div className="bg-gray-100 min-h-4 -h-screen">
                <div className="container mx-auto py-8 px-4">
                    <Typography variant='h3' className='mb-4 text-center'>
                    Prix des séances du JET-SKI

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
                        <td className="border border-gray-300 py-2 px-4">70€</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="border border-gray-300 py-2 px-4">Forfait journée</td>
                        <td className="border border-gray-300 py-2 px-4">6 heures</td>
                        <td className="border border-gray-300 py-2 px-4">320€</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait semaine</td>
                        <td className="border border-gray-300 py-2 px-4">5 jours</td>
                        <td className="border border-gray-300 py-2 px-4">1300€</td>
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

export default JetSkiPage;
