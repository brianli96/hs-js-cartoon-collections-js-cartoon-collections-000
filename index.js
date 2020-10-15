function dwarfRollCall(dwarves) {
  let newString = "";
  let number = 1;
  if(dwarves === [])
  {
    return null;
  }
  else
  {
    for(let i = 0; i < dwarves.length; i++)
    {
       newString += `${number}. ${dwarves[i]} `
      number++;
    }
    return newString;
  }
}

function summonCaptainPlanet(planeteerCalls){
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}

var dwarves = ["Dopey", "Grumpy", "Bashful"];
console.log(dwarfRollCall(dwarves));
