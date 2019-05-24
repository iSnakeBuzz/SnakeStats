import React from "react";

import GameCard from '../subComponents/GameCard';

function getCard(stats) {

    return (
        <div key={stats.playerName}>
            <div className="mx-auto mt-3">
                <div id="logo">
                    <div className="avatarImage mx-auto mb-4 align-items-center avatarShadow">
                        <div className="avatarImage-Player"
                             style={{backgroundImage: 'url(https://crafatar.com/renders/body/' + stats.uuid + '?overlay&default=MHF_Steve)'}}/>
                    </div>

                    <div className="avatarName">{stats.playerName}</div>
                    <div className="avatarRank">{stats.rank.toUpperCase()}</div>
                </div>
            </div>

            <div className="card-global-stats mx-auto d-flex align-items-center container-fluid mb-4">
                <div className="card-custom-text mx-auto">
                    <i className="fas fa-coins animated bounceIn" style={{color: "#FFAA00"}}/> <b>Coins</b> {stats.coins}

                    <span className="mx-5">
                         <i className="fas fa-vial animated bounceIn" style={{color: "#00AA00"}}/> <b>Level</b> 12
                    </span>

                    <i className="fas fa-gamepad animated bounceIn" style={{color: "#00AAAA"}}/> <b>Played
                    Time</b> {stats.timeplayed}
                </div>
            </div>


        </div>
    );
}

export default getCard;
