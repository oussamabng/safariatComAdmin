import React,{Component} from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import AsideAdmin from "../../components/aside/asideAdmin.jsx";
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
        </>
        );
    }
}


export default Admin;