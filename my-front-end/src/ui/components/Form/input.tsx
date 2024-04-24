import clsx from "clsx";
import { Typography } from "../design-system/typography/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "email" | "password" | "text";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;

}


export const Input = ({
    isLoading,
   placeholder,
    type= "text",
    register,
    errors,
    errorMsg= "Tu dois renseigner ce champ",
    id,
    required= true,
    isAutocompleted = false,
}: Props) => {
    console.log("errors",errors[id]);

    return (
    <div className="space-y-2">
        <input 
        type={type}
        placeholder={placeholder}
        className={clsx(
            isLoading && "cursor-not-allowed",
            errors [id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-primary",
            "w-full p-4 font-light border border-primary rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-primary"
        )}
        disabled= {isLoading}
        {...register(id,{
        required: {
            value: required,
            message: errorMsg,
        },
    })}
        autoComplete={isAutocompleted ? "on" : "off"}
        />

    {errors[id] && (
        <Typography variant="caption3" component="div" theme="danger">
            {errors[id]?.message}
        </Typography>
    )}    

    </div>

    );
};