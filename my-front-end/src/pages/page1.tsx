import Head from 'next/head';

import { Typography } from './../ui/components/design-system/typography/typography';
import { Seo } from './../ui/components/seo';
import { Button } from '@/ui/components/design-system/buttons/button';
import { FaApple, FaLine } from "react-icons/fa";
import { RiUser6Fill} from 'react-icons/ri';
import { Container } from '../ui/components/container/container';
import { Navigation } from '@/ui/components/navigation/navigation';
import { Logo } from '@/ui/components/design-system/logo/logo';
import { Img } from '@/ui/components/img/img';
import { Footer } from '@/ui/components/navigation/footer';
import { Layout } from '@/ui/components/layout/layout';

import { LandingPageContainer } from '@/ui/components/design-system/modules/home-page/saisons/landing-page.conatiner';
import { EtePageView1 } from '@/ui/components/design-system/modules/home-page/saisons/PagePrincipal/EtePage.view';
import { HiverPageView } from '@/ui/components/design-system/modules/home-page/saisons/PagePrincipal/HiverPage.view';
import { Accueil1 } from '@/ui/components/design-system/modules/home-page/saisons/PagePrincipal/accueil1.view';

export default function Home() {
  return (
    <>
      <Seo title="Sport Days"  description="Agence de tourisme sportif"/>
    
      <Layout >
            <Accueil1 />
            <HiverPageView/>
            <EtePageView1/>
       
      </Layout>
      
      
      </>
      
  );
};
