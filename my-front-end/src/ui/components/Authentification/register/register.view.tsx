import Image from "next/image";
import { Container } from "../../container/container";
import { Box } from "../../Box/box";
import { Typography } from "../../design-system/typography/typography";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { FormsType } from "@/types/form";

interface Props {
    form: FormsType

}
export const RegisterView = ({form}: Props)=> {
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
                        Inscription   
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
                                <Link href='/Connexion/connect'>Connexion</Link>
                            </Typography>
                        </div>

                    </div>
                    <RegisterForm form={form}/>
                    
                </Box>
            </div>
        </Container>

    );

};