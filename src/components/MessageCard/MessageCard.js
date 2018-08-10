import React from "react";
import "./MessageCard.css";

class MessageCard extends React.Component {

  scrollToBottom = () => {
    if (!this.messagesEnd) {
      return;
    }
    console.log(this.messagesEnd)
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    if (!this.props.gameStart) {
      return null;
    }

    return (
      <div className="messageCard">
        {this.props.messageArray.map(message => (
          <p>{message}</p>
        ))}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>

    );
  }

}










export default MessageCard;
