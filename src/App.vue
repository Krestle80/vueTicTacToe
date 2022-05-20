<script>
import HelloWorld from './components/HelloWorld.vue'
import GameBoard from './components/GameBoard'
export default {
  data() {return {
    board : new GameBoard,
    playerTac:"x"

  }
    
  },
  methods : {

    threeInRow(player){
        //verical rows
        for(i =0; i<3; i++){
          if(this.board.cells[i][0] === player && this.board.cells[i][1] && this.board.cells[i][2]){
            return true
          }
        }
    }
  }
  

}


</script>

<template>

  <main class = "gameBoard">
    
  <div class = "col1">
    <div class="tileHolder">
      <div v-for="(tile, index) in board.cells[0]" :key="index">
        <button v-if="tile === ''" class = 'empty' @click="board.claimTile(0,index, playerTac)" >
        </button>
        <div v-else-if="tile === 'x'" class = 'x'>
          <font-awesome-icon :icon="['fas', 'x']" size="6x" />
        </div>
        <div v-else class = 'o'>
          <font-awesome-icon :icon="['fas', 'o']" size="6x" />
        </div>
      </div>
    </div>
  </div>
  <div class = "col2">
    <div class="tileHolder">
      <div v-for="(tile, index) in board.cells[1]" :key="index">
        <button v-if="tile === ''" class = 'empty' @click="board.claimTile(1,index, playerTac)" >
        </button>
        <div v-else-if="tile === 'x'" class = 'x'>
          <font-awesome-icon :icon="['fas', 'x']" size="6x" />
        </div>
        <div v-else class = 'o'>
          <font-awesome-icon :icon="['fas', 'o']" size="6x" />
        </div>
      </div>
    </div>
  </div>
  <div class = "col3">
    <div class="tileHolder">
      <div v-for="(tile, index) in board.cells[2]" :key="index">
        <button v-if="tile === ''" class = 'empty' @click="board.claimTile(2,index, playerTac)" >
        </button>
        <div v-else-if="tile === 'x'" class = 'x'>
          <font-awesome-icon :icon="['fas', 'x']" size="6x" />
        </div>
        <div v-else class = 'o'>
          <font-awesome-icon :icon="['fas', 'o']" size="6x" />
        </div>
      </div>
    </div>
  </div>
  
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  width: 100%;
  height: 200%;
  font-weight: normal;
  display: flex;
  justify-content: center;
  margin-top: 10%;
}

.gameBoard {
  width: 700px;
  height: 100%;
  display: grid;
  gap: 10px;
  padding: 10px;
}

.empty{
  background-color: aquamarine;
  height: 200px;
  width: 200px;
  margin-bottom: 25px;
  margin-bottom: 25px;
  border: solid 5px white;
  border-radius: 15px;
}
.x{
  background-color: aquamarine;
  height: 200px;
  width: 200px;
  margin-bottom: 25px;
  margin-bottom: 25px;
  color:#2183b0;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}
.o{
  background-color: aquamarine;
  height: 200px;
  width: 200px;
  margin-bottom: 25px;
  margin-bottom: 25px;
  color:#2183b0;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
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
</style>
