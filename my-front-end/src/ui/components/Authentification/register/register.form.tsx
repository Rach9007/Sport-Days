import { FormsType } from "@/types/form";
import { Button } from "../../design-system/buttons/button";
import { Input } from "../../Form/input";

interface Props {
    form: FormsType

}
export const RegisterForm = ({form}: Props) => {
    const {errors,
       
        register,
         handleSubmit,
        onSubmit,
        isLoading,}= form;

    return ( 
    
     <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
        <Input 
        isLoading={isLoading} 
        placeholder={"myemail@gmail.com"} 
        register={register} 
        errors={errors} 
        type="email"
        errorMsg="Tu dois renseigner ce champ"
        id="email" 
        
              />
        <Input 
        isLoading={isLoading} 
        placeholder={"Mots de passe"} 
        register={register} 
        errors={errors} 
        type="password"
        errorMsg="Tu dois renseigner ce champ"
        id="password" 
        
              />
         <Button isLoading={isLoading} type="submit" fullWith>
         S'inscrire
        </Button>
      
    </form>
    
    );
};