import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import '../css/bouton.css';
import '../css/common.css';

/*********************************Bouton avec icone add********************* */
export const BoutonAdd: FunctionComponent = () => {

  return (
    <div id="btn_add">
      <a type="button"
        className="btn  btn-circle btn-xl right custom-bg-vert" href={'/recette/add'}>
        <i className="material-icons Large">add</i>
      </a>
    </div>

  );
}

/*********************************Bouton  pour soumission de formulaire********************* */
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

type BtnLienProps = {
  href: string,
  icon: IconDefinition
}
/*********************************Bouton lien avec rediection ********************* */
export const BoutonLiens: FunctionComponent<BtnLienProps> = ({href, icon}) => {

  return (
    <div id="btn_lien" className='ps-1'>
      <a href={href} className="btn btn-light border border-dark"><FontAwesomeIcon icon={icon} style={{color: ' #c79d6f', fontWeight:'bold'}}/></a>
    </div>

  );
}


