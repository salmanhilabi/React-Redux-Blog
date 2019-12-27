import './App.css';
import React, { Component } from "react";
import { Provider } from "react-redux";
import {persistor, store} from './store/store';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import EditPage from './components/editPageComponents/edit';
import BlogPostWrapper from './components/blogPostWrapper';
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    return (
      <Provider store={store}>{/* Provider will send stored data to every component connected to Redux in this App*/}
         <Router>
             <div className="App">
               <div className="navbar">
                 <h2 className="center">REACT REDUX BLOG</h2>
               </div>
               <Switch>
                 {/* PersistGate waits untill the data is fetch then the persistor will get the
                   stored Posts/Data that was stored in the storage and provide it to us */}
                 <PersistGate loading={null} persistor={persistor}>
                   <Route exact path="/" component={BlogPostWrapper} />
                   <Route path="/edit-post" component={EditPage} />
                 </PersistGate>
               </Switch>
             </div>
         </Router>
      </Provider>
    );
  }
}
export default App;
