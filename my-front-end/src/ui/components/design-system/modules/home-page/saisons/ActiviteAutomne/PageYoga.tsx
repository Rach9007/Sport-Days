
import React from 'react';
import { Button } from '@/ui/components/design-system/buttons/button';
import { Typography } from '@/ui/components/design-system/typography/typography';
import Image from 'next/image';
import { Container } from '@/ui/components/container/container';


const YogaPage : React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="relative pt-10 pb-10  overflow-hidden ">
      <Typography variant="h2" className="text-black text-center">
      🧘‍♀️ Yoga en Automne : Éveillez votre Esprit !🌅
    </Typography>
        <div className="flex items-center justify-between w-full ">
         
            <div className="relative rounded-lg mb-4 w-1/2 h-80">
              <Image
                src="/assets/images/ImagesAutomne/yoga1.jpg"
                alt="Image de Yoga"
                fill
              
                objectFit="cover"
                className="rounded"
              />
            
            </div>
          <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
            <Typography variant="h3" className=" max-w-100" theme='primary'>
            Harmonie Naturelle 🌳🍃
            </Typography>
            <Typography 
              variant="body-lg"
              theme="black"
              className="mx-w-xl"
              component="p"
            >
          Connectez-vous avec la nature dans toute sa splendeur automnale lors de nos séances de yoga en plein air ! Imprégnez-vous des couleurs chaudes et des odeurs enivrantes de la saison alors que vous pratiquez vos asanas sous le ciel éclatant d'automne. Laissez le calme de la nature vous envelopper et vous guider vers un état de paix intérieure et d'harmonie totale.
            </Typography>
            </div>
        </div>
        <div className="flex items-center justify-between">
                <div className="w-1/2 text-center max-w-3xl   space-y-9 mx-8 ">
                    <Typography variant="h3" className='max-w-100' theme="primary">
                    Énergie Renouvelée 🌞🍂
                    </Typography>

                    <Typography 
                        variant="body-lg"
                        theme="black"
                        className='mx-w-xl'
                        component="p"
                    >
                  Retrouvez votre vitalité et votre énergie avec nos séances de yoga en automne ! Sous les rayons doux du soleil automnal, laissez-vous porter par le flux apaisant des postures de yoga qui revitalisent votre corps et votre esprit. Libérez le stress accumulé et rechargez vos batteries pour affronter la saison à venir avec sérénité et dynamisme.
                    </Typography>
                    
                </div>
                <div className="relative rounded-lg w-1/2 h-80 ">
                <Image
                src="/assets/images/ImagesAutomne/yoga2.jpg"
                alt="Image de Yoga"
            
                fill

                className=" rounded "

                />
                </div>
            </div>
            <div className="flex items-center justify-between w-full ">
         
         <div className="relative rounded-lg mb-4 w-1/2 h-80">
           <Image
             src="/assets/images/ImagesAutomne/yoga3.jpg"
             alt="Image de Yoga"
             fill
           
             objectFit="cover"
             className="rounded"
           />
         
         </div>
       <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
         <Typography variant="h3" className=" max-w-100" theme='primary'>
         Équilibre Intérieur 🍁🧘‍♂️
         </Typography>
         <Typography 
           variant="body-lg"
           theme="black"
           className="mx-w-xl"
           component="p"
         >
          Trouvez l'équilibre intérieur dans un monde en mouvement lors de nos séances de yoga automnales ! Enracinez-vous profondément dans le sol, comme les feuilles qui tombent des arbres, et laissez votre pratique de yoga vous guider vers un état de calme et de centrage. Trouvez la stabilité et la paix intérieure alors que vous explorez les merveilles de l'automne à travers votre pratique de yoga.
         </Typography>
         </div>
     </div>    
        <div className="bg-gray-100 min-h-4 -h-screen">
                <div className="container mx-auto py-8 px-4">
                    <Typography variant='h3' className='mb-4 text-center'>
                    Prix des séances du Yoga

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
                        <td className="border border-gray-300 py-2 px-4">35€</td>
                        </tr>
                       
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait semaine</td>
                        <td className="border border-gray-300 py-2 px-4">5 jours(1h/jour)</td>
                        <td className="border border-gray-300 py-2 px-4">150€</td>
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

export default YogaPage;
