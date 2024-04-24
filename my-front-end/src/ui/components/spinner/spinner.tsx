interface Props {
    variant?: "primary"| "white";
    size?: "small"| "medium" | "large"; 

}
export const  Spinner= ({
    size= "medium", variant="primary"
}:Props) =>{
    let variantStyles: string, sizeStyles:string;

    switch (variant) {
        case "primary":
            variantStyles = "";
            break;
        case "white":
            variantStyles = "";
            break;
             
    }

    switch (size) {
        case "small":
            variantStyles = "";
            break;
        case "large":
            variantStyles = "";
            break;
             
    }

    return 
    
    <>
    </>


};