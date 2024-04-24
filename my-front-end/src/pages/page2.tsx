import { EtePageView1 } from "@/ui/components/design-system/modules/home-page/saisons/PagePrincipal/EtePage.view";
import { HiverPageView } from "@/ui/components/design-system/modules/home-page/saisons/PagePrincipal/HiverPage.view";
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from "react";

export const ListeDeroulante = () => {
  const router = useRouter();
  const eteRef = useRef<HTMLDivElement>(null);
  const hiverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          router.push(`#${id}`);
        }
      });
    }, { threshold: 0.5 });

    if (eteRef.current) {
      observer.observe(eteRef.current);
    }
    if (hiverRef.current) {
      observer.observe(hiverRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="navbar-menu">
      <div id="section1" ref={eteRef}>
        <EtePageView1/>
      </div>
      <div id="section3" ref={hiverRef}>
        <HiverPageView/>
      </div>
    </div>
  );
};

export default ListeDeroulante;
