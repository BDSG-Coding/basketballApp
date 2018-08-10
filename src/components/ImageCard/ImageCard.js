import React from "react";
import "./ImageCard.css";

class ImageCard extends React.Component {
    render() {
        return (

            <div className="imageCard">
            <div className="img-container">
                <img src={this.props.imageCard} />
            </div>
            </div>
        );
    }

}










export default ImageCard;
