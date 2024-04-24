import Link from "next/link";
import { Container } from "../../container/container";
import { Box } from "../../Box/box";
import { Typography } from "../../design-system/typography/typography";
import { RegisterForm } from "../register/register.form";
import Image from "next/image";
import { FormsType } from "@/types/form";
import { LoginFormFilesType } from './../../../../types/form';
import { LoginForm } from "./login.form";

interface Props {
    form: FormsType

}
export const LoginView = ({form}: Props)=> {
    return (
        <Container className="grid grid-cols-2  gap-20 mb-32"> 
            
        <div>
            <div className="relative w-full h-[531px] flex items-center">
                <Image
                fill
                src='/assets/images/Avatar/avat.avif'
                alt='image'
                className="object-scale-down"

                />

            </div>
        </div>
        <div className="flex items-center">
            <Box padding_x="px-5" >
                <div className="flex items-center justify-between">
                    <Typography>
                    Connexion
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Typography
                        variant="caption3"
                        component="span"
                        >
                            Tu as déja un compte ?
                        </Typography>
                        
                        <Typography
                        variant="caption3"
                        component="span"
                        theme="primary"
                        >
                            <Link href='/Connexion/inscription'>S'inscrire</Link>
                        </Typography>
                    </div>

                </div>
                
                <LoginForm form={form}/>
                <Typography variant="caption3" theme="primary">
                    <Link 
                    href='/Connexion/mots-pass-perdu'
                    className="flex justify-center">
                        Mots de passe perdu ?

                    </Link>
                </Typography>
            </Box>
        </div>
    </Container>
        
    );

};