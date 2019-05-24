import React, {Component} from 'react';
import callAPI from 'axios';

//Sub Components
import card from '../subComponents/Card';
import {NavLink} from "react-router-dom";

let searchTimeOut = null;
let searchText = '';
let pageID = 1;

class playersContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            resultDontExist: false
        };


        this.searchHandler = this.searchHandler.bind(this);
        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.reloadGallery = this.reloadGallery.bind(this);
    }

    componentDidMount() {
        callAPI.get('http://127.0.0.1:3001/get/list').then(response => {
            let res = response.data;

            let error = (res.error === false);

            //Prevent null pointer
            if (error) {
                this.setState({
                    players: this.createCards(res.playerData),
                    loading: false,
                    resultDontExist: false
                });
            }
        });
    };

    componentWillUnmount() {
        searchTimeOut = null;
        searchText = '';
        pageID = 1;
    }

    reloadGallery() {
        console.log(pageID)

        callAPI.get('http://127.0.0.1:3001/get/list?page=' + pageID + '&search=' + searchText).then(response => {
            let res = response.data;

            console.log(res);

            let error = (res.error === false);

            //Prevent null pointer
            if (error) {
                this.setState({
                    players: this.createCards(res.playerData),
                    loading: false,
                    resultDontExist: false
                });
            } else {
                let code = res.code;
                if (code === 702) {
                    this.setState({
                        loading: false,
                        resultDontExist: true
                    })
                }
            }
        });
    };

    createCards(res) {
        return res.map((stats) =>
            card(stats)
        );
    };

    searchHandler(event) {
        searchText = event.target.value || '';
        this.setState({
            loading: true
        });

        clearTimeout(searchTimeOut);
        searchTimeOut = setTimeout(this.reloadGallery, 750);
    }

    decrementPage(e) {
        e.preventDefault();
        if (pageID - 1 !== 0) {
            pageID--;
            this.setState({
                loading: true
            });
            this.reloadGallery();
        }
    }

    incrementPage(e) {
        e.preventDefault();
        pageID++;
        this.setState({
            loading: true
        });
        this.reloadGallery();
    }

    getPlayers() {

        if (!this.state.players || this.state.loading) {
            return (
                <div className="row mt-5 mt-5">
                    <div className="justify-content-center mx-auto">
                        <span className="spinner mb-5"/>
                    </div>
                </div>
            );
        } else if (this.state.resultDontExist) {
            return (
                <div className="row mt-5">
                    <div className="justify-content-center mx-auto">
                        <div className="text-info text-center errorBigLetter">404</div>
                        <div className="text-danger text-center errorNormalLetter">El resultado "{searchText}" no
                            existe.
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row mt-5">
                    {this.state.players}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="justify-content-center mx-auto mt-5 search">
                    <input className="searchBar-box" type="text" placeholder="Clic para buscar" minLength="1"
                           maxLength="16" onChange={this.searchHandler}/>
                </div>

                {this.getPlayers()}

                <div className="my-4 mx-auto d-flex align-items-center container-fluid">
                    <a href="" className="" onClick={this.decrementPage}>
                        <i className="fas fa-chevron-circle-left fa-3x"/>
                    </a>

                    <div className="d-flex text-center mx-auto pageText">
                        <span className="">Pagina <b>{pageID}</b></span>
                    </div>

                    <a href="" className="" onClick={this.incrementPage}>
                        <i className="fas fa-chevron-circle-right fa-3x"/>
                    </a>
                </div>

            </div>
        );
    }
}

function searchingFor(search) {
    return function (x) {
        return x.playerName.toLowerCase().includes(search.toLowerCase()) || !search;
    }
}

export default playersContent;
