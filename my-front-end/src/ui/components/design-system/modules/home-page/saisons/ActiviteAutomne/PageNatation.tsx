
import React from 'react';
import { Button } from '@/ui/components/design-system/buttons/button';
import { Typography } from '@/ui/components/design-system/typography/typography';
import Image from 'next/image';
import { Container } from '@/ui/components/container/container';


const   NatationPage : React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="relative pt-10 pb-10  overflow-hidden ">
      <Typography variant="h2" className="text-black text-center">
      🏊‍♂️ Natation: Plongez dans les Couleurs de la Saison avec Sport Days ! 🍁🌊
    </Typography>
        <div className="flex items-center justify-between w-full ">
         
            <div className="relative rounded-lg mb-4 w-1/2 h-80">
              <Image
                src="/assets/images/ImagesAutomne/natation1.jpg"
                alt="Image de natation"
                fill
              
                objectFit="cover"
                className="rounded"
              />
            
            </div>
          <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
            <Typography variant="h3" className=" max-w-100" theme='primary'>
            Douceur de l'Eau 🌊🌞
            </Typography>
            <Typography 
              variant="body-lg"
              theme="black"
              className="mx-w-xl"
              component="p"
            >
        Immergez-vous dans les eaux apaisantes de l'automne lors de notre session de natation en plein air ! Laissez-vous bercer par la douceur de l'eau tandis que les rayons chauds du soleil caressent votre peau. Plongez dans une expérience rafraîchissante qui ravive vos sens et vous transporte vers un état de calme absolu.
            </Typography>
            </div>
        </div>
        <div className="flex items-center justify-between">
                <div className="w-1/2 text-center max-w-3xl   space-y-9 mx-8 ">
                    <Typography variant="h3" className='max-w-100' theme="primary">
                     Énergie Revitalisante 🍁💦
                    </Typography>

                    <Typography 
                        variant="body-lg"
                        theme="black"
                        className='mx-w-xl'
                        component="p"
                    >
                Rechargez vos batteries avec une séance de natation dynamique au cœur de la saison automnale ! Laissez la fraîcheur de l'eau vous revitaliser et vous donner un coup de fouet d'énergie. Plongez, nagez et sentez les tensions de la journée fondre au fil des longueurs. L'automne est le moment idéal pour se ressourcer et se sentir revitalisé.
                    </Typography>
                    
                </div>
                <div className="relative rounded-lg w-1/2 h-80 ">
                <Image
                 src="/assets/images/ImagesAutomne/natation2.jpeg"
                 alt="Image de natation"
            
                fill

                className=" rounded "

                />
                </div>
            </div>
            <div className="flex items-center justify-between w-full ">
         
         <div className="relative rounded-lg mb-4 w-1/2 h-80">
           <Image
              src="/assets/images/ImagesAutomne/natation3.jpg"
              alt="Image de natation"
             fill
           
             objectFit="cover"
             className="rounded"
           />
         
         </div>
       <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
         <Typography variant="h3" className=" max-w-100" theme='primary'>
         Connectez-vous à la Nature 🍂🏞️
         </Typography>
         <Typography 
           variant="body-lg"
           theme="black"
           className="mx-w-xl"
           component="p"
         >
          Connectez-vous à la nature environnante tout en nageant dans nos eaux cristallines en automne ! Entourez-vous des couleurs éclatantes de la saison et ressentez la magie de l'automne vous envelopper pendant que vous nagez. Laissez-vous transporter par la beauté paisible des paysages environnants et vivez une expérience immersive qui éveille vos sens et apaise votre esprit.
         </Typography>
         </div>
     </div>    
        <div className="bg-gray-100 min-h-4 -h-screen">
                <div className="container mx-auto py-8 px-4">
                    <Typography variant='h3' className='mb-4 text-center'>
                    Prix des séances de la Natation

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
                        <td className="border border-gray-300 py-2 px-4">2 heure</td>
                        <td className="border border-gray-300 py-2 px-4">15€</td>
                        </tr>
                       
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait journée</td>
                        <td className="border border-gray-300 py-2 px-4">24 heures</td>
                        <td className="border border-gray-300 py-2 px-4">50€</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait semaine</td>
                        <td className="border border-gray-300 py-2 px-4">5 jours</td>
                        <td className="border border-gray-300 py-2 px-4">120€</td>
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

export default NatationPage;
