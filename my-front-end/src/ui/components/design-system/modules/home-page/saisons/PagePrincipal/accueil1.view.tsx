import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/components/design-system/buttons/button";
import { Typography } from "@/ui/components/design-system/typography/typography";
import Image from "next/image";
interface Props {
    id?: string;
  }

export const Accueil1 = ({id} :Props) => {
    return (
        <div className="bg-blue-100  pt-10  bg-[url('/assets/images/hiver3.jpg')] " id="acceuil">
        <Container className="relative pt-10 pb-10  overflow-hidden ">
            
            <div className="flex items-center justify-between">
                <div className="w-full max-w-2xl space-y-9 ">
                    <Typography variant="h1" className='max-w-lg' theme="white">
                        Rejoins l'aventure Sport Days !
                    </Typography>

                    <Typography 
                        variant="body-lg"
                        theme="black"
                        className='mx-w-xl'
                        component="p"
                    >
                    Préparez-vous à vivre l'excitation des montagnes et à 
                    ressentir l'adrénaline du ski comme jamais auparavant ! 🏂
                    Des pistes palpitantes pour tous les niveaux, des débutants aux experts.
                    </Typography>
                    <div className="space-x-5 pt-25">
                        <Button baseUrl="/Appel">Découvrir</Button>
                        <Button baseUrl="" variant="secondary">Réserver</Button>
                    </div>
                </div>
                <div className="relative object-cover w-full h-96">
                <Image
                src="/assets/images/hiver3.jpg"
                alt="mon image"
            
                fill
                className=" top-0 right-0 z-0 "

                />
                </div>
            </div>
            
        </Container>
        </div>

    );
};