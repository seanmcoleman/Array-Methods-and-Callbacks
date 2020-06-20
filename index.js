import { fifaData } from "./fifa.js";
// console.log(fifaData);

// console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(/* code here */) {
  /* code here */
}

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {
  /* code here */
}

getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(/* code here */) {
  /* code here */
}

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {}

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {
  /* code here */
  //
}

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals scored per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
  // 1. x add `data` parameter
  const finalStageMatches = data.filter((match) => match.Stage === "Final");
  const sums = {};

  finalStageMatches.forEach((match) => {
    {
      const homeTeamName = match["Home Team Name"];
      const homeTeamGoals = match["Home Team Goals"];
      const awayTeamName = match["Away Team Name"];
      const awayTeamGoals = match["Away Team Goals"];

      if (!sums[homeTeamName]) sums[homeTeamName] = [];
      if (!sums[awayTeamName]) sums[awayTeamName] = [];

      sums[homeTeamName].push(homeTeamGoals);
      sums[awayTeamName].push(awayTeamGoals);
    }
  });

  let priorAverage = 0;
  let winningTeamName = "";

  Object.keys(sums).forEach((teamName) => {
    const goals = sums[teamName];
    const sumGoals = goals.reduce((sum, goal) => sum + goal);
    const average = sumGoals / goals.length;
    if (average > priorAverage) {
      priorAverage = average;
      winningTeamName = teamName;
    }
  });

  return winningTeamName;

  // 2. x Filter data to just finals stage
  // 3. x avg goals for all final matches per team
  // 4. x calculate avg "for" goals for all matches
  // 5. x figure out team with highest avg
  // 6. x returning that team
}

getGoals(fifaData);

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(data) {
  const sums = data.reduce((sums, match) => {
    if (match.Stage === "Final") {
      const homeTeamName = match["Home Team Name"];
      const homeTeamGoals = match["Home Team Goals"];
      const awayTeamName = match["Away Team Name"];
      const awayTeamGoals = match["Away Team Goals"];

      if (!sums[homeTeamName]) sums[homeTeamName] = [];
      if (!sums[awayTeamName]) sums[awayTeamName] = [];

      sums[homeTeamName].push(awayTeamGoals);
      sums[awayTeamName].push(homeTeamGoals);
    }

    return sums;
  }, {});

  console.log(sums);

  const teamNames = Object.keys(sums);

  const teamStats = teamNames.reduce(
    (currentTeamStats, currentTeamName) => {
      const goalsAgainstTeam = sums[currentTeamName];
      const sumGoals = goalsAgainstTeam.reduce((sum, goal) => sum + goal);
      const average = sumGoals / goalsAgainstTeam.length;

      if (average > currentTeamStats.teamAverage) {
        currentTeamStats.teamAverage = average;
        currentTeamStats.teamName = currentTeamName;
      }

      return currentTeamStats;
    },
    { teamName: "", teamAverage: 0 }
  );

  return teamStats.teamName;
}

console.log(badDefense(fifaData));

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
