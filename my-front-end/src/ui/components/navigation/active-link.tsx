import clsx from "clsx";
import Link from "next/link";
import {useRouter} from 'next/router';
import {useMemo} from "react";
import { text } from "stream/consumers";
interface Props{
    href: string;
    children: React.ReactNode;
}
export const ActiveLink =({href,children}: Props) => {

    const router= useRouter();
    
    const isActive: boolean = useMemo(() => {
        return router.pathname === href ;
    }, [router.pathname, href]
    );

    return (
        <Link href={href} className={clsx(isActive && "text-primary-200 font-medium")}>
            {children}
        </Link>
    )
}