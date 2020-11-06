import { Switch, Route} from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomeScreen from './pages/HomeScreen'
import RecipeScreen from './pages/RecipeScreen'
import ArticlesScreen from './pages/ArticlesScreen'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/recipe" component={RecipeScreen} />
        <Route path="/articles" component={ArticlesScreen} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
