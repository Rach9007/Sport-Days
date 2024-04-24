import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo";

import SkiPage from "@/ui/components/design-system/modules/home-page/saisons/ActivitesHiver/PageSki";
import ActiviteSki from "@/ui/components/design-system/modules/home-page/saisons/ActivitesHiver/PageSki";
import SnowboardPage from "@/ui/components/design-system/modules/home-page/saisons/ActivitesHiver/PageSnowboard";


export default function Design(){
    return  (
        <>
        <Seo title="Sport Days"  description="Agence de tourisme sportif"/>

        <Layout>
            <SnowboardPage/>
            
        </Layout>
        </>
    )
}