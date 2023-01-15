import React, { FunctionComponent, useState } from 'react';
import '../css/bouton.css';
import '../css/common.css'

export const BoutonAdd: FunctionComponent = () => {

  return (
    <div id="btn_add">
      <a type="button"
        className="btn  btn-circle btn-xl right custom-bg-vert">
        <i className="material-icons Large">add</i>
      </a>
    </div>

  );
}

type Props = {
  value: string;
}
export const BoutonClassique: FunctionComponent<Props> = ({ value }) => {

  return (

    <input
      type="submit"
      className="btn btn-block btn-light border border-dark border-2"
      value={value}
    />
  );
}


