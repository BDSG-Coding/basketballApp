import React from "react";
import "./ScoreBoard.css";




class ScoreBoard extends React.Component {


  render() {
  
    
      return (
        <div className="score">
        <h1>{this.props.player}</h1><br />
        <h2>Score: {this.props.score} </h2>
        
        </div>
  
      );
  }
   
  
  
  }











export default ScoreBoard;
