import CanoePage from "@/ui/components/design-system/modules/home-page/saisons/ActivitePrintemps/PageCanoe";

import { Layout } from "@/ui/components/layout/layout";

import { Seo } from "@/ui/components/seo";



export default function Design(){
    return  (
        <>
        <Seo title="Sport Days"  description="Agence de tourisme sportif"/>

        <Layout>
            <CanoePage   />
            
        </Layout>
        </>
    )
}