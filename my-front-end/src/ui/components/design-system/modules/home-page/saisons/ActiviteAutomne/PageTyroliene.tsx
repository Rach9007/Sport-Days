
import React from 'react';
import { Button } from '@/ui/components/design-system/buttons/button';
import { Typography } from '@/ui/components/design-system/typography/typography';
import Image from 'next/image';
import { Container } from '@/ui/components/container/container';


const TyroliennePage : React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="relative pt-10 pb-10  overflow-hidden ">
      <Typography variant="h2" className="text-black text-center">
      🍂🌲 Tyrolienne en Automne : Envolez-vous vers l'Aventure ! 🍁🌄
    </Typography>
        <div className="flex items-center justify-between w-full ">
         
            <div className="relative rounded-lg mb-4 w-1/2 h-80">
              <Image
                src="/assets/images/ImagesAutomne/tyroliene1.jpg"
                alt="Image de tyrolienne"
                fill
              
                objectFit="cover"
                className="rounded"
              />
            
            </div>
          <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
            <Typography variant="h3" className=" max-w-100" theme='primary'>
            Évasion Naturelle 🌳🌞
            </Typography>
            <Typography 
              variant="body-lg"
              theme="black"
              className="mx-w-xl"
              component="p"
            >
         Préparez-vous à une évasion en plein air inoubliable lors de notre expérience de tyrolienne automnale ! Laissez-vous porter par la brise fraîche et parfumée des feuilles tombantes, alors que vous survolez les paysages magnifiques de l'automne. Ressentez l'énergie revitalisante de la nature qui s'éveille à la vie sous vos pieds et laissez-vous transporter par l'euphorie de la liberté en plein air.
            </Typography>
            </div>
        </div>
        <div className="flex items-center justify-between">
                <div className="w-1/2 text-center max-w-3xl   space-y-9 mx-8 ">
                    <Typography variant="h3" className='max-w-100' theme="primary">
                    Adrénaline Pure 🍁💨
                    </Typography>

                    <Typography 
                        variant="body-lg"
                        theme="black"
                        className='mx-w-xl'
                        component="p"
                    >
                Préparez-vous à une montée d'adrénaline palpitante avec notre descente en tyrolienne à travers les couleurs flamboyantes de l'automne ! Dévalez les câbles à toute vitesse, ressentez le vent fouetter votre visage et vivez des moments d'excitation pure alors que vous survolez les vallées et les forêts colorées. Que vous soyez un amateur de sensations fortes ou un novice en tyrolienne, chaque descente vous garantit des frissons inoubliables.
                    </Typography>
                    
                </div>
                <div className="relative rounded-lg w-1/2 h-80 ">
                <Image
                 src="/assets/images/ImagesAutomne/tyroliene2.jpg"
                 alt="Image de tyrolienne"
            
                fill

                className=" rounded "

                />
                </div>
            </div>
            <div className="flex items-center justify-between w-full ">
         
         <div className="relative rounded-lg mb-4 w-1/2 h-80">
           <Image
              src="/assets/images/ImagesAutomne/tyroliene3.jpg"
              alt="Image de tyrolienne"
             fill
           
             objectFit="cover"
             className="rounded"
           />
         
         </div>
       <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
         <Typography variant="h3" className=" max-w-100" theme='primary'>
         Vue Panoramique 🏞️🍂
         </Typography>
         <Typography 
           variant="body-lg"
           theme="black"
           className="mx-w-xl"
           component="p"
         >
          Offrez-vous une vue panoramique époustouflante sur les splendeurs de l'automne lors de notre expérience de tyrolienne ! Envolé au-dessus des arbres aux couleurs chatoyantes et des rivières miroitantes, profitez d'une perspective unique sur la beauté spectaculaire de la saison. Laissez-vous émerveiller par les paysages à couper le souffle qui défilent sous vos pieds, et créez des souvenirs inoubliables en plein air.
         </Typography>
         </div>
     </div>    
        <div className="bg-gray-100 min-h-4 -h-screen">
                <div className="container mx-auto py-8 px-4">
                    <Typography variant='h3' className='mb-4 text-center'>
                    Prix des séances de la Tyrolienne

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
                        <td className="border border-gray-300 py-2 px-4">18€</td>
                        </tr>
                       
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait journée</td>
                        <td className="border border-gray-300 py-2 px-4">10 heures</td>
                        <td className="border border-gray-300 py-2 px-4">100€</td>
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

export default TyroliennePage;
