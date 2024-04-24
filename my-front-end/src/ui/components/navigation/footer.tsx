
import { Container } from '../container/container';
import { Typography } from '../design-system/typography/typography';
import { ActiveLink } from './active-link';

import {v4 as uuidv4} from 'uuid';
import { footerApplicationLinks, footerEquipementLinks, footerLinks } from './app-links';
import { AppLinks, FooterLinks } from '@/types/app-links2';
import { LinkTypes } from '@/lib/links-type';

export const Footer  = () => {
    const currentYear = new Date().getFullYear();


    const footerNavigationList = footerLinks.map((colomnLinks) => ( 
        //<div  key={uuidv4()}>{element.label}</div>
        <FooterLink key={uuidv4()} data={colomnLinks} />
        
    ));
    
    return (
        <div className=" bg-gray-700 relative inset-x-0 bottom-0 py-10 ">
            <Container className=' '>
                <div className='flex  justify-around'>
                    {footerNavigationList}
                </div>
                
            </Container>
            <Container className='text-center pt-9 pb-11 '>
               
                <div className=''> {/*liste*/}
                    <Typography variant='caption3' theme='white'>
                        {`Copyright ${currentYear} | Propulsed by Epsi
                                `}

                    </Typography>

                </div>
            </Container>
        </div>
    );
};

interface footerLinkProps {
    data: FooterLinks;
}

const FooterLink=({data}: footerLinkProps) => {
    const linksList = data.links.map((link) => ( 
        <div  key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && ( 
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}
            {link.type === LinkTypes.EXTERNAL && ( 
                <a href={link.baseUrl} target="_blank">
                {link.label}
                </a>
            )}
        </div>
    )); 
    return (
        <div className="min-W-[190px] flex  gap-x-9">
            <div>
            <Typography variant='caption2' weight='medium' className='pb-5' theme="white">
                {data.label}
            </Typography>
            <Typography variant='caption3' weight='regular' className='space-y-4 ' theme='gray'>
                {linksList}
            </Typography>
            </div>
           
            
        </div>
    );
};