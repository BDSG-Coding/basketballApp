import React from "react";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import InfoCard from "./components/InfoCard";
import ScoreBoard from "./components/ScoreBoard";
import MessageCard from "./components/MessageCard";
import ImageCard from "./components/ImageCard";


const players = [{
  nameFirst: 'Michael',
  nameLast: 'Jordan',
  portrait: './images/jordan_start.jpg',
  height: "6-6",
  weight: "195 lbs",
  position: "Shooting Guard",
  midShot: 97,
  threePts: 87,
  postShot: 97,
  layup: 99,
  dunk: 95,
  defense: 99,
  rebounding: 65,
  athleticism: 94,
}, {
  nameFirst: 'Hakeem',
  nameLast: 'Olajuwon',
  portrait: './images/olajuwon_start.jpg',
  height: "7-0",
  weight: "255 lbs",
  position: "Center",
  midShot: 95,
  threePts: 70,
  postShot: 98,
  layup: 92,
  dunk: 80,
  defense: 98,
  rebounding: 98,
  athleticism: 89,
}]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      gameStart: false,
      selectedPlayers: [],
      messageArray: [],
      scoreLeft: 0,
      scoreRight: 0,
      player1Next: true,
      countDown: false,
      movesArray: ["dribbles behind the back!", "does a crossover!", "does a spin move!", "fakes left goes right!", "fakes right goes left!"],
     
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePlayerSelect = this.handlePlayerSelect.bind(this);
  }

  /* 
    state.midShot = player.midShot;
    state.threePts = player.threePts;
    state.postShot = player.postShot;
    state.layup = player.layup;
    state.dunk = player.dunk;
   */

renderImageCardLeft() {
if (this.state.imageCardLeft && this.state.hasTheBallLeft) {
  return (
   <ImageCard imageCard={this.state.selectedPlayers[0].portrait}/>
   
  );
}
else {

}
}

renderImageCardRight() {
  if (this.state.imageCardRight && this.state.hasTheBallRight) {
    return (
     <ImageCard imageCard={this.state.selectedPlayers[1].portrait}/>
     
    );
  }
  else {
  
  }

}

  finishGame() {
    console.log("finishGame");
  }

  ballHandling(player) {
    console.log("handleBall");
    let state = Object.assign({}, this.state);
    if (Math.random()>.5) {
state.messageArray.push(player.nameLast+ " "+state.movesArray[Math.floor(Math.random()*state.movesArray.length)]);

this.setState(state);
setTimeout(() => {
  this.ballHandling(player);
  
}, 1500)

    }
    else {
      setTimeout(() => {
        this.drawOffense(player);
      }, 1500)
    }
  }

  gameLoop() {

console.log("gameLoop")
    let state = Object.assign({}, this.state);
    if (state.scoreLeft > 9 || state.scoreRight > 9) {
      this.finishGame();
      return null;
    }
    
    let player1 = state.selectedPlayers[0];
    let player2 = state.selectedPlayers[1];

    if (state.player1Next) {
      state.messageArray.push(player1.nameLast+" has the ball ...");
      state.imageCardLeft = true;
      state.hasTheBallLeft = true;
      this.setState(state);
      setTimeout(() => {
        this.ballHandling(player1);
        this.setState({
          imageCardLeft: false,
          hasTheBallLeft: false,
        })
      }, 1500)
      
     
     
    }

    //player2
    if (!state.player1Next) {
      state.messageArray.push(player2.nameLast+" has the ball ...");
      state.imageCardRight = true;
      state.hasTheBallRight = true;
      this.setState(state);
      setTimeout(() => {
        this.ballHandling(player2);
       this.setState({
         imageCardRight: false,
         hasTheBallRight: false,
       }) 
      }, 1500)


    }

    else {

    }
  }

  drawOffense(player) {
console.log("drawOffense");
    let state = Object.assign({}, this.state);

    /* player.totalAtk = player.midShot+player.threePts+player.postShot+player.layup+player.dunk;
    player.midShotAC = 100* player.midShot / player.totalAtk;
    player.threePtsAC = 100* player.threePts / player.totalAtk;
    player.postShotAC = 100* player.postShot / player.totalAtk;
    player.layupAC = 100* player.layup / player.totalAtk;
    player.dunkAC = 100* player.dunk / player.totalAtk; */
    player.plays = ["midShot", "threePts", "postShot", "layup", "dunk"];
    
    player.currentPlay = player.plays[Math.floor(Math.random() * player.plays.length)];
   
  
    if (player.currentPlay === "midShot") {
      state.messageArray.push(player.nameLast + " goes for a midrange jumper!")
      this.setState(state);
      setTimeout(() => {
        this.passFail(player);
      }, 1500)
    }
    if (player.currentPlay === "threePts") {
      state.messageArray.push(player.nameLast + " shoots a three!")
      this.setState(state);
      setTimeout(() => {
        this.passFail(player);
      }, 1500)
    }
    if (player.currentPlay === "postShot") {
      state.messageArray.push(player.nameLast + " posts up and shoots!")
      this.setState(state);
      setTimeout(() => {
        this.passFail(player);
      }, 1500)
    }
    if (player.currentPlay === "layup") {
      state.messageArray.push(player.nameLast + " drives for a layup!")
      this.setState(state);
      setTimeout(() => {
        this.passFail(player);
      }, 1500)
    }
    if (player.currentPlay === "dunk") {
      state.messageArray.push(player.nameLast + " drives for a slam dunk!")
      this.setState(state);
      setTimeout(() => {
        this.passFail(player);
      }, 1500)
    }
    else {
      
    }

  }

  passFail(player) {
    
    console.log("passFail");
    let state = Object.assign({}, this.state);



    if (this.state.selectedPlayers.indexOf(player) === 0) {

      if (player.currentPlay === "threePts") {
        if (Math.random() > .5) {
          state.scoreLeft = state.scoreLeft + 3;
          state.player1Next = false;
          state.messageArray.push("He scores!")
          this.setState(state);

          setTimeout(() => {
            this.gameLoop();
          }, 3000)
        

        }
        else {
          state.messageArray.push("He misses!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
        
        }


      }

      if (player.currentPlay === "layup") {

        if (Math.random() > .5) {
          state.scoreLeft = state.scoreLeft + 2;
          state.player1Next = false;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)
      
        }
        else {
          state.messageArray.push(this.state.selectedPlayers[1].nameLast + " blocks the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
     
        }
      }

      if (player.currentPlay === "dunk") {

        if (Math.random() > .5) {
          state.scoreLeft = state.scoreLeft + 2;
          state.player1Next = false;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)
      
        }
        else {
          state.messageArray.push(this.state.selectedPlayers[1].nameLast + " blocks the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
     
        }
      }

      if (player.currentPlay === "midShot") {
        if (Math.random()>.5) {
          state.scoreLeft = state.scoreLeft + 2;
          state.player1Next = false;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)
        
        }
        else {
          state.messageArray.push("He misses!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
         
        }
      }

      if (player.currentPlay === "postShot") {
        if (Math.random()>.5) {
          state.scoreLeft = state.scoreLeft + 2;
          state.player1Next = false;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)
        
        }
        else {
          state.messageArray.push("He misses!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
         
        }

      }

    }


    if (this.state.selectedPlayers.indexOf(player) === 1) {

      if (player.currentPlay === "threePts") {
        if (Math.random() > .5) {
          state.scoreRight = state.scoreRight + 3;
          state.player1Next = true;
          state.messageArray.push("He scores!")
          this.setState(state);

          setTimeout(() => {
            this.gameLoop();
          }, 3000)
        

        }
        else {
          state.messageArray.push("He misses!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
        
        }


      }

      if (player.currentPlay === "layup") {

        if (Math.random() > .5) {
          state.scoreRight = state.scoreRight + 2;
          state.player1Next = true;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)
      
        }
        else {
          state.messageArray.push(this.state.selectedPlayers[0].nameLast + " blocks the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
     
        }
      }

      if (player.currentPlay === "dunk") {

        if (Math.random() > .5) {
          state.scoreRight = state.scoreRight + 2;
          state.player1Next = true;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)
      
        }
        else {
          state.messageArray.push(this.state.selectedPlayers[0].nameLast + " blocks the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
     
        }
      }

      if (player.currentPlay === "midShot") {
        if (Math.random()>.5) {
          state.scoreRight = state.scoreRight + 2;
          state.player1Next = true;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)
        
        }
        else {
          state.messageArray.push("He misses!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
         
        }
      }

      if (player.currentPlay === "postShot") {
        if (Math.random()>.5) {
          state.scoreRight = state.scoreRight + 2;
          state.player1Next = true;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)
        
        }
        else {
          state.messageArray.push("He misses!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)
         
        }

      }

    }
  }

  rebound() {
    console.log("rebound");
    let state = Object.assign({}, this.state);
    let player1 = state.selectedPlayers[0];
    let player2 = state.selectedPlayers[1];
  
    if (Math.random() > .5) {
      state.messageArray.push(player1.nameLast+" gets the rebound!");
      state.player1Next = true;
      this.setState(state);
      setTimeout(() => {
        this.gameLoop();
      }, 1500)
     
    }
    else {
      state.messageArray.push(player2.nameLast+" gets the rebound!");
      state.player1Next = false;
      this.setState(state);
      setTimeout(() => {
        this.gameLoop();
      }, 1500)
     
    }
  }

  handleClick(player, index) {
    let state = Object.assign({}, this.state);

    state.nameFirst = player.nameFirst;
    state.nameLast = player.nameLast;
    state.portrait = player.portrait;
    state.playerIndex = index;
    state.height = player.height;
    state.weight = player.weight;
    state.position = player.position;
    state.midShot = player.midShot;
    state.threePts = player.threePts;
    state.postShot = player.postShot;
    state.layup = player.layup;
    state.dunk = player.dunk;
    state.rebounding = player.rebounding;
    state.defense = player.defense;
    this.setState(state);


  }

  handlePlayerSelect() {
    let state = Object.assign({}, this.state);
    const player = players[this.state.playerIndex];



    if (!state.selectedPlayers.includes(player)) {
      state.selectedPlayers.push(player);
      this.setState(state);
    }


    if (state.selectedPlayers.length > 1) {
      state.countDown = true;
      this.setState(state);
      setTimeout(() => {
        this.setState({
          gameStart: true,
          countDown: false,
        });
        this.gameLoop();
      }, 1500)
    }

  }


  renderScoreBoardLeft() {

    if (this.state.gameStart && this.state.selectedPlayers[0]) {
      return (
        <ScoreBoard player={this.state.selectedPlayers[0].nameLast} score={this.state.scoreLeft} />
      )
    }

    else {
      return null;
    }



  }

  renderScoreBoardRight() {
    if (this.state.gameStart && this.state.selectedPlayers[1]) {
      return (
        <ScoreBoard player={this.state.selectedPlayers[1].nameLast} score={this.state.scoreRight} />
      )

    }
    else {
      return null;
    }
  }





  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Title countDown={this.state.countDown} gameStart={this.state.gameStart}><h1>Fantasy 1v1</h1><p><h2>Select Your Players</h2></p></Title>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2" id="left">
            <InfoCard nameFirst={this.state.nameFirst} nameLast={this.state.nameLast} onClick={() => this.handlePlayerSelect()} gameStart={this.state.gameStart} countDown={this.state.countDown}

              height={this.state.height} weight={this.state.weight} position={this.state.position} midShot={this.state.midShot} threePts={this.state.threePts} postShot={this.state.postShot} layup={this.state.layup}
              dunk={this.state.dunk} rebounding={this.state.rebounding} defense={this.state.defense}
            />
            {this.renderScoreBoardLeft()};
            {this.renderImageCardLeft()};
          </div>
          <div className="col-md-8" id="main">
            <MessageCard gameStart={this.state.gameStart} messageArray={this.state.messageArray} />

            {
              players.map((player, index) => (
                <FriendCard
                  countDown={this.state.countDown}
                  image={player.portrait}
                  onClick={() => this.handleClick(player, index)}
                  gameStart={this.state.gameStart}
                />
              ))

            }



          </div>
          <div className="col-md-2" id="right">
            {
              this.state.selectedPlayers.map((player, index) => (
                <FriendCard

                  image={player.portrait}
                  onClick={() => this.handleClick(player, index)}
                  gameStart={this.state.gameStart}
                />
              ))

            }
            {this.renderScoreBoardRight()};
            {this.renderImageCardRight()};
          </div>
        </div>

      </div>
    )

  }

}


export default App;
