import React from "react";
import "./MessageCard.css";

class MessageCard extends React.Component {





render() {

  if (this.props.gameStart) {

    return (
<div className = "messageCard" >
{this.props.messageArray.map(message => (
  <p>{message}</p>
))}
</div>

    );
}
 
else {
  return null;
}
}

}










export default MessageCard;
