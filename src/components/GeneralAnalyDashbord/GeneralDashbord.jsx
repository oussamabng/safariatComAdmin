import React, { Component } from 'react';
import "./GeneralDashbord.css";
class GeneralDashbord extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <>
            <section className="mainGeneralDashbord">
                <div className="GeneralDash">
                    <h1>
                    General analytic dashboard
                    </h1>
                </div>
                <div className="mainCardsGeneral">
                <div className="generalCards">
                <div className="mainCard">
                <div className="iconCard tache"></div>
                <div className="cardInformations">
                    <span>total tours</span>
                    <p>251</p>
                </div>
            </div>
                </div>
                <div className="generalCards">
                <div className="mainCard">
                <div className="iconCard timer"></div>
                <div className="cardInformations">
                    <span>pending orders</span>
                    <p>7</p>
                </div>
            </div>
                </div>
                <div className="generalCards">
                <div className="mainCard">
                <div className="iconCard v"></div>
                <div className="cardInformations">
                    <span>todays's visitors</span>
                    <p>42</p>
                </div>
            </div>
                </div>
                <div className="generalCards">
                <div className="mainCard">
                <div className="iconCard mail"></div>
                <div className="cardInformations">
                    <span>pending messages</span>
                    <p>21</p>
                </div>
            </div>
                </div>
                </div>
                
            </section>
            </>
        )
    }
}

export default GeneralDashbord;