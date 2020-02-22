import React, { Component } from 'react';
import {} from "react-bootstrap";
import "./asideAdmin.css";
import AsideSvg from "./images/AsideSvg.png";
import Report from "./images/report.svg";
import Business from "./images/business-and-finance.svg";
import Crm from "./images/crm.svg";
import Plus from "./images/plus.svg";
import Compass from "./images/compass.svg";
import Logout from "./images/logout.svg";
class AsideAdmin extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <>
            <aside className="mainAsideAdmin">
                <div className="mainAsideSection">
                    <div className="ImageAside">
                        <img src={AsideSvg} alt="svg"/>
                    </div>
                <div className="sidebarAdmin">
                    <ul>
                        <li className="active">
                            
                            <a href="#" >
                                <img src={Report} alt="Report"/>
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <img src={Business} alt="Report"/>
                            </a>
                        </li >
                        <li className="">
                            <a href="#">
                                <img src={Crm} alt="Report"/>
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <img src={Plus} alt="Report"/>
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <img src={Compass} alt="Report"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="GetOutAdmin">
                    <a href="#">
                    <hr className="borderTop"/>
                    <img src={Logout} alt="logout"/>
                    </a>
                </div>
                </div>
            </aside>
            </>
        )
    }

    

}

export default AsideAdmin;