var hobbies = ["reading", "drawing", "singing", "hiking", "cooking", "running"];
console.log(hobbies.length);

hobbies.push("traveling");
//console.log(hobbies);

console.log(hobbies[2]);

hobbies.pop();
//console.log(hobbies);

hobbies.splice(2, 0, "sewing", "horse riding");
console.log(hobbies);

hobbies.shift();
//console.log(hobbies);

hobbies.unshift("sleeping");
//console.log(hobbies);

var goals = [
  "going to bed earlier",
  "eating healthy food",
  "walking three times a week",
];

var allTheThings = hobbies.concat(goals);
console.log(allTheThings);

console.log(allTheThings.indexOf("cooking"));

allTheThings.splice(6, 1);
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);
