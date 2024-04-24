import Link from "next/link";
import { Container } from "../../container/container";
import { Box } from "../../Box/box";
import { Typography } from "../../design-system/typography/typography";
import { RegisterForm } from "../register/register.form";
import Image from "next/image";
import { ForgetPasswordview } from "./forget-password.view";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFilesType } from "@/types/form";

export const ForgetPasswordContiner = ()=> {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        handleSubmit,
       
        formState: {errors},
        register,
        setError,
        reset,

    } = useForm <ForgetPasswordFormFilesType> ();
    
    const onSubmit: SubmitHandler<ForgetPasswordFormFilesType> =   async (formData) => {
        setIsLoading(true);
        console.log('formData',formData);
    };
    return (
        <>
        <ForgetPasswordview
         form={{
            errors, 
            register,
            handleSubmit,
            onSubmit,
            isLoading,
        }}
        />
        </>

    );

};