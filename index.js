function findBestSpot(landWidth, landHeight, exploitationWidth, exploitationHeight, goldMines) {
  //creating the total area array
  //criando o array da area total
  let totalArea=[];
  if(!landWidth&&!landHeight){
  }
 else if(!landWidth){
  }
  else if(!landHeight){
  }
else{
  for(let i=0;i<landWidth;i++){
      for(let a=0;a<landHeight;a++){
        let coordinatesObject={x:i,y:a}
        totalArea.push(coordinatesObject)
      }
  }
}
 
//creating an array with all exploration possobilities, 
//criando um array com todas as possibilidades de areas de exploracao,esse array contem varios arrays
let explorationPossobilities=[]
totalArea.forEach(area=>{
    if(area.x+exploitationWidth<=landWidth&&area.y+exploitationHeight<=landHeight){
      let explorationArea=[]
      if(!exploitationWidth&&!exploitationHeight){
        return
      }
     else if(!exploitationWidth){
     return
      }
      else if(!exploitationHeight){
      return            
      }
else{
  for(let h=0;h<exploitationWidth;h++){
      for(let b=0;b<exploitationHeight;b++){
        let coordinatesExploration={x:area.x+h,y:area.y+b}
        explorationArea.push(coordinatesExploration)
      }
  }
}
      explorationPossobilities.push(explorationArea)
    }})

//modifiying the exploration possibilities array, so it identifies each square has having gold with in it
// and showing the total of gold squares on each explored land
// modificando a explorationPossibilities array, para que analise que cada quadrado tem ouro nele, e mostrando
// o total de quadrados com ouro em cada area explorada
explorationPossobilities.forEach(areas=>{
    areas.forEach(area=>{
      goldMines.map(goldArea=>{
          if(goldArea.x==area.x&&goldArea.y==area.y){
              area.status=true
              if(!areas.total){
                  areas.total=1
              }
              else areas.total+=1
        }
          else {
                area.status=false 
                if(!areas.total){
                  areas.total=0
              }
                }
        })
      })
    })


        //creating an array totalValeus, storing all the amount of gold  on each explored area
        //criando um array totalValeus, no qual armazena a quantidade de ouro em cada area explorada
let totalValeus=[]
explorationPossobilities.forEach(areas=>{
    if(areas.total){
      totalValeus.push(areas.total)
    }
})
//getting the max value of the totalValue array, so we can filter the exploration area with the maximum
// amount of  gold- English
// conseguindo o valor maximo do array totalValue, para assim poder filtrar as areas exploradas que possuem
// a maior quantidade de ouro- pt-br
let max = Math.max(...totalValeus);
let filteredPossobilities=explorationPossobilities.filter(areas=>areas.total===max)
//if the filteredPossobilities array is empty, return 0 gold mines, and standart x:0,y:0
//se o array filteredPossobilities esta vazio, return 0 goldMines, e x:0,y:0
if(!filteredPossobilities.length){
return {
  coordinates:{x:0,y:0},
    goldMines:0
}

}
// return the first element of filtered possobilities, in this case the area with most gold
// and smallest x and y value, and goldMines return the total gold on the area above
// return o primeiro elemento do array filteredPossobilities, nesse caso seria a area explorada com mais ouro
// e que possui menor valor de x e y, e goldMines retorna o total de ouro na area nessa area
return {
coordinates:{x:filteredPossobilities[0][0].x,y:filteredPossobilities[0][0].y},
goldMines:filteredPossobilities[0].total,
}

}

module.exports = findBestSpot;


