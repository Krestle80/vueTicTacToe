<script>
import HelloWorld from './components/HelloWorld.vue'
import BottomButton from './components/BottomButton.vue'
import GameBoard from './components/GameBoard'
export default {
  data() {return {
    playerTac:"x",
    aiTac:"o",
    board : new GameBoard(this.playerTac, this.aiTac),
    winner: ''
  }
    
  },
  methods : {
    refresh(){
        this.board = new GameBoard(this.playerTac, this.aiTac)
        this.winner =''
        this.$forceUpdate()
    },
    swapTacs(){
      if(this.playerTac == 'x'){
        this.playerTac = 'o'
        this.aiTac = 'x'  
      }
      else if(this.playerTac == 'o'){
        this.playerTac = 'x'
        this.aiTac = 'o'  
      } 
      for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
          if(this.board.cells[i][j] === "x"){
            this.board.cells[i][j] = "o"
          }
          else if(this.board.cells[i][j] === "o"){
            this.board.cells[i][j] = "x"
          }
        }
      }
      this.$forceUpdate()
    },
    //places a tac and has the ai respond
    placeTac(col, row){
      //here to see if board is full
      let checkFullBoard = () =>{
        for(let i = 0; i<3; i++){
          for(let j = 0; j<3; j++){
            if(this.board.cells[i][j] === ""){
              return false
            }
          }
        }
        return true
      }
      //prevents clicking tiles after a winner is picked
      if(this.winner){
        return
      }
      //places Tac where player clicked
      this.board.claimTile(col, row, this.playerTac)
      if(this.board.threeInRow(this.playerTac)){
        this.winner = this.playerTac
        return
      }
      if(checkFullBoard())this.winner = 'none'
      let miniMaxed = this.miniMax(this.board.copyBoard(), this.aiTac)
      this.board.claimTile(Number(miniMaxed.move.col), Number(miniMaxed.move.row), this.aiTac)
      this.$forceUpdate()
      if(this.board.threeInRow(this.aiTac)){
        this.winner = this.aiTac
        return
      }
      if(checkFullBoard())this.winner = 'none'

    },
    miniMax(board, player, depth = 1){

      if (board.threeInRow(this.playerTac)|| board.threeInRow(this.aiTac)) {
        let swapSign = 1
        if(board.threeInRow(this.playerTac)) swapSign -=2
        return {
          score: (100 + depth)*swapSign,
          move: null
        }
      }

      let bestScore = player === this.aiTac ? -10000 : 10000;
      let bestMove = {}
      let moves = board.getMoves()
      for(let i= 0; i < moves.length; i++){
        let move = moves[i]
        let copy = board.copyBoard()
        copy.claimTile(move.col, move.row, player)
        let score = this.miniMax(copy,player === this.aiTac ? this.playerTac: this.aiTac, depth + 1 ).score 
        if((player === this.aiTac && bestScore < score)||(player === this.playerTac && bestScore > score)){
          bestScore = score
          bestMove = moves[i]
        }
      }
    return { move: bestMove, score: bestScore}
    },
    aiFirst(){
      this.board.claimTile(1,1,this.aiTac)
    }
  },
  components: {
    BottomButton
  }  

}


</script>

<template>
  <div id="outerShell">
    <div id="titleHolder">

      <h1 v-if="winner === playerTac" class="title">You Win</h1> 
      <h1 v-else-if="winner === aiTac" class="title">You Lose</h1>
      <h1 v-else-if="winner === 'none'" class="title">Draw</h1>  
      <h1 v-else class="title">Tic Tac Toe</h1> 
    </div>
    <main>
      <div class = "gameBoard">
        <div class = "col1">
          <div class="tileHolder">
            <div v-for="(tile, index) in board.cells[0]" :key="index">
              <button v-if="tile === ''" class = 'empty tile' @click="placeTac(0,index)" >
              </button>
              <div v-else-if="tile === 'x'" class = 'tile'>
                <font-awesome-icon :icon="['fas', 'x']" size="6x" />
              </div>
              <div v-else class = 'tile'>
                <font-awesome-icon :icon="['fas', 'o']" size="6x" />
              </div>
            </div>
            <BottomButton @click="refresh" name="Reset"></BottomButton>
          </div>
        </div>
        <div class = "col2">
          <div class="tileHolder">
            <div v-for="(tile, index) in board.cells[1]" :key="index">
              <button v-if="tile === ''" class = 'empty tile' @click="placeTac(1,index)" >
              </button>
              <div v-else-if="tile === 'x'" class = 'tile'>
                <font-awesome-icon :icon="['fas', 'x']" size="6x" />
              </div>
              <div v-else class = 'tile'>
                <font-awesome-icon :icon="['fas', 'o']" size="6x" />
              </div>
            </div>
            <BottomButton v-if="playerTac === 'o'" @click="swapTacs" name="Swap To X's"></BottomButton>
            <BottomButton v-else-if="playerTac === 'x'" @click="swapTacs" name="Swap To O's"></BottomButton>
          </div>
        </div>
        <div class = "col3">
          <div class="tileHolder">
            <div v-for="(tile, index) in board.cells[2]" :key="index">
              <button v-if="tile === ''" class = 'empty tile' @click="placeTac(2,index)" >
              </button>
              <div v-else-if="tile === 'tile'" class = 'tile'>
                <font-awesome-icon :icon="['fas', 'x']" size="6x" />
              </div>
              <div v-else class = 'tile'>
                <font-awesome-icon :icon="['fas', 'o']" size="6x" />
              </div>
            </div>
            <BottomButton @click="aiFirst" name="Ai First"></BottomButton>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  width: 100%;
  height: 100%;
  font-weight: normal;
  display: flex;
  justify-content: center;
}
#outerShell {
  display: flex;
  flex-direction: column;
}
#titleHolder {
  height:20%;
  display: flex;
  justify-content: center;

}
.title{
  font-size: 80px;
  color:wheat
}
.gameBoard {
  width: 700px;
  height: 100%;
  padding: 10px;
  display: grid;
  gap: 10px;
}
.tile{
  height: 200px;
  width: 200px;
  border-radius: 15px;
  margin-bottom: 25px;
  margin-bottom: 25px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  color:#2183b0;
}
.empty{
  border: solid 5px wheat;
}



.col1 {
  grid-column-start: 1;
  grid-column-end: 2;
}

.col2 {
  grid-column-start: 2;
  grid-column-end: 3;
}
.col3 {
  grid-column-start: 3;
  grid-column-end: 4;
}

.tileHolder{
  display:flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-height: 875px)  {
  .title{
    font-size:60px;
  }
  .gameBoard{
    width:500px;
    gap:7px;
  }
  .tile{
    width:150px;
    height:150px;
  }

}
@media only screen and (max-height: 600px)  {
  .gameBoard{
    width:300px;
    padding:0px;
    gap:0px;
  }
  .tile{
    width:100px;
    height:100px;
  }
}
@media only screen and (max-width: 875px)  {
  .title{
    font-size:60px;
  }
  .gameBoard{
    width:500px;
    gap:7px;
  }
  .tile{
    width:150px;
    height:150px;
  }
@media only screen and (max-width: 400px)  {
  .gameBoard{
    width:300px;
    padding:0px;
    gap:0px;
  }
  .tile{
    width:100px;
    height:100px;
  }
}
}
</style>
