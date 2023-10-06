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
          &#10077;
          <br />
          <br />
          Après une dizaine d’année d’expérience dans la vente , j’ai décidé de
          changer de secteur d'activité.
          <br />
          <br />
          J'ai repris mes études il y a trois ans pour étudier un domaine
          d'intérêt intellectuel.
          <br />
          <br />
          J'ai trouvé la programmation web qui pour moi est un champ de création
          perpétuelle ,de renouveau et exaltant tant la liberté de création est
          présente et la résolution de problème passionnant.
          <br />
          <br />
          Après avoir finalisé ma formation et obtenu mon équivalence RNCP
          niveau 6, Je souhaite au jour d’aujourd'hui, Trouver une entreprise
          qui me permettra de parfaire mes connaissances dans ce domaine si
          vaste, de créent de bonnes habitudes de programmations, et de
          m’intégrer à ce domaine qui me passionne et qui représente un nouveau
          départ professionnelle .
          <br />
          <br />
          En complément de ma formation, j’ai participé à divers événements
          webinars, conférences, formation Agiles ,journées portes ouvertes qui
          m’ont permis d’en savoir davantage sur votre secteur d’activité. Ce
          qui m’a permis d’avoir une première approche de ce métier .
          <br />
          <br />
          Je suis par ailleurs prêt à m’investir rapidement et pleinement au
          sein d’une entreprise en suivant des formations internes pour être
          opérationnel dans les plus brefs délais.
          <br />
          <br />
          Je me réjouis à la perspective de travailler et de faire des progrès
          dans ce domaine.
          <br />
          <br />
          Avec mes remerciements ,.
          <br />
          <br />
          Khadir Lounis.
          <br />
          <br />
          <span>&#10078;</span>
        </p>
        {/* <Logo /> */}
      </div>
      <Buttons left={"/projet-4"} right={"/contact"} />
    </div>
  );
};

export default Motivation;
