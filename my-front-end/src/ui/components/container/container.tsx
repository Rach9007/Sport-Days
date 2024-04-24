import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className? : string;
}

export  const Container = ({children, className}: Props) => {
    return ( 
    
    <div className={clsx(className, " w-full max-w-6xl py-1 mx-auto space-y-7")}>
        {children}

    </div>
    
    )
}