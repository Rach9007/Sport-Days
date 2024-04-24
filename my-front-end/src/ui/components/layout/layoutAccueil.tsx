import React, { useEffect, useRef, useState } from "react";
import { Accueil1 } from "../design-system/modules/home-page/saisons/PagePrincipal/accueil1.view";
import { EtePageView1 } from "../design-system/modules/home-page/saisons/PagePrincipal/EtePage.view";
import { HiverPageView } from "../design-system/modules/home-page/saisons/PagePrincipal/HiverPage.view";
import { Footer } from "../navigation/footer";
import { NavigationAccueil } from "../navigation/navAcceuil";
import { PrintempsView } from "../design-system/modules/home-page/saisons/PagePrincipal/Printemps.view";
import { AutomneView } from "../design-system/modules/home-page/saisons/PagePrincipal/Automne.view";
import { useRouter } from "next/router";

export const LayoutAccueil = () => {
  const router = useRouter();
  const eteRef = useRef<HTMLDivElement>(null);
  const hiverRef = useRef<HTMLDivElement>(null);
  const printempsRef = useRef<HTMLDivElement>(null);
  const automneRef = useRef<HTMLDivElement>(null);
  const accueilRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null); // État pour suivre la section active

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (activeSection !== id) { // Vérifier si l'identifiant de la section a changé
            setActiveSection(id); // Mettre à jour l'état avec l'identifiant de la section active
            router.push(`#${id}`); // Mettre à jour l'URL seulement si l'identifiant de la section a changé
          }
        }
      });
    }, { threshold: 0.5 });

    if (eteRef.current) {
      observer.observe(eteRef.current);
    }
    if (hiverRef.current) {
      observer.observe(hiverRef.current);
    }
    if (automneRef.current) {
        observer.observe(automneRef.current);
      }
    if (printempsRef.current) {
        observer.observe(printempsRef.current);
      }
    if (accueilRef.current) {
        observer.observe(accueilRef.current);
      }
    return () => {
      observer.disconnect();
    };
  }, [activeSection]); // Ajouter activeSection comme dépendance pour s'assurer que l'observateur est mis à jour correctement

  return (
    <>
      <NavigationAccueil/>
      <div id="accueil" ref={accueilRef}>
        <Accueil1/>
      </div>
      <div id="hiver" ref={hiverRef}>
        <HiverPageView/>
      </div>
      <div id="ete" ref={eteRef}>
        <EtePageView1/>
      </div>
      <div id="printemps" ref={printempsRef}>
        <PrintempsView/>
      </div>
      <div id="automne" ref={automneRef}>
        <AutomneView/>
      </div>
      <Footer />
    </>
  );
};
