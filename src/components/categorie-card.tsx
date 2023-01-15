import React, { FunctionComponent } from "react";
import { Categorie } from "../models/Categorie";
import '../css/bootstrap.css';



type Props = {
    categorie: Categorie
};

const CategorieCard: FunctionComponent<Props>= ({ categorie}) => {

    return (
        <div className="row d-flex flex-direction-row">
            <div className="col-12 col-md-6 col-lg-3 ">
            <div id="categorieCard"className="card mt-4 px-3 custom-bg-vert custom-shadow-card" style={{width: '17rem'}}>
                <img src={categorie.url} className="card-img-top mt-2" alt="..."/>
                <div className="card-body">
                    <h3 className="card-text text-light text-center">{categorie.name}</h3>
                </div>
            </div>
        </div>
        </div>
        
    );
  }

  export default CategorieCard;