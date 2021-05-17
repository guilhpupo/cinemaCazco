import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import SearchResults from './SearchResults'
import Title from './Title'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/title/:title" exact component={Title} />
        <Route path="/:title" exact component={SearchResults} />
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
