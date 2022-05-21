export default class GameBoard {
  constructor(player, ai){
      this.cells = [     
          ['','',''], 
          ['','',''],
          ['','','']
      ]
      this.playerTac = player
      this.aiTac = ai
  }
  claimTile(col, id, player) {
    
    if(this.cells[Number(col)][Number(id)] != ''){
      return
    }
    this.cells[col][id] = player
  }
  scoreGameState(){
    let score = 0
    if(this.threeInRow(this.playerTac)){
      score -= 100
    }
    else if(this.threeInRow(this.aiTac)){
      score += 100
    }
    return score
  }
  //player param = x or o 
  threeInRow(player){
      //columns
      for(let i = 0; i<3; i++){
        if(this.cells[i][0] === player && this.cells[i][1] === player && this.cells[i][2] === player){
          return true
        }
      }
      //rows
      for(let i = 0; i<3; i++){
        if(this.cells[0][i] === player && this.cells[1][i] === player && this.cells[2][i] === player){
          return true
        }
      }
      //diagnals
      if((this.cells[0][0] === player && this.cells[1][1] === player && this.cells[2][2] === player) ||(this.cells[0][2] === player && this.cells[1][1] === player && this.cells[2][0] === player)){
        return true
      }
      return false
  }
  getMoves (){
    let moves = []
    for(let i = 0; i < 3; i++){
      for(let j = 0; j<3; j++){
        if(this.cells[i][j] === ''){
          moves.push({col: i, row: j})
        }
      }
    }
    if(moves){
      return moves
    }
    else return false
  }
  copyBoard(){
    let copy = new GameBoard
    for(let i = 0; i<3; i++){
      for(let j = 0; j<3; j++){
        copy.cells[i][j] = this.cells[i][j]
      }
    }
    return copy
  }
  isGameOver(){
    return this.getMoves === false || this.threeInRow('x') || this.threeInRow('y')
  }
}