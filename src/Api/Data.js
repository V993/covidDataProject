//Basic fetch request
//the first then is telling us what data we expect as a response
//the second then is an arrow function which logs the data


const covidData = [];
let count = 10;
fetch('https://covidtracking.com/api/v1/us/daily.json')
    .then(response => response.json())
    .then((data) => {
      data.forEach((i) => {
        if(count > 0){
        //console.log("This is one ", i);
        covidData.push({
          death: i.death,
          hospitalized: i.hospitalized,
          negative: i.negative,
          positive: i.positive,
          pending: i.pending
        })
        count --
        }
      });
console.log(covidData)
    });

export default covidData;
