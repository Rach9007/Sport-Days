
import React from 'react';
import { Button } from '@/ui/components/design-system/buttons/button';
import { Typography } from '@/ui/components/design-system/typography/typography';
import Image from 'next/image';
import { Container } from '@/ui/components/container/container';


const BouePage : React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="relative pt-10 pb-10  overflow-hidden ">
      <Typography variant="h2" className="text-black text-center">
      🌼🧖‍♂️ Bain de Boue Printanier : Plongez dans la Douceur de la Saison avec Sport Days ! 💆‍♀️🌿
    </Typography>
        <div className="flex items-center justify-between w-full ">
         
            <div className="relative rounded-lg mb-4 w-1/2 h-80">
              <Image
                src="/assets/images/ImagesPrintemps/boue1.jpg"
                alt="Image de Boue"
                fill
              
                objectFit="cover"
                className="rounded"
              />
            
            </div>
          <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
            <Typography variant="h3" className=" max-w-100" theme='primary'>
            Sensations Revigorantes 🌞🌀
            </Typography>
            <Typography 
              variant="body-lg"
              theme="black"
              className="mx-w-xl"
              component="p"
            >
          Plongez dans une expérience revigorante qui éveille vos sens ! Notre bain de boue printanier vous offre une immersion totale dans la douce chaleur du printemps. Laissez la boue naturelle revitaliser votre peau et réveiller vos sens, vous laissant rafraîchi et renouvelé.
            </Typography>
            </div>
        </div>
        <div className="flex items-center justify-between">
                <div className="w-1/2 text-center max-w-3xl   space-y-9 mx-8 ">
                    <Typography variant="h3" className='max-w-100' theme="primary">
                    Plaisirs de la Détente 🛁🌸
                    </Typography>

                    <Typography 
                        variant="body-lg"
                        theme="black"
                        className='mx-w-xl'
                        component="p"
                    >
                   Laissez-vous aller à la détente totale dans notre bain de boue printanier ! Entouré par les senteurs délicates des fleurs en éclosion, laissez vos soucis s'évaporer dans l'air. Plongez dans la douceur de la saison alors que vous vous détendez dans un cocon de calme et de tranquillité.
                    </Typography>
                    
                </div>
                <div className="relative rounded-lg w-1/2 h-80 ">
                <Image
                src="/assets/images/ImagesPrintemps/boue4.jpg"
                alt="Image de Boue"
            
                fill

                className=" rounded "

                />
                </div>
            </div>
            <div className="flex items-center justify-between w-full ">
         
         <div className="relative rounded-lg mb-4 w-1/2 h-80">
           <Image
             src="/assets/images/ImagesPrintemps/boue3.jpg"
             alt="Image de Boue"
             fill
           
             objectFit="cover"
             className="rounded"
           />
         
         </div>
       <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
         <Typography variant="h3" className=" max-w-100" theme='primary'>
         Évasion Naturelle 🍃🌊
         </Typography>
         <Typography 
           variant="body-lg"
           theme="black"
           className="mx-w-xl"
           component="p"
         >
          Échappez à l'agitation de la vie quotidienne et plongez dans une oasis de bien-être naturel ! Notre bain de boue printanier vous emmène dans un voyage de guérison et de régénération au cœur de la nature. Avec l'eau tiède caressant votre peau et la douce brise printanière vous enveloppant, chaque moment est une évasion inoubliable.
         </Typography>
         </div>
     </div>    
        <div className="bg-gray-100 min-h-4 -h-screen">
                <div className="container mx-auto py-8 px-4">
                    <Typography variant='h3' className='mb-4 text-center'>
                    Prix des séances du Bain de boue

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
                        <td className="border border-gray-300 py-2 px-4">10€</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="border border-gray-300 py-2 px-4">Forfait journée</td>
                        <td className="border border-gray-300 py-2 px-4">3 heures</td>
                        <td className="border border-gray-300 py-2 px-4">25€</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait semaine</td>
                        <td className="border border-gray-300 py-2 px-4">5 jours</td>
                        <td className="border border-gray-300 py-2 px-4">80€</td>
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

export default BouePage;
