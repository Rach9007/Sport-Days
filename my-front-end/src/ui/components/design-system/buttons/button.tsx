import { LinkType, LinkTypes } from "@/lib/links-type";
import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import Link from "next/link";
interface Props {
    size?: "small"| "medium" | "large"; 
    variant?: "accent"| "secondary" | "clic" | "disabled" | "ico";
    icon?: IconProps;
    iconTheme?: "accent"| "secondary" | "gray";
    iconPosition?: "left"| "right" ;
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string;
    linkType?: LinkType,
    action?: Function,
    type?: "button"| "submit";
    fullWith?: boolean;

}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType="internal",
    type= "button",
    fullWith= false,
    action= () =>{},
}: Props) =>{

    let variantStyles: string = "", 
    sizeStyles: string = "", 
    icoSize: number=0;

    switch (variant) {
        case "accent":
            variantStyles = "bg-primary hover:bg-primary-200 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/70 text-primary rounded cursor" ;
            break;
        case "clic":
             variantStyles = "bg-white hover:bg-primary-300/70 text-black rounded  ";
             break;
        case "disabled":
            variantStyles = "";
            break;
        case "ico":
            if (iconTheme === "accent") {
                variantStyles = "bg-primary hover:bg-primary-200 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/70 text-primary rounded-full cursor-not-allowed";
            }
            
            break;
    
    }
    switch (size) {
        case "small":
            sizeStyles= `text-caption3 font-medium  ${
                variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" :"px-[14px] py-[12px]" 
            }` ;
            icoSize = 18;
            break;
        case "medium":
            sizeStyles= `text-caption3 font-medium  ${
                variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" :"px-[18px] py-[15px]" 
            }` ;;
            icoSize = 20;
            break;
        case "large":
            sizeStyles= `text-caption3 font-medium  ${
                variant === "ico" ? "flex items-center justify-center w-[150px] h-[150px]" :"px-[22px] py-[18px]" 
            }` ;;
            icoSize = 24;
            break;
    
    }

    const handeClick = () => {
        if (action) {
            action()
        }
    }

    const buttonContent = (
        <>
         {icon && variant === 'ico' ? (
             <icon.icon size={icoSize}/>
        ): (
        <>  <div className= {clsx (icon && "flex items-center gap-1")}>
            {icon && iconPosition === 'left' &&(
                <icon.icon size={icoSize}/>
            ) }
            {children}
            {icon && iconPosition === 'right' &&(
                <icon.icon size={icoSize}/>
            ) }
            </div>
        </>
        )}
       
        </>
    );

    const buttonElement = (
        
        <button
        type={type}
        
        className={clsx(
            variantStyles,
            sizeStyles,
            icoSize,
            isLoading && "cursor-not-allowed",
            fullWith && "w-full",
            "relative animate"
            )}
        onClick={handeClick} 
        disabled={disabled || isLoading ? true : false }
    >
        {buttonContent}
       
    </button>
        
    );

    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                 <a href= {baseUrl} target="_blank">
                    {buttonElement}
                 </a>
            )
        } else {
            return <Link href={baseUrl}> {buttonElement}</Link>;
        }

        
    }

    return buttonElement
};