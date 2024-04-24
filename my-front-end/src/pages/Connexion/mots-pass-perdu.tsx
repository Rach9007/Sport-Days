import Head from 'next/head';


import { Button } from '@/ui/components/design-system/buttons/button';
import { FaApple, FaLine } from "react-icons/fa";
import { RiUser6Fill} from 'react-icons/ri';
import { Navigation } from '@/ui/components/navigation/navigation';
import { Logo } from '@/ui/components/design-system/logo/logo';
import { Img } from '@/ui/components/img/img';
import { Footer } from '@/ui/components/navigation/footer';


import { LandingPageContainer } from '@/ui/components/design-system/modules/home-page/saisons/landing-page.conatiner';
import { LayoutAccueil } from '@/ui/components/layout/layoutAccueil';
import { Layout } from '@/ui/components/layout/layout';

import { RegisterContainer } from '@/ui/components/Authentification/register/register.container';

import { Seo } from '@/ui/components/seo';
import { ForgetPasswordContiner } from '@/ui/components/Authentification/forget-password/forget-password.container';

export default function Home() {
  return (
    <>
      <Seo title="Inscription"  description="Page d'inscription"/>
    
     <Layout>
        <ForgetPasswordContiner/>

     </Layout>
      
      
      </>
      
  );
};

