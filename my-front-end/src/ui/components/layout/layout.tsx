import { EtePageView1 } from "../design-system/modules/home-page/saisons/PagePrincipal/EtePage.view";
import { HiverPageView } from "../design-system/modules/home-page/saisons/PagePrincipal/HiverPage.view";
import { Accueil1 } from "../design-system/modules/home-page/saisons/PagePrincipal/accueil1.view";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { ChangeEvent, useState } from "react";

interface Props {
    children?: React.ReactNode;
}

export const Layout = ({children } : Props) => {
    
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
};