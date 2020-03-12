import React,{Component} from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import AsideAdmin from "../../components/aside/asideAdmin.jsx";
import GeneralDashbord from "../../components/GeneralAnalyDashbord/GeneralDashbord.jsx";
import "./admin.css";
class Admin extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
        <>
        
        <HeaderAdmin/>
        <AsideAdmin/>
        <GeneralDashbord/>
        </>
        );
    }
}


export default Admin;