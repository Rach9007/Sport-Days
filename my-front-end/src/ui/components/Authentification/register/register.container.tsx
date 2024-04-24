import { RegisterView } from "./register.view";
import {SubmitHandler, useForm} from "react-hook-form";
import { RegisterFormFilesType } from './../../../../types/form';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/config/firebase-config"
import { firebaseCreateUser } from "@/api/authentication";

import React from 'react';
import {  toast } from 'react-toastify';
 
import { Button } from "../../design-system/buttons/button";
import { useToggle } from "@/hooks/use-toggle";
  





export const RegisterContainer = ()=> {


    const {value: isLoading, setValue:setIsLoading}= useToggle({initial: true});
    console.log(isLoading);
    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset,

    } = useForm <RegisterFormFilesType> ();

    const handleCreateUserAuthentication = async ({
        email,
        password}: 
        RegisterFormFilesType) => {
            const {error, data} = await firebaseCreateUser(email, password)
            if (error) {
                setIsLoading(false);
                toast.error(error.message);
                return;
            }

            toast.success('Bienvenue sur SportDays');
            setIsLoading(false);
            reset();
        };
    
    const onSubmit: SubmitHandler<RegisterFormFilesType> =   async (formData) => {
        setIsLoading(true);
        console.log('formData',formData);
        const { password} = formData;

        if (password.length <= 5) {
            setError("password",{
                type: "manual",
                message: "Ton mot de passe doit contenir au minimum 6 caracteres"
            });
            return;
        }
        handleCreateUserAuthentication(formData)

      
        {/*
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setIsLoading(false);
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsLoading(false);
                console.log(errorCode, errorMessage);
                // ..
            });
            */}
            
    };
      

    return (
        <>
         
         <RegisterView
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