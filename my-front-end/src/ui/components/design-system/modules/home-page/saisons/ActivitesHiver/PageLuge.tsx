
import React from 'react';
import { Button } from '@/ui/components/design-system/buttons/button';
import { Typography } from '@/ui/components/design-system/typography/typography';
import Image from 'next/image';
import { Container } from '@/ui/components/container/container';


const LugePage : React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="relative pt-10 pb-10  overflow-hidden ">
      <Typography variant="h2" className="text-black text-center">
      🎉❄️ Luge Party : Amusez-vous avec Sport Days ! ⛄
    </Typography>
        <div className="flex items-center justify-between w-full ">
         
            <div className="relative rounded-lg mb-4 w-1/2 h-80">
              <Image
                src="/assets/images/ImagesHiver/luge2.jpg"
                alt="Image de Luge"
                fill
              
                objectFit="cover"
                className="rounded"
              />
            
            </div>
          <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
            <Typography variant="h3" className=" max-w-100" theme='primary'>
            ❄️ Glissez vers le Plaisir Pur
            </Typography>
            <Typography 
              variant="body-lg"
              theme="black"
              className="mx-w-xl"
              component="p"
            >
            Glissez vers le plaisir pur avec notre Luge Party ! Que vous soyez un enfant ou un adulte, nos pistes de luge vous promettent des moments de joie et d'excitation. Venez vivre des aventures glacées inoubliables avec Sport Days !
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
                src="/assets/images/ImagesHiver/luge3.jpg"
                alt="image de luge  "
            
                fill

                className=" rounded "

                />
                </div>
            </div>
            <div className="flex items-center justify-between w-full ">
         
         <div className="relative rounded-lg mb-4 w-1/2 h-80">
           <Image
             src="/assets/images/ImagesHiver/luge5.jpg"
             alt="Image de luge"
             fill
           
             objectFit="cover"
             className="rounded"
           />
         
         </div>
       <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
         <Typography variant="h3" className=" max-w-100" theme='primary'>
         🎿 Une Fête Gelée Inoubliable 
         </Typography>
         <Typography 
           variant="body-lg"
           theme="black"
           className="mx-w-xl"
           component="p"
         >
          Préparez-vous à une fête gelée inoubliable avec Sport Days ! Nos pistes de luge sont bien plus qu'un simple terrain de jeu. Elles sont le cœur battant d'une expérience hivernale où chaque virage, chaque descente et chaque moment est une invitation à s'émerveiller. Venez créer des souvenirs mémorables sur la neige avec notre Luge Party, où l'excitation rencontre la tranquillité de l'hiver et chaque participant devient le héros de sa propre aventure gelée !
         </Typography>
         </div>
     </div>    
        <div className="bg-gray-100 min-h-4 -h-screen">
                <div className="container mx-auto py-8 px-4">
                    <Typography variant='h3' className='mb-4 text-center'>
                    Prix des séances du Luge

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
                        <td className="border border-gray-300 py-2 px-4">15€</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="border border-gray-300 py-2 px-4">Forfait journée</td>
                        <td className="border border-gray-300 py-2 px-4">6 heures</td>
                        <td className="border border-gray-300 py-2 px-4">70€</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait semaine</td>
                        <td className="border border-gray-300 py-2 px-4">5 jours</td>
                        <td className="border border-gray-300 py-2 px-4">250€</td>
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

export default LugePage;
