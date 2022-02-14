import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardList from './components/CardList';
import Header from './components/Header-Image';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PostTask from './components/PostTask';
//import Router from './Router';

function App() {
  return (
    //<div>
    <BrowserRouter>
    
    <Navbar/>
    <Header />
    <Switch>
      <Route path="/posttask" component={PostTask} />
      <Route path ="/" component = {CardList} />
    </Switch>
      <Footer />
    </BrowserRouter>//</div>
  );   
}

export default App;
