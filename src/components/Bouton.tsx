import React, { FunctionComponent, useState } from 'react';
import '../css/bouton.css';

export const Bouton: FunctionComponent = () => {
    
    return (
      <div id="btn_add">
          <a type="button" 
          className="btn  btn-circle btn-xl right custom-bg-vert">
            <i className="material-icons Large">add</i>
          </a>
      </div>  
    
    );
  }
    

  