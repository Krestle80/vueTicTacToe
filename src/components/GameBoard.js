export default class GameBoard {
    constructor(){
        this.cells = [     
            ['','',''], 
            ['','',''],
            ['','','']
        ]
    }
    claimTile(col, id, player) {
        
        if(this.cells[Number(col)][Number(id)] != ''){
          return
        }
        this.cells[col][id] = player
        console.log(this.cells)
      }
}