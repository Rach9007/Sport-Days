
import Link from 'next/link';
import { Container } from '../container/container';
import { Button } from '../design-system/buttons/button';
import { Typography } from './../design-system/typography/typography';
import { ActiveLink } from './active-link';



import { EtePageView1 } from "@/ui/components/design-system/modules/home-page/saisons/PagePrincipal/EtePage.view";
import { HiverPageView } from "@/ui/components/design-system/modules/home-page/saisons/PagePrincipal/HiverPage.view";
import React, { useState } from "react";
import ListeDeroulante from '../design-system/buttons/ListeDeroulante';







export const Navigation = () => {
    
    return (
        <div className="border-white-400 h-[90px] justify-start border-1 bg-secondary-200">
            <Container className=' flex items-center justify-between  gap-7 '>
            <Link href="/">
            <div className='felx items-center gap-2.5'> 
            
                <div className='flex flex-col'>
                    <div className=" text-black font-extrabold text-[24px]">
                        Sport days
                    </div>
                    <Typography
                    variant="caption3"
                    component="span"
                    >
                        Trouvez de l'inspiration 
                    </Typography>
                 </div>

            </div>
            </Link>
            <nav>
            <div className='flex items-center gap-7'>
                <Typography variant='lead' component='div' className='flex items-center gap-7'>
              
                    
                    <ActiveLink href="/pageE">Equipements</ActiveLink >
                    <ActiveLink href="https://www.booking.com">Hebergements</ActiveLink>
                    
                </Typography>
                <div className='flex items-center gap-2'>
                    <Button size='small'>RESERVER</Button>
                    <Button size='small' variant='secondary'baseUrl='/AppelContact' >CONTACT</Button>

                </div>
               

            </div>
            </nav>
            
            </Container>

            

        </div>
    )
    

};