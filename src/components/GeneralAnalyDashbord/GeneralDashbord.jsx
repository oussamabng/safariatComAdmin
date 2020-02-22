import React, { Component } from 'react';
import { Progress } from 'antd';
import "./GeneralDashbord.css";
class GeneralDashbord extends Component{
    constructor(props){
        super(props);
        this.state={
            percent:0,
            percentEM:0,
            percentS:70,
            percentE :18
        }
    }
    componentDidMount = ()=>{
        const interv = setInterval(()=>{
            if (this.state.percent === this.state.percentS){
                clearInterval(interv);
            }else{
                this.setState({
                    percent : this.state.percent+1
                });
            }
        },10)
        const intervE = setInterval(()=>{
            if (this.state.percentEM === this.state.percentE){
                clearInterval(intervE);
            }else{
                this.setState({
                    percentEM : this.state.percentEM+1
                });
            }
        },10)
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
            <section className="progressCirclesAdmin">
            <div className="circlesProgress">
                <div className="progressWithTitle">
                <Progress type="circle" strokeColor="#55E63A" percent={this.state.percent} width={120} strokeWidth="9"/>
                <p>weekly</p>
                <div className="titleCircleProg">
                <h1>Satisfied Travellers</h1>
                </div>
                </div>
                <div className="progressWithTitle">
                <Progress type="circle" strokeColor="#E67F3A" percent={this.state.percentEM} width={120} strokeWidth="9"/>
                <p>weekly</p>
                <div className="titleCircleProg">
                <h1>Satisfied Employeers</h1>
                </div>
                </div> 
                <div className="progressWithTitle">
                <Progress type="circle" strokeColor="#F8E91F" percent={this.state.percent} width={120} strokeWidth="9"/>
                <p>weekly</p>
                <div className="titleCircleProg">
                <h1>Search Traffic</h1>
                </div>
                </div> 
            </div>
            </section>
          
            </>
            
        )
    }
}

export default GeneralDashbord;