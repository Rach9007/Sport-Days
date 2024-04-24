import Link from "next/link";
import { Container } from "../../container/container";
import { Box } from "../../Box/box";
import { Typography } from "../../design-system/typography/typography";
import { RegisterForm } from "../register/register.form";
import Image from "next/image";
import { LoginView } from "./login.view";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFilesType, RegisterFormFilesType } from "@/types/form";

export const LoginContiner = ()=> {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        handleSubmit,
       
        formState: {errors},
        register,
        setError,
        reset,

    } = useForm <LoginFormFilesType> ();
    
    const onSubmit: SubmitHandler<LoginFormFilesType> =   async (formData) => {
        setIsLoading(true);
        console.log('formData',formData);
    };
    return (

     <LoginView 
       form={{
        errors, 
        register,
        handleSubmit,
        onSubmit,
        isLoading,
    }}
 
     />
        
    );

};