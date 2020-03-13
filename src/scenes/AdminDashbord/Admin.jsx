import React,{Component} from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import AsideAdmin from "../../components/aside/asideAdmin.jsx";
import "./admin.css";
import GenerlaAnalystics from "../../components/GeneralAnalyDashbord/GenerlaAnalystics.jsx";
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
        <GenerlaAnalystics/>
        </>
        );
    }
}


export default Admin;