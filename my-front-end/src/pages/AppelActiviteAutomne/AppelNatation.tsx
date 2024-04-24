import NatationPage from "@/ui/components/design-system/modules/home-page/saisons/ActiviteAutomne/PageNatation";


import { Layout } from "@/ui/components/layout/layout";

import { Seo } from "@/ui/components/seo";



export default function Design(){
    return  (
        <>
        <Seo title="Sport Days"  description="Agence de tourisme sportif"/>

        <Layout>
            <NatationPage   />
            
        </Layout>
        </>
    )
}