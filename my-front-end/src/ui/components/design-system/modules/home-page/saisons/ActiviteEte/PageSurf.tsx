
import React from 'react';
import { Button } from '@/ui/components/design-system/buttons/button';
import { Typography } from '@/ui/components/design-system/typography/typography';
import Image from 'next/image';
import { Container } from '@/ui/components/container/container';


const SurfPage : React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="relative pt-10 pb-10  overflow-hidden ">
      <Typography variant="h2" className="text-black text-center">
      🏄‍♂️Surf Extrême : Vivez l'Adrénaline avec Sport Days !
    </Typography>
        <div className="flex items-center justify-between w-full ">
         
            <div className="relative rounded-lg mb-4 w-1/2 h-80">
              <Image
                src="/assets/images/ImagesEte/surf2.jpg"
                alt="Image de Luge"
                fill
              
                objectFit="cover"
                className="rounded"
              />
            
            </div>
          <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
            <Typography variant="h3" className=" max-w-100" theme='primary'>
            🌴 Découvrez l'Esprit du Surf
            </Typography>
            <Typography 
              variant="body-lg"
              theme="black"
              className="mx-w-xl"
              component="p"
            >
            Explorez l'esprit du surf avec Sport Days ! Nos leçons de surf sont conçues pour vous initier à cette culture emblématique et vous faire vivre des sensations uniques sur les vagues. Plongez dans l'océan, apprenez les techniques de base et laissez-vous emporter par la passion du surf. Que vous soyez un novice ou un passionné, nos instructeurs qualifiés sont là pour vous guider à chaque étape de votre voyage aquatique.
            </Typography>
            </div>
        </div>
        <div className="flex items-center justify-between">
                <div className="w-1/2 text-center max-w-3xl   space-y-9 mx-8 ">
                    <Typography variant="h3" className='max-w-100' theme="primary">
                    🌊 Des Vagues pour Tous les Niveaux
                    </Typography>

                    <Typography 
                        variant="body-lg"
                        theme="black"
                        className='mx-w-xl'
                        component="p"
                    >
                    Venez défier les vagues avec Sport Days ! Nos sessions de surf sont adaptées à tous les niveaux, des débutants cherchant à apprendre les bases aux surfeurs expérimentés désireux de perfectionner leur technique. Avec un accès à une variété de spots de surf, vous trouverez toujours des vagues adaptées à votre niveau de compétence. Que vous soyez à la recherche de sensations fortes ou simplement de moments de détente sur l'eau, nous avons tout ce qu'il vous faut pour une expérience de surf inoubliable.
                    </Typography>
                    
                </div>
                <div className="relative rounded-lg w-1/2 h-80 ">
                <Image
                src="/assets/images/ImagesEte/surf3.jpg"
                alt="image de luge  "
            
                fill

                className=" rounded "

                />
                </div>
            </div>
            <div className="flex items-center justify-between w-full ">
         
         <div className="relative rounded-lg mb-4 w-1/2 h-80">
           <Image
             src="/assets/images/ImagesEte/surf4.jpg"
             alt="Image de luge"
             fill
           
             objectFit="cover"
             className="rounded"
           />
         
         </div>
       <div className=" w-1/2 text-center max-w-3xl   space-y-9 mx-8">
         <Typography variant="h3" className=" max-w-100" theme='primary'>
         Éclatez-vous sur les Vagues avec Sport Days ! 🌊
         </Typography>
         <Typography 
           variant="body-lg"
           theme="black"
           className="mx-w-xl"
           component="p"
         >
          Préparez-vous à une fête sur les vagues avec notre Surf Party ! Rejoignez-nous pour une journée d'excitation et de plaisir sous le soleil, où vous pourrez défier les vagues et vous amuser avec d'autres passionnés de surf. Que vous soyez débutant ou surfeur chevronné, nos sessions de surf offrent une expérience inoubliable sur les meilleurs spots de la région. Venez faire la fête sur l'océan avec Sport Days ! 🏄‍♀️
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
                        <td className="border border-gray-300 py-2 px-4">20€</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="border border-gray-300 py-2 px-4">Forfait journée</td>
                        <td className="border border-gray-300 py-2 px-4">6 heures</td>
                        <td className="border border-gray-300 py-2 px-4">90€</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 py-2 px-4">Forfait semaine</td>
                        <td className="border border-gray-300 py-2 px-4">5 jours</td>
                        <td className="border border-gray-300 py-2 px-4">200€</td>
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

export default SurfPage;
