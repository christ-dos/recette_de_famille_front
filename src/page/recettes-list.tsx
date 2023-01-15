import { FunctionComponent, useEffect, useState } from 'react';
import { BoutonAdd } from '../components/Bouton';
import { TitreH2 } from '../components/children';
import RecetteCard from '../components/recette-card';
import RECETTES from '../models/mock-recettes';
import Recette from '../models/recette';

  
const RecetteList: FunctionComponent = () => {
  const [recettes, setRecettes] = useState<Recette[]>([]);
  
  useEffect(() => {
    setRecettes(RECETTES);
  }, []);
  
  return (
    <>
    <div className="row">
      <div className="col-10 d-flex justify-content-center">
        <TitreH2 titre={'Livre de Recettes'}/>
      </div>
    
    <div className="col-2 mt-3 pe-4 d-flex justify-content-end">
        <BoutonAdd/>
    </div>
    </div>

    <div className="row mx-auto mt-4">
      {recettes.map(recette => (
        <RecetteCard key={recette.id} recette={recette}/>
        ))}
    </div>
    </> 
  );
}
  
export default RecetteList;
