import { minigameConfig } from "./minigame";
import { SkyrimMiniGame } from "./skyrim";
import "./style.css";
console.log(`Hello World`);

const btn = document.getElementById("btn");
const myApp = document.getElementById("myApp");
let myGame: any;

let myReward = 0;

btn.addEventListener("click", () => {
  let config: minigameConfig = {
    divName: "gameDiv",
    gameData: {
      difficulty: "low",
    },
    parent: myApp,
    onSuccess: () => {
      console.trace("win");
      setTimeout(() => {
        //unload Game
        myGame.destroy();
        myGame = null;
        myReward = Math.floor(Math.random() * 3) + 1;
        console.log("my reward: ", myReward);
      }, 2000);
    },
    onFail: () => {
      console.log("fail");
      setTimeout(() => {
        //unload Game
        myGame.destroy();
        myGame = null;
        myReward = 0;
        console.log("my reward: ", myReward);
      }, 2000);
    },
    onCancel: () => {
      console.log("cancelled");
      setTimeout(() => {
        //unload Game
        myGame.destroy();
        myGame = null;
        myReward = 0;
        console.log("my reward: ", myReward);
      }, 2000);
    },
    size: { x: 1200, y: 800 },
  };
  if (myGame == undefined) {
    myGame = new SkyrimMiniGame(config);
    myGame.init();
  }
});
