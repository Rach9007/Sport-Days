import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo";

import JetSkiPage from "@/ui/components/design-system/modules/home-page/saisons/ActiviteEte/PageJet-ski";


export default function Design(){
    return  (
        <>
        <Seo title="Sport Days"  description="Agence de tourisme sportif"/>

        <Layout>
            <JetSkiPage/>
            
        </Layout>
        </>
    )
}