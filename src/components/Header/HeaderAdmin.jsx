import React,{Component} from "react";
import "./HeaderAdmin.css";
import Notification from "./images/notifications.svg";
import Ouss from "./images/ouss.jpg";

class HeaderAdmin extends Component{
    constructor(props){
        super(props);
        this.state={
            clicked :false
        }
    }
    if (clicked){

    }
    render(){
        return(
        <>
        <div className={"main_header_admin"}>
            <nav className="navbar navbar-static-top navbar_header_admin">
                <div className="profile_admin">
                    <div className="search_admin input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-flat" type="submit" name="search">
                                <i className="fontSearch fa fa-search "></i>
                            </button>
                        </span>
                        <input type="text" className="form-control" placeholder="search"/>
                    </div>
                    <div className="buttons_nav">
                        <a href="#">
                            Create+
                        </a>
                        <a href="#">
                            Inbox
                        </a>
                        <a href="#">
                            Help
                        </a>
                        <a href="#">
                            Settings
                        </a>
                        <a href="#" className="homeButtonAdmin">
                            Home
                        </a>
                    </div>
                    <div className="profileAd">
                        
                    </div>
                    <a href="#" className="nameAdmin">
                        <img src={Ouss} alt="usernamePhoto"/>
                        <div className="flexCol">
                        <span>@username</span>
                        <p>-CEO of travel agency</p>
                        </div>
                    </a>
                    <a href="#" className="notification_admin">
                        <img src={Notification} alt="notification"/>
                    </a>
                    <a href="#">

                    </a>
                </div>
            </nav>
        </div>
        </>
        );
    }
}


export default HeaderAdmin;