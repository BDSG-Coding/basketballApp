import React from "react";
import "./InfoCard.css";

class InfoCard extends React.Component {





render() {
if (this.props.countDown) {
  return null;
}

  if (this.props.nameFirst && this.props.nameLast && !this.props.gameStart) {

    return (
      <div className="info" >
      {this.props.nameFirst+" "+this.props.nameLast} <br />
      {this.props.position} <br />
      Height: {this.props.height} <br />
      Weight: {this.props.weight} <br />
     
      Midrange: {this.props.midShot} <br />
      Three Pointer: {this.props.threePts} < br />
      Post Shot: {this.props.postShot} <br />
      Layup: {this.props.layup} <br />
      Dunk: {this.props.dunk} <br />
      Rebounding: {this.props.rebounding} <br /> 
      Defense: {this.props.defense} <br />
<hr />
      <button onClick={this.props.onClick}>Select</button>
     </div>

    );
}
 
else {
  return null;
}
}

}










export default InfoCard;
