import React from 'react';


import SkyWars from "../../img/Skywars.png";

export function getSkywars(stats) {
    return (
        <div className="col-sm-4 mx-auto">
            <div className="card custom-card mb-4 shadow">
                <img className="card-img-top" src={SkyWars} alt="SkyWars Image"/>

                <div className="spacerLine"/>

                <div className="card-body my-2">
                    <div className="row mx-auto mb-1">
                        <div className="col card-custom-text">Kills</div>
                        <div className="col card-custom-text-right">{stats.skywars.kills}</div>
                    </div>
                    <div className="row mx-auto mb-1">
                        <div className="col card-custom-text">Deaths</div>
                        <div className="col card-custom-text-right">{stats.skywars.deaths}</div>
                    </div>
                    <div className="row mx-auto mb-1">
                        <div className="col card-custom-text">Time Played</div>
                        <div className="col card-custom-text-right">{stats.skywars.timeplayed}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default getSkywars;


