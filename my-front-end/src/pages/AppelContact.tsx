import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo";
import ActiviteSportive from "../ui/components/design-system/modules/home-page/saisons/ActivitesHiver/PageSki";
import ContactPage from "@/ui/components/design-system/modules/home-page/saisons/Contact/PageContact";


export default function Design(){
    return  (
        <>
        <Seo title="Sport Days"  description="Agence de tourisme sportif"/>

        <Layout>
            <ContactPage/>
            
        </Layout>
        </>
    )
}