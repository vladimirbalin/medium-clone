import { Switch, Route } from 'react-router-dom';
import React from "react";
import Article from "pages/article/article";
import GlobalFeed from "pages/globalFeed";

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={GlobalFeed}/>
      <Route path='/articles/:?slug' component={Article}/>
    </Switch>
  )
}