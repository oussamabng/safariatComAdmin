import React,{Component} from "react";
import {Card} from "react-bootstrap"
import StarRatingComponent from 'react-star-rating-component';
import "./Card.css";

class MyCard extends Component{
    constructor(props){
        super(props);
        this.state={
            rating : 4
        }
    }
    render(){
        const {rating} = this.state;
        const {Img,Title,Rate} = this.props;
        return(
            <Card style={{ width: '16rem',height:"18rem" }}>
  <Card.Img className="rounded-lg" variant="top" src={Img} />
  <Card.Body className="pt-1 pl-1">
        <Card.Title className="mb-0">{Title}</Card.Title>
    <Card.Text>
     <div className="productInfo">
         <div className="productInfo card-slider"><h1>Rate  <p>( based on {Rate} reviews)</p></h1></div>
         <div className="  my-staring">
                 <StarRatingComponent
                 name="rate1"
                 starCount={5}
                 value={rating}/>
            </div>
     </div>
    </Card.Text>
  </Card.Body>
</Card>
        )
    }
}
export default MyCard;