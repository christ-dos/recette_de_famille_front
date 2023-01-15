
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './page/home-page';
import RcetteDetail from './page/recette-details';
import RecetteList from './page/recettes-list';



const App: React.FC = () => {
  return(
    
      <Router>
        <div>
          {/*  la barre de navigation commun a ttes les pages*/}
          <nav id="nav_barre_principal" className='bg-primary'>
            <h2>Ma nav Barre</h2>
            <div> 
              <ul>
                <li><Link to="/" className="text-black">Home</Link></li>
                <li> <Link to="/livrerecettes" className="text-black">livrerecettes</Link></li>
                <li><Link to="/recettes/:id" className="text-black">DetailsREcette</Link></li>
              </ul>
             
             
            </div>
          </nav>
          <div className='container'>
          {/* le systeme de gestion* de notre application*/}
            

            <Switch>
              <Route  exact path="/" component={HomePage}/> 
              <Route  exact path="/livrerecettes" component={RecetteList}/> 
              <Route  path="/recettes/:id" component={RcetteDetail}/> 
            </Switch>

          </div>
      </div>
    </Router>
  )
}

export default App;
