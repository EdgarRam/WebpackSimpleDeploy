import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

const componentsRoutes ={
  component: Home,
  path: '/',
  indexRoute: { 
    component: ArtistMain 
  },
  childRoutes:[
    {
      getComponent( location, cb ){
        System.import( './components/artists/ArtistCreate' )
          .then( module =>  cb( null, module.default ) )
      },
      path: 'artists/new'
    },
    {
      getComponent( location, cb ){
        System.import( './components/artists/ArtistDetail' )
          .then( module =>  cb( null, module.default ) )
      },
      path: 'artists/:id'
    },
    {
      getComponent( location, cb ){
        System.import( './components/artists/ArtistEdit' )
          .then( module =>  cb( null, module.default ) )
      },
      path: 'artists/:id/edit'
    }
  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory}  routes={componentsRoutes} />
  );
};

export default Routes;
