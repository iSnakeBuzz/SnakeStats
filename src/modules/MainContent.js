import React, {Component} from 'react';

import {
    Route,
    Switch
} from "react-router-dom";

import {
    CSSTransition,
    TransitionGroup
} from "react-transition-group";


// extraComponents
import players from './extraComps/Players';
import profile from './extraComps/Profile'


import '../css/Test.css';

class mainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false
        };
    }

    render() {
        return (
            <div className="container">
                <TransitionGroup>
                    <CSSTransition timeout={0}>
                        <Switch>
                            <Route exact path="/" component={players}
                                   onEnter={true}/>
                            <Route exact path="/@:id" component={profile}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>


                <footer className="footer my-4 mx-auto d-flex align-items-center container-fluid">
                    <div className="d-flex text-center mx-auto">
                        <a href="https://www.iSnakeBuzz.com/" target="_blank">Made with <i
                            className="fas fa-heart heartColor animated infinite heartBeat"/> by iSnakeBuzz_</a>
                    </div>
                </footer>

            </div>
        );
    }
}

export default mainContent;
