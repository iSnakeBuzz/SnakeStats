import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Importing utilities
import {BrowserRouter, Route} from "react-router-dom";

// importing CSS
import './css/bootstrap.min.css';
import './css/SnakeStats.css';
import './css/animations.css';

//Importing modules
import mainContent from './modules/MainContent';

ReactDOM.render(<BrowserRouter><Route path="/"
                                      component={mainContent}/></BrowserRouter>, document.getElementById('snakeContent'));

serviceWorker.unregister();
