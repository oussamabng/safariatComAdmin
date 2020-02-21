import React,{Component} from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";

class Admin extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
        <>
        <HeaderAdmin/>
        </>
        );
    }
}


export default Admin;