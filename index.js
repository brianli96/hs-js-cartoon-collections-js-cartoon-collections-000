function dwarfRollCall(dwarves) {
  let count = 1;
  let newString = "";
  if(dwarves === [])
  {
    return null;
  }
  else
  {
    for(let i = 0; i < dwarves.length; i++)
    {
      newString += `${count}. ${dwarves[i]} `
      count++;
    }
    return newString;
  }
}

function summonCaptainPlanet(planeteerCalls){
  let newArray = [];
  for(let i = 0; i < planeteerCalls.length; i++)
  {
    newArray.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return newArray;
}

function longPlaneteerCalls(words) {
  let boolean = false;
  for(let i = 0; i < words.length; i++)
  {
    if(words[i].length <= 4)
    {
    }
    else
    {
      boolean = true;
    }
    return boolean;
  }
}

function findTheCheese (foods) {
  for(let i = 0; i < foods.length; i++)
  {
    if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert")
    {
      return foods[i];
    }
  }
  return "no cheese!"
}

