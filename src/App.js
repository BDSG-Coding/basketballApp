import React from "react";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import InfoCard from "./components/InfoCard";
import ScoreBoard from "./components/ScoreBoard";
import MessageCard from "./components/MessageCard";
import ImageCard from "./components/ImageCard";

// ["midShot", "postShot", "layup", "dunk", "threePts"];  
//["dribbles behind the back!", "does a crossover!", "does a spin move!", "fakes left goes right!", "fakes right goes left!"],

const players = [{
  nameFirst: 'Michael',
  nameLast: 'Jordan',

  portrait: './images/jordan/jordan_select.jpg',
  ball: './images/jordan/jordan_ball.jpg',
  layupImg: './images/jordan/jordan_layup.jpg',
  dunkImg: './images/jordan/jordan_dunk.jpg',
  midShotImg: './images/jordan/jordan_midShot.jpg',
 fadeAwayImg: './images/jordan/jordan_fadeAway.jpg',

  height: "6-6",
  heightInches: 78,
  weight: "195 lbs",
  position: "Shooting Guard",
  midShot: 97,
  threePts: 80,
  insideShot: 89,
  layup: 99,
  dunk: 99,
  ballHandle: 94,
  rebounding: 71,
  block: 85,
  shotCont: 92,
  steal: 99,
  athleticism: 97,
  plays: ["midShot", "midShot", "fadeAway", "fadeAway", "layup", "layup", "dunk", "dunk"],
  moves: ["stutter steps ...", "does a spin move!", "dribbles behind the back ...", "dribbles between the legs ...", "fakes left goes right!", "fakes right goes left!", "hesitates ...", "does a crossover!", "turns his back to the basket ...", "talks some trash ..."],
}, {
  nameFirst: 'Hakeem',
  nameLast: 'Olajuwon',

  portrait: './images/olajuwon/olajuwon_select.jpg',
  ball: './images/olajuwon/olajuwon_ball.jpg',
  fadeAwayImg: './images/olajuwon/olajuwon_fadeAway.jpg',
  dunkImg: './images/olajuwon/olajuwon_dunk.jpg',
  layupImg: './images/olajuwon/olajuwon_layup.jpg',
  hookShotImg: './images/olajuwon/olajuwon_hookShot.jpg',
  lowPostImg: './images/olajuwon/olajuwon_hookShot.jpg',
  midShotImg: './images/olajuwon/olajuwon_midShot.jpg',

  height: "7-0",
  heightInches: 84,
  weight: "255 lbs",
  position: "Center",
  midShot: 93,
  threePts: 70,
  insideShot: 97,
  layup: 91,
  dunk: 93,
  ballHandle: 73,
  rebounding: 94,
  block: 99,
  shotCont: 99,
  steal: 92,
  athleticism: 92,
  plays: ["midShot", "lowPost", "lowPost", "lowPost", "hookShot", "hookShot", "hookShot", "layup", "dunk", "fadeAway", "fadeAway"],
  moves: ["does the Dream Shake!", "hesitates ...", "backs down the defender ...", "stutter steps ...", "does a crossover!"],
}, {
  nameFirst: 'LeBron',
  nameLast: 'James',

  portrait: './images/james/james_select.jpg',
  ball: './images/james/james_ball.jpg',
  fadeAwayImg: './images/james/james_fadeAway.jpg',
  dunkImg: './images/james/james_dunk.jpg',
  layupImg: './images/james/james_layup.jpg',
  
  lowPostImg: './images/james/james_lowPost.jpg',
  midShotImg: './images/james/james_midShot.jpg',

  height: "6-8",
  heightInches: 80,
  weight: "250 lbs",
  position: "Small Forward",
  midShot: 93,
  threePts: 88,
  insideShot: 94,
  layup: 98,
  dunk: 91,
  ballHandle: 79,
  rebounding: 79,
  block: 83,
  shotCont: 89,
  steal: 81,
  athleticism: 94,
  plays: ["threePts", "midShot", "lowPost", "lowPost", "fadeAway", "fadeAway", "layup", "layup", "dunk", "dunk"],
  moves: ["does a crossover", "hesitates ...", "backs down the defender ...", "dribbles behind the back!", "creates distance with his arm ..."],
},{
  nameFirst: 'Shaquille',
  nameLast: "O'Neal",

  portrait: './images/oneal/oneal_select.jpg',
  ball: './images/oneal/oneal_ball.jpg',
  dunkImg: './images/oneal/oneal_dunk.jpg',
  layupImg: './images/oneal/oneal_layup.jpg',
  lowPostImg: './images/oneal/oneal_lowPost.jpg',
  hookShotImg: './images/oneal/oneal_lowPost.jpg',

  height: "7-1",
  heightInches: 85,
  weight: "325 lbs",
  position: "Center",
  midShot: 65,
  threePts: 25,
  insideShot: 99,
  layup: 98,
  dunk: 98,
  ballHandle: 67,
  rebounding: 98,
  block: 92,
  shotCont: 90,
  steal: 72,
  athleticism: 87,
  plays: ["layup", "dunk", "lowPost", "lowPost", "lowPost", "hookShot", "hookShot"],
  moves: ["pushes the defender ...", "backs into the defender ...", "backs into the defender ...", "does his tornado move!"],
},
{
  nameFirst: 'Stephen',
  nameLast: 'Curry',

  portrait: './images/curry/curry_select.jpg',
  layupImg: './images/curry/curry_layup.jpg',
  midShotImg: './images/curry/curry_midShot.jpg',
  ball: './images/curry/curry_ball.jpg',

  height: "6-3",
  heightInches: 75,
  weight: "185 lbs",
  position: "Point Guard",
  midShot: 99,
  threePts: 99,
  insideShot: 93,
  layup: 92,
  dunk: 40,
  ballHandle: 98,
  rebounding: 70,
  block: 70,
  shotCont: 88,
  steal: 94,
  athleticism: 93,
  plays: ["threePts", "threePts", "threePts", "threePts", "midShot", "midShot", "layup", "layup"],
  moves: ["does a crossover!", "hesitates ...", "dribbles behind the back!", "stutter steps ...", "dribbles between the legs ...", "does a spin move!"],
},{
  nameFirst: 'Kevin',
  nameLast: 'Durant',

  portrait: './images/durant/durant_select.jpg',
  ball: './images/durant/durant_ball.jpg',
  midShotImg: './images/durant/durant_midShot.jpg',
  dunkImg: './images/durant/durant_dunk.jpg',
  layupImg: './images/durant/durant_layup.jpg',
  fadeAwayImg: './images/durant/durant_fadeAway.jpg',


  height: "6-11",
  heightInches: 83,
  weight: "240 lbs",
  position: "Power Forward",
  midShot: 98,
  threePts: 98,
  insideShot: 91,
  layup: 88,
  dunk: 88,
  ballHandle: 93,
  rebounding: 85,
  block: 87,
  shotCont: 90,
  steal: 78,
  athleticism: 90,
  plays: ["threePts", "threePts", "threePts", "midShot", "fadeAway", "fadeAway", "layup", "dunk", "dunk"],
  moves: ["hesitates ...", "stutter steps ...", "does a crossover!", "fakes left goes right!", "fakes right goes left!"],
}];

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


    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePlayerSelect = this.handlePlayerSelect.bind(this);
  }


  renderImageCardLeft() {
    if (this.state.imageCardLeft && this.state.hasTheBallLeft) {
      return (
        <ImageCard imageCard={this.state.selectedPlayers[0].ball} />
      );
    }
  if (this.state.imageCardLeft && this.state.layupImg) {
    return (
      <ImageCard imageCard={this.state.selectedPlayers[0].layupImg} />
    )
  }
  if (this.state.imageCardLeft && this.state.midShotImg) {
    return (
      <ImageCard imageCard={this.state.selectedPlayers[0].midShotImg} />
    )
  }
  if (this.state.imageCardLeft && this.state.lowPostImg) {
    return (
      <ImageCard imageCard={this.state.selectedPlayers[0].lowPostImg} />
    )
  }
  if (this.state.imageCardLeft && this.state.dunkImg) {
    return (
      <ImageCard imageCard={this.state.selectedPlayers[0].dunkImg} />
    )
  }
  if (this.state.imageCardLeft && this.state.hookShotImg) {
    return (
      <ImageCard imageCard={this.state.selectedPlayers[0].hookShotImg} />
    )
  }
  if (this.state.imageCardLeft && this.state.fadeAwayImg) {
    return (
      <ImageCard imageCard={this.state.selectedPlayers[0].fadeAwayImg} />
    )
  }
    else {

    }
  }

  renderImageCardRight() {
    if (this.state.imageCardRight && this.state.hasTheBallRight) {
      return (
        <ImageCard imageCard={this.state.selectedPlayers[1].ball} />

      );
    }
    if (this.state.imageCardRight && this.state.layupImg) {
      return (
        <ImageCard imageCard={this.state.selectedPlayers[1].layupImg} />
      )
    }
    if (this.state.imageCardRight && this.state.midShotImg) {
      return (
        <ImageCard imageCard={this.state.selectedPlayers[1].midShotImg} />
      )
    }
    if (this.state.imageCardRight && this.state.lowPostImg) {
      return (
        <ImageCard imageCard={this.state.selectedPlayers[1].lowPostImg} />
      )
    }
    if (this.state.imageCardRight && this.state.dunkImg) {
      return (
        <ImageCard imageCard={this.state.selectedPlayers[1].dunkImg} />
      )
    }
    if (this.state.imageCardRight && this.state.hookShotImg) {
      return (
        <ImageCard imageCard={this.state.selectedPlayers[1].hookShotImg} />
      )
    }
    if (this.state.imageCardRight && this.state.fadeAwayImg) {
      return (
        <ImageCard imageCard={this.state.selectedPlayers[1].fadeAwayImg} />
      )
    }
      else {
  
      }
   

  }

  finishGame() {
    console.log("finishGame");
  }

  ballHandling(player) {
    console.log("ballHandling");
    let state = Object.assign({}, this.state);

    if (state.selectedPlayers.indexOf(player) === 0) {
      let stealMod = (player.ballHandle + player.athleticism - state.selectedPlayers[1].steal - state.selectedPlayers[1].athleticism) / 100;

      let keepBall = .90 + stealMod;
      console.log("P1 "+keepBall);
      if (keepBall > .95) {
        keepBall = .95;
      }
      if (keepBall < .80 && keepBall > .5) {
        keepBall = .80;
      }
      if (keepBall <= .5) {
        keepBall = .65;
      }
      console.log(keepBall);
      if (Math.random() < .55) {

        if (Math.random() > keepBall) {
          state.messageArray.push(state.selectedPlayers[1].nameLast + " steals the ball!");
          state.player1Next = false;
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 1500);

        }
        else {

          state.messageArray.push(player.nameLast + " " + player.moves[Math.floor(Math.random() * player.moves.length)]);

          this.setState(state);
          setTimeout(() => {
            this.ballHandling(player);

          }, 1500)
        }


      }
      else {
        setTimeout(() => {
          this.drawOffense(player);
        }, 1500)
      }

    }
    if (state.selectedPlayers.indexOf(player) === 1) {
      let stealMod = (player.ballHandle + player.athleticism - state.selectedPlayers[0].steal - state.selectedPlayers[0].athleticism) / 100;

      let keepBall = .90 + stealMod;
      console.log("P2 "+keepBall);
      if (keepBall > .95) {
        keepBall = .95;
      }
      if (keepBall < .80 && keepBall > .5) {
        keepBall = .80;
      }
      if (keepBall <= .5) {
        keepBall = .65;
      }
      console.log(keepBall);

      if (Math.random() < .55) {

        if (Math.random() > keepBall) {
          state.messageArray.push(state.selectedPlayers[0].nameLast + " steals the ball!");
          state.player1Next = true;
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 1500);

        }

        else {
          state.messageArray.push(player.nameLast + " " + player.moves[Math.floor(Math.random() * player.moves.length)]);

          this.setState(state);
          setTimeout(() => {
            this.ballHandling(player);

          }, 1500);

        }


      }
      else {
        setTimeout(() => {
          this.drawOffense(player);
        }, 1500)
      }

    }

  }

  gameLoop() {
    let state = Object.assign({}, this.state);
    let player1 = state.selectedPlayers[0];
    let player2 = state.selectedPlayers[1];

    console.log("gameLoop")

    if (state.scoreLeft > 20) {
      state.messageArray.push(player1.nameLast + " wins!");
      this.setState(state);
      return null;
    }

    if (state.scoreRight > 20) {
      state.messageArray.push(player2.nameLast + " wins!");
      this.setState(state);
      return null;
    }



    if (state.player1Next) {
      state.messageArray.push(player1.nameLast + " has the ball ...");
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
      state.messageArray.push(player2.nameLast + " has the ball ...");
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


    player.currentPlay = player.plays[Math.floor(Math.random() * player.plays.length)];

    if (player.currentPlay === "midShot") {
      if (state.selectedPlayers.indexOf(player)===0) {

        state.messageArray.push(player.nameLast + " shoots a mid-range jumper!")
        state.imageCardLeft = true;
        state.midShotImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardLeft: false,
            midShotImg: false,
          })
        }, 1500)

      }
      if (state.selectedPlayers.indexOf(player)===1) {

        state.messageArray.push(player.nameLast + " shoots a mid-range jumper!")
        state.imageCardRight = true;
        state.midShotImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardRight: false,
            midShotImg: false,
          })
        }, 1500)

      }
    }
    if (player.currentPlay === "threePts") {
      if (state.selectedPlayers.indexOf(player)===0) {

        state.messageArray.push(player.nameLast + " shoots a three!")
        state.imageCardLeft = true;
        state.midShotImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardLeft: false,
            midShotImg: false,
          })
        }, 1500)

      }
      if (state.selectedPlayers.indexOf(player)===1) {

        state.messageArray.push(player.nameLast + " shoots a three!")
        state.imageCardRight = true;
        state.midShotImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardRight: false,
            midShotImg: false,
          })
        }, 1500)

      }
    }
    if (player.currentPlay === "lowPost") {
      if (state.selectedPlayers.indexOf(player)===0) {

        state.messageArray.push(player.nameLast + " shoots from the low post!")
        state.imageCardLeft = true;
        state.lowPostImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardLeft: false,
            lowPostImg: false,
          })
        }, 1500)

      }
      if (state.selectedPlayers.indexOf(player)===1) {

        state.messageArray.push(player.nameLast + " shoots from the low post!")
        state.imageCardRight = true;
        state.lowPostImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardRight: false,
            lowPostImg: false,
          })
        }, 1500)

      }
    }
    if (player.currentPlay === "layup") {
          if (state.selectedPlayers.indexOf(player)===0) {

            state.messageArray.push(player.nameLast + " drives for a layup!")
            state.imageCardLeft = true;
            state.layupImg = true;
            this.setState(state);
            setTimeout(() => {
              this.passFail(player);
              this.setState({
                imageCardLeft: false,
                layupImg: false,
              })
            }, 1500)

          }
          if (state.selectedPlayers.indexOf(player)===1) {

            state.messageArray.push(player.nameLast + " drives for a layup!")
            state.imageCardRight = true;
            state.layupImg = true;
            this.setState(state);
            setTimeout(() => {
              this.passFail(player);
              this.setState({
                imageCardRight: false,
                layupImg: false,
              })
            }, 1500)

          }
    }
    if (player.currentPlay === "dunk") {
      if (state.selectedPlayers.indexOf(player)===0) {

        state.messageArray.push(player.nameLast + " drives for a slam dunk!")
        state.imageCardLeft = true;
        state.dunkImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardLeft: false,
            dunkImg: false,
          })
        }, 1500)

      }
      if (state.selectedPlayers.indexOf(player)===1) {

        state.messageArray.push(player.nameLast + " drives for a slam dunk!")
        state.imageCardRight = true;
        state.dunkImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardRight: false,
            dunkImg: false,
          })
        }, 1500)

      }
    }
    if (player.currentPlay === "fadeAway") {
      if (state.selectedPlayers.indexOf(player)===0) {

        state.messageArray.push(player.nameLast + " shoots a fadeaway!")
        state.imageCardLeft = true;
        state.fadeAwayImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardLeft: false,
            fadeAwayImg: false,
          })
        }, 1500)

      }
      if (state.selectedPlayers.indexOf(player)===1) {

        state.messageArray.push(player.nameLast + " shoots a fadeaway!")
        state.imageCardRight = true;
        state.fadeAwayImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardRight: false,
            fadeAwayImg: false,
          })
        }, 1500)

      }
    }
    if (player.currentPlay === "hookShot") {
      if (state.selectedPlayers.indexOf(player)===0) {

        state.messageArray.push(player.nameLast + " shoots a hook!")
        state.imageCardLeft = true;
        state.hookShotImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardLeft: false,
            hookShotImg: false,
          })
        }, 1500)

      }
      if (state.selectedPlayers.indexOf(player)===1) {

        state.messageArray.push(player.nameLast + " shoots a hook!")
        state.imageCardRight = true;
        state.hookShotImg = true;
        this.setState(state);
        setTimeout(() => {
          this.passFail(player);
          this.setState({
            imageCardRight: false,
            hookShotImg: false,
          })
        }, 1500)

      }
    }
    else {

    }

  }

  passFail(player) {

    console.log("passFail");
    let state = Object.assign({}, this.state);
    let player1 = state.selectedPlayers[0];
    let player2 = state.selectedPlayers[1];
    let heightDiff = player1.heightInches - player2.heightInches;
    let athDiff = player1.athleticism - player2.athleticism;
   
    if (state.selectedPlayers.indexOf(player) === 0) {

      if (player.currentPlay === "threePts") {
        let mod = (player1.threePts - player2.shotCont + (2*heightDiff) + athDiff) / 100;
        let num = .40 + mod;

        console.log("1threePts " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);

        if (Math.random() < num) {
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

        let mod = (player1.layup - player2.block + (2*heightDiff) + (athDiff) ) / 100;
        let num = .5 + mod;
        console.log("1layup " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
          state.scoreLeft = state.scoreLeft + 2;
          state.player1Next = false;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)

        }
        else {
          state.messageArray.push(this.state.selectedPlayers[1].nameLast + " stops the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)

        }
      }

      if (player.currentPlay === "dunk") {
        let mod = (player1.dunk - player2.block +(2*heightDiff) + athDiff) / 100;
        let num = .5 + mod;
        console.log("1dunk " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
          state.scoreLeft = state.scoreLeft + 2;
          state.player1Next = false;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)

        }
        else {
          state.messageArray.push(this.state.selectedPlayers[1].nameLast + " stops the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)

        }
      }

      if (player.currentPlay === "midShot") {
        let mod = (player1.midShot - player2.shotCont + (2*heightDiff) + athDiff) / 100;
        let num = .5 + mod;
        console.log("1midShot " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
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

      if (player.currentPlay === "lowPost") {
        let mod = (player1.insideShot - player2.block + (2.5*heightDiff) + athDiff) / 100;
        let num = .5 + mod;
        console.log("1lowPost " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
          state.scoreLeft = state.scoreLeft + 2;
          state.player1Next = false;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)

        }
        else {
          state.messageArray.push(this.state.selectedPlayers[1].nameLast + " stops the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)

        }

      }

      if (player.currentPlay === "fadeAway") {
        let mod = (player1.midShot - (.8*player2.shotCont) + (2*heightDiff) + athDiff) / 100;
        let num = .40 + mod;
        console.log("1fadeAway " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
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
      if (player.currentPlay === "hookShot") {
        let mod = (player1.insideShot - (.8*player2.block) + (2*heightDiff) + athDiff) / 100;
        let num = .5 + mod;
        console.log("1hookShot " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
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
        let mod = (player2.threePts - player1.shotCont - (2*heightDiff) - athDiff) / 100;
        let num = .40 + mod;
        console.log("2threePts " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
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
        let mod = (player2.layup - player1.block - (2*heightDiff) - athDiff) / 100;
        let num = .5 + mod;
        console.log("2layup " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
          state.scoreRight = state.scoreRight + 2;
          state.player1Next = true;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)

        }
        else {
          state.messageArray.push(this.state.selectedPlayers[0].nameLast + " stops the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)

        }
      }

      if (player.currentPlay === "dunk") {
        let mod = (player2.dunk - player1.block - (2*heightDiff) - athDiff) / 100;
        let num = .5 + mod;
        console.log("2dunk " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
          state.scoreRight = state.scoreRight + 2;
          state.player1Next = true;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)

        }
        else {
          state.messageArray.push(this.state.selectedPlayers[0].nameLast + " stops the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)

        }
      }

      if (player.currentPlay === "midShot") {
        let mod = (player2.midShot - player1.shotCont - (2*heightDiff) - athDiff) / 100;
        let num = .5 + mod;
        console.log("2midShot " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
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

      if (player.currentPlay === "lowPost") {
        let mod = (player2.insideShot - player1.block - (2.5*heightDiff) - athDiff) / 100;
        let num = .5 + mod;
        console.log("2lowPost " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
          state.scoreRight = state.scoreRight + 2;
          state.player1Next = true;
          state.messageArray.push("He scores!")
          this.setState(state);
          setTimeout(() => {
            this.gameLoop();
          }, 3000)

        }
        else {
          state.messageArray.push(this.state.selectedPlayers[0].nameLast + " stops the shot!")
          this.setState(state);
          setTimeout(() => {
            this.rebound();
          }, 1500)

        }

      }
      if (player.currentPlay === "hookShot") {
        let mod = (player2.insideShot - (.8*player1.block) - (2*heightDiff) - athDiff) / 100;
        let num = .5 + mod;
        console.log("2hookShot " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
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
      if (player.currentPlay === "fadeAway") {
        let mod = (player2.midShot - (.8*player1.shotCont) - (2*heightDiff) - athDiff) / 100;
        let num = .40 + mod;
        console.log("2fadeAway " + num);
        if (num > .9) {
          num = .9;
        }
        console.log(num);
        if (Math.random() < num) {
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
    let heightDiff = player1.heightInches - player2.heightInches;
    let athDiff = player1.athleticism - player2.athleticism; 
    let rebMod = (player1.rebounding - player2.rebounding + heightDiff + athDiff) / 100;
    let reb = .5 + rebMod;
    console.log(reb);
    if (reb < .1) {
      reb = .1;
    }
    if (reb > .9) {
      reb = .9;
    }
    if (Math.random() < reb) {
      state.messageArray.push(player1.nameLast + " gets the rebound!");
      state.player1Next = true;
      this.setState(state);
      setTimeout(() => {
        this.gameLoop();
      }, 1500)

    }
    else {
      state.messageArray.push(player2.nameLast + " gets the rebound!");
      state.player1Next = false;
      this.setState(state);
      setTimeout(() => {
        this.gameLoop();
      }, 1500)
    }
  }

  handleClick(player, index) {

    let state = Object.assign({}, this.state);

    state.playerIndex = index;

    state.portrait = player.portrait;

    state.nameFirst = player.nameFirst;
    state.nameLast = player.nameLast;
    state.height = player.height;
    state.heightInches = player.heightInches;
    state.weight = player.weight;
    state.position = player.position;
    state.midShot = player.midShot;
    state.threePts = player.threePts;
    state.insideShot = player.insideShot;
    state.layup = player.layup;
    state.dunk = player.dunk;
    state.ballHandle = player.ballHandle;
    state.rebounding = player.rebounding;
    state.block = player.block;
    state.shotCont = player.shotCont;
    state.steal = player.steal;
    state.athleticism = player.athleticism;
    state.plays = player.plays;
    state.moves = player.moves;

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
          <div className="col-md-2" id="left">
            <InfoCard nameFirst={this.state.nameFirst} nameLast={this.state.nameLast} onClick={() => this.handlePlayerSelect()} gameStart={this.state.gameStart} countDown={this.state.countDown}

              height={this.state.height} weight={this.state.weight} position={this.state.position} midShot={this.state.midShot} threePts={this.state.threePts} insideShot={this.state.insideShot} layup={this.state.layup}
              dunk={this.state.dunk}
              ballHandle={this.state.ballHandle}
              rebounding={this.state.rebounding}
              block={this.state.block}
              shotCont={this.state.shotCont}
              steal={this.state.steal}
              athleticism={this.state.athleticism}

            />
            {this.renderScoreBoardLeft()};
            {this.renderImageCardLeft()};
          </div>
          <div className="col-md-8" id="main">
            <Title countDown={this.state.countDown} gameStart={this.state.gameStart}><h1>Fantasy 1v1</h1><p><h2>Select Your Players</h2></p></Title>
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
              this.state.selectedPlayers.map((player) => (
                <FriendCard

                  image={player.portrait}

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
