import React from "react";


import {
    NavLink
} from "react-router-dom";

//<a href={stats.playerName} className="custom-card"/>

function getCard(stats) {

    return (
        <div key={stats.playerName} className="col-sm-4 mx-auto">
            <div className="card custom-card mb-4 shadow">
                <NavLink exact to={"@" + stats.playerName}> </NavLink>

                <div className="avatarImage mx-auto my-4 align-items-center avatarShadow">
                    <div className="avatarImage-Player"
                         style={{backgroundImage: 'url(https://crafatar.com/renders/body/' + stats.uuid + '?overlay&default=MHF_Steve)'}}/>
                </div>

                <div className="avatarName">{stats.playerName}</div>
                <div className="avatarRank">{stats.rank.toUpperCase()}</div>

                <div className="spacerLine"/>

                <div className="card-body my-2">
                    <div className="row mx-auto mb-1">
                        <div className="col card-custom-text">Coins</div>
                        <div className="col card-custom-text-right">{stats.coins}</div>
                    </div>
                    <div className="row mx-auto mb-1">
                        <div className="col card-custom-text">Total Kills</div>
                        <div className="col card-custom-text-right">{stats.kills}</div>
                    </div>
                    <div className="row mx-auto mb-1">
                        <div className="col card-custom-text">Time Played</div>
                        <div className="col card-custom-text-right">{stats.timeplayed}</div>
                    </div>
                    <div className="row mx-auto mb-1">
                        <div className="col card-custom-text">Achievments</div>
                        <div className="col card-custom-text-right">1000</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default getCard;
