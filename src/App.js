import './App.css';
import React from 'react'
import Header from './containers/header/tittle'
import ListAut from './containers/section/listMenu';

export default class App extends React.Component {
  render (){
    const tittle = process.env.REACT_APP_APP_TITTLE;

    return (
      <div className= 'App'>
        <Header tittle= {tittle}/>
        <ListAut/>
      </div>
    );
  }
}