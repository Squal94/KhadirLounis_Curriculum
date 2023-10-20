import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Motivation = () => {
  return (
    <div>
      <Mouse />
      <Navigation />
      <div className="motivation">
        <h1>Motivation</h1>
        <p>
          <span>&#10077;</span>
          Madame, Monsieur, <br />
          <br />
          Après une dizaine d’années d’expériences dans la vente , j’ai décidé
          de changer de secteur d'activité.
          <br />
          <br />
          Il y a trois ans, j’ai repris mes études pour suivre une formation
          dans le domaine de la programmation WEB et plus précisément du
          développement FRONT-END (Reddux,Toolkit,React,Javascript etc.)
          <br />
          Ce métier est pour moi un champ de création perpétuelle amenant
          régulièrement de nouveaux projets, offrant une liberté de création
          permanente et une résolution des problèmes passionnants. Après avoir
          finalisé ma formation et obtenu mon diplôme (Titre RNCP de niveau 6),
          je souhaite aujourd'hui intégrer une entreprise qui me permettra de
          parfaire mes connaissances dans ce domaine si vaste et qui me
          passionne, de développer un « savoir faire » en programmation et
          commencer ce nouveau projet professionnel .
          <br />
          <br />
          En complément de mes apprentissages, j’ai participé à divers
          événements webinars, conférences, formations Agiles, journées portes
          ouvertes qui m’ont permis d’en savoir davantage sur votre secteur
          d’activité et d’avoir une première approche de ce métier .
          <br />
          <br />
          Je suis prêt à m’investir rapidement et pleinement au sein d’une
          entreprise ambitieuse et dotée d’un plan de formations internes
          suivant les évolutions techniques.
          <br />
          A la suite d’une période d’intégration, je ferai le nécessaire pour
          être opérationnel dans les plus brefs délais. Je reste à votre
          disposition pour un rendez vous à votre convenance par mail
          lounis.khadir@wanadoo.fr ou par téléphone au 06.28.21.88.83 .
          <br />
          <br />
          En attendant, je vous prie d’agréer,
          <br />
          Madame, Monsieur, mes salutations les plus distinguées.
          <br />
          <br />
          Monsieur Lounis KHADIR.
          <span>&#10078;</span>
        </p>
        {/* <Logo /> */}
      </div>
      <Buttons
        left={"/KhadirLounis_Curriculum/projet-2"}
        right={"/KhadirLounis_Curriculum/contact"}
      />
    </div>
  );
};

export default Motivation;
