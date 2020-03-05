import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/items" exact component={ProductList} />
      <Route path="/items/:id" component={Product}></Route>
    </Switch>
  );
}
