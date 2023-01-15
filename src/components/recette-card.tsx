import { FunctionComponent } from 'react';
import Recette from '../models/recette';
import '../css/recette-card.css';


type Props = {
  recette: Recette
};

const RecetteCard: FunctionComponent<Props> = ({ recette }) => {

  return (
    <div id="recetteCard" className=" col-12 col-md-6 col-lg-4" >
      <div className=" card mb-4 custom-bg-vert custom-shadow-card text-light" style={{ maxWidth: '440px' }}>
        <div className="row g-0">
          <div className=" col-12 col-sm-6 " ps-2>
            <img src={recette.urlPicture} className="img-fluid rounded-start " alt="..."  style={{ maxHeight: '100%' }}/>
          </div>
          <div className=" col-12 col-sm-6 ">
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


     {/*<div className="col-12 col-md-4 col-lg-3 card pt-2 px-2 custom-bg-vert custom-shadow-card">
        <div className="col-md-5 card-image" >
          <img className='img-fluid rounded-start' src={recette.urlPicture} alt={recette.title} />
        </div>
        <div className="col-md-8 card-stacked">
          <div className="card-content white-text">
            <h5>{recette.title}</h5>
            <blockquote>
              <p>{recette.difficultyLevel}</p>
              <p>{recette.numberOfPeople}</p>
              <p>{recette.totalTimePreparation}</p>
            </blockquote>
          </div>
        </div>
      </div>*/}
    </div>


  );
}

export default RecetteCard;