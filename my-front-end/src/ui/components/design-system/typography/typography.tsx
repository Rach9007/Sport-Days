import clsx from "clsx";
interface Props {
    variant?: "h1"| "h2"| "h3"| "h4"| "h5" | "body-sm" | "body-lg" | "display" | "lead" | "body-base" | "caption1"| "caption2"| "caption3" ; 
    component?:"h1"| "h2"| "h3"| "h4"| "h5" | "p" | "div" | "span"; 
    theme?: | "black" | "gray" | "white" | "primary" | "secondary"| "danger" | "success" |  "warning";
    weight?:  "regular" | "medium";
    className?: string;
    children: React.ReactNode;

}
export const Typography = ({
    variant = "h3", 
    component: Component="div", 
    theme = "black",
    weight = "regular",
    className,
    children,
}:Props) => {
  
    let variantStyles: string = "" , colorStyles: string = "";
    switch (variant) {
        case "display":
            variantStyles = "text-8xl";
            break;
        case "h1":
            variantStyles = "text-7xl";
            break;
        case "h2":
            variantStyles = "text-5xl";
            break;
        case "h3": //default
            variantStyles = "text-4xl";
            break;
        case "h4":
            variantStyles = "text-4xl";
            break;
        case "h5":
            variantStyles = "text-3xl";
            break;
        case "lead":
            variantStyles = "text-2xl";
            break;
        case "body-lg":
            variantStyles = "text-lg";
            break;
        case "body-base":
            variantStyles = "text-base";
            break;
        case "body-sm":
            variantStyles = "text-sm";
            break;
        case "caption1":
            variantStyles = "text-caption1";
            break;
        case "caption2":
            variantStyles = "text-caption2";
            break;
        case "caption3":
            variantStyles = "text-caption3";
            break;

    }

        switch (theme){
            case "primary":
                colorStyles = "text-primary";
                break;
            case "white":
                colorStyles = "text-white";
                break;
            case "gray":
                colorStyles = "text-gray-600";
                break;
            case "danger":
                colorStyles = "text-alert-danger";
                break;
            case "success":
                colorStyles = "text-alert-success";
                break;
            case "warning":
                colorStyles = "text-alert-warning";
                break;
        }
                    
    
    return (
        <Component className={clsx(
            variantStyles,
            weight === "medium" && "font-medium",
            className,
            colorStyles,
            
            )}>
            {children}
        </Component>
    );
};