import { FunctionComponent, useState } from 'react';
import CarouselIngrdients from '../components/carousel_ingredient';
import CarouselPersonnes from '../components/carousel_personnes';
import CategorieList from '../components/categorie-list';
import { BienvenueComponent, TitreH2 } from '../components/children';
import Recette from '../models/recette';





const HomePage: FunctionComponent = () => {
  const [recettes, setRecettes] = useState<Recette[]>([]);
  const [isLoaded, setLoaded] = useState(false)

 /* useEffect(() => {
    const baliseScript = document.createElement("script")
    baliseScript.addEventListener("load", () => setLoaded(true))
    document.body.appendChild(baliseScript)
  }, [])

  useEffect(() => {
    if (isLoaded) {

      var swiper = new Swiper('.swiper', {

        slidesPerView: getProductOne(),
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          resize: function () {
            swiper.changeDirection("horizontal");
          },
        },
      });




    }
  }, [isLoaded])

  function getProductOne(): number {
    var windowWidth = window.innerWidth;
    var slidesPerView = '0';
    //= window.innerWidth <= 720 ? '1' : '5';
    if (windowWidth <= 720) {
      slidesPerView = '1';
    } else if (windowWidth >= 721 && windowWidth <= 800) {
      slidesPerView = '3';
    } else if (windowWidth >= 801 && windowWidth <= 1000) {
      slidesPerView = '4';
    }
    else if (windowWidth >= 1000) {
      slidesPerView = '6';
    }

    return +slidesPerView;
  }

  useEffect(() => {
    setRecettes(RECETTES);
  }, []);
*/
  return (
    <>
      <BienvenueComponent />

      <TitreH2 titre={"Pour que votre savoir faire perdure ..."} />
      <CategorieList />

      <TitreH2 titre={"De quoi avez vous envie ?"} />
      <CarouselIngrdients />

      <TitreH2 titre={"Qui cuisine aujourd'hui ?"} />
      <CarouselPersonnes/>
      <footer  className='bg-primary'>
        <h2 > mon Footer</h2>
        
      </footer>

    </>
  );
}

export default HomePage;

