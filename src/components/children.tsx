import { FunctionComponent } from 'react';
import '../css/children.css';


export const BienvenueComponent: FunctionComponent = () => {
    
    return (
     <section id="presentation" className='row'>
      <div className="col-12 ">
      <p>Bonjour la Famille et les Amis,</p>
      <p>Bienvenue sur le site de recettes de la famille XXXX et compagnie! j'espère que vous trouverez tout ce que
          vous recherchez ici. Recettes portugaises, françaises ... sont à votre disposition afin de faire plaisir à
          vos papilles! Un grand merci aux taties, cousines, amies pour le partage de leurs si précieuses recettes!
      </p>
      </div>
        
    </section>
    );
  }

type Props = {
  titre: string;
};
  export const TitreH2: FunctionComponent<Props> = ({titre}) => {
    
    return (
      <main id="titreHome">
        <h2>{titre}</h2>
      </main>
    );
  }

 