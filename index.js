import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let homeTeam=fifaData.filter((home)=>{
   return home.Year =="2014" && home.Stage=="Final";
});

console.log(homeTeam[0]["Home Team Name"]);

let awayTeam=fifaData.filter((away)=>{
    return away.Year =="2014" && away.Stage=="Final";
});

console.log(awayTeam[0]["Away Team Name"]);

let homeTeamGoals=fifaData.filter((goals)=>{
    return goals.Year =="2014" && goals.Stage=="Final";
});
console.log(homeTeamGoals[0]["Home Team Goals"]);

let awayTeamGoals=fifaData.filter((goals)=>{
    return goals.Year =="2014" && goals.Stage=="Final";
});
console.log(awayTeamGoals[0]["Away Team Goals"]);

let winner2014=fifaData.filter((winner)=>{
    return winner.Year=="2014" && winner.Stage=="Final";
});
console.log(winner2014[0]["Win conditions"]);

/*const filterLargeStates = data.filter((state) => {
  return state.population <= 1000000 && state.land_area <= 100 ;
});

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


function getFinals(data) {
 return data.filter((finals)=>{
     return finals.Stage=="Final";
    });
    
};

console.log(getFinals(fifaData));
    



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback 
function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

/*function getYears(callback) {
    
    let years= callback.map((yearsInSet)=>{
    return {'Year': yearsInSet.Year};
    });
    return years;
};*/

function getYears(callback) {
    
    let years= callback(fifaData).map((yearsInSet)=>{
    return yearsInSet.Year;
    });
    return years;
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function
`getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

/*let winner2014=fifaData.filter((winner)=>{
    return winner.Year=="2014" && winner.Stage=="Final";
});
console.log(winner2014[0]["Win conditions"]);*/

function getWinners(callback) {

    let winningTeams=callback(fifaData).map((winner)=>{
        if (winner["Home Team Goals"] > winner["Away Team Goals"]){
            return winner["Home Team Name"];
        }
        else if (winner["Home Team Goals"]< winner["Away Team Goals"]){
            return winner["Away Team Name"];
        }
        else if (winner["Home Team Goals"] === winner["Away Team Goals"]){
            return "tie"
        }
     });
    return winningTeams;
};
    

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the 
following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
  let winners=getWinners(getFinals);
  let years=getYears(getFinals);

  return winners.map((winner, i)=>{

    return `In ${years[i]} ${winner} won the world cup`
  })
};



console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` 
and returns the the average number of home team goals and away team goals scored per 
match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let totalHomeGoals= data.reduce((total, homeTeamGoals)=>{
        return total +=homeTeamGoals["Home Team Goals"];
    }, 0);
    let totalAwayGoals=data.reduce((total, awayTeamGoals)=>{
        return total += awayTeamGoals["Away Team Goals"];
    }, 0);
    let numofMatches=data.length;
    return Math.round((totalHomeGoals+ totalAwayGoals) / numofMatches);

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters 
`data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
