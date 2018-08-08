import React from "react";
import "./Title.css";



class Title extends React.Component {

render () {

if (this.props.countDown) {
    return (
<h1>Game Starting ...</h1>

    )
}

   if (!this.props.gameStart) { 
return (
<h1 className="title">{this.props.children}</h1>
);
   }
   else {
       return null;
   }
}
}


export default Title;
