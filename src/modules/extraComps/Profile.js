import React, {Component} from 'react';
import callAPI from 'axios';

import profileCard from '../subComponents/ProfileCard';

class playersContent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const {match: {params}} = this.props;

        callAPI.get('http://127.0.0.1:3001/get/player/' + params.id).then(response => {
            let res2 = response.data;

            console.log(res2);

            let exist = (res2.exist !== false);

            console.log(exist);

            if (exist) {
                this.setState({
                    exist: exist,
                    player: profileCard(res2),
                });
            }
        });

        this.setState({
            userID: params.id
        })
    }

    render() {
        if (!this.state.exist) {
            return (
                <div className="row mt-5">
                    <div className="justify-content-center mx-auto">
                        <div className="text-info text-center errorBigLetter">404</div>
                        <div className="text-danger text-center errorNormalLetter">El jugador "{this.state.userID}" no
                            existe.
                        </div>
                    </div>
                </div>
            );
        } else if (!this.state.player) {
            return (
                <div className="row mt-5">
                    <div className="justify-content-center mx-auto">
                        <span className="spinner mb-5"/>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {this.state.player}
            </div>
        );
    }


}

export default playersContent;
