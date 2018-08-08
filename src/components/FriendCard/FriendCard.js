import React from "react";
import "./FriendCard.css";



class FriendCard extends React.Component {
 

  render() {
   if (this.props.countDown) {
     return null;
   }
  
if (!this.props.gameStart) {
  
     return (



        <div className="card">
        <div className="img-container" onClick={this.props.onClick}>
          <img src={this.props.image} />
        </div>
       
      </div>
  
      );
  
    }
  
else {
  return null;
}
  }
}
  












export default FriendCard;
