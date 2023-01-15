import { FunctionComponent } from 'react';
import Recette from '../models/recette';
import '../css/recette-card.css';
import { Link, NavLink } from 'react-router-dom';


type Props = {
  recette: Recette
};

const RecetteCard: FunctionComponent<Props> = ({ recette }) => {

  return (
   
    <div id="recetteCard" className=" col-12 col-md-6 col-lg-4" >
       <NavLink to={'/recettes/' + recette.id} style={{textDecoration: 'none'}}>
          <div className=" card mb-4 custom-bg-vert custom-shadow-card text-light" style={{ maxWidth: '440px' }}>
              <div className="row g-0">
                  <div className=" col-12 col-sm-6">
                    <img src={recette.urlPicture} className="img-fluid rounded-start " alt="..."  style={{ maxHeight: '100%' }}/>
                  </div>
                  <div className=" col-12 col-sm-6">
                    <div className="card-body">
                      <h5 className="card-title overflow-elipsis">{recette.title}</h5>
                      <blockquote>
                        <p className="card-text">{recette.difficultyLevel}</p>
                        <p className="card-text">{recette.numberOfPeople}</p>
                        <p className="card-text">{recette.totalTimePreparation}</p>
                      </blockquote>
                    </div>
                  </div>
              </div>
          </div>
      </NavLink>
    </div>
  );
}

export default RecetteCard;