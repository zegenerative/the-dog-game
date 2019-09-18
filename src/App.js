import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import DogsListContainer from './components/DogsListContainer';
import Main from './components/Main';
import Game1Container from './components/Game1Container';
import Credits from './components/Credits';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <main>
      <div className="App">
        <Route exact path="/dogs" component = {DogsListContainer} />
        <Route path="/dog-breeds/:breed" component = {DogBreedImagesContainer} />
        <Route exact path = "/" component = {Main}></Route>
        <Route path = '/Game1' component = {Game1Container}></Route>
        <Route path = '/Credits' component = {Credits}></Route>
      </div>
    </main>
    </Provider>
  );
}

export default App;