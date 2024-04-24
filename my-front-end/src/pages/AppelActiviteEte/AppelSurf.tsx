import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo";
import SurfPage from "@/ui/components/design-system/modules/home-page/saisons/ActiviteEte/PageSurf";

export default function Design(){
    return  (
        <>
        <Seo title="Sport Days"  description="Agence de tourisme sportif"/>

        <Layout>
            <SurfPage/>
            
        </Layout>
        </>
    )
}