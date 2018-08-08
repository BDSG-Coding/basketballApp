import React from "react";
import "./ImageCard.css";

class ImageCard extends React.Component {





render() {
return (

<div className="imageCard">
<img src={this.props.imageCard} />
</div>
);
}

}










export default ImageCard;
