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
     
      Mid-range: {this.props.midShot} <br />
      Three Pointer: {this.props.threePts} < br />
      Inside Shot: {this.props.insideShot} <br />
      Layup: {this.props.layup} <br />
      Dunk: {this.props.dunk} <br />
      Ball Handling: {this.props.ballHandle} <br />
      Rebound: {this.props.rebounding} <br /> 
      Block: {this.props.block} <br />
      Shot Contest: {this.props.shotCont} < br />
      Steal: {this.props.steal} <br />
      Athleticism: {this.props.athleticism} <br />
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
