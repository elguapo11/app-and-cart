require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;


app.get("/", (req, res) => {
  res.json({ message: "homepage" });
  console.log('hitting homepage')
});

app.get("/new", (req, res) => {
  res.json({ message: "second page" });
  render
  console.log('hitting second page')
});


app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
    console.log("I'm a successful problem solver")
  });

  // function sum(numbers) {
  //   let total = 0;
  
  //   for (let i = 0; i < numbers.length; i++) {
  //     total += numbers[i];
  //   }
  
  //   return total;
  // }

  // let result = sum([1, 2, 3, 4, 5]);
  // console.log(result); 
  // this was a ex. from Layne

  let nums = [0,10,2,33,455]
  console.log(nums)

  function removeEveryOther(arr){
    return arr.filter(function(element , index) {
      return index % 2 === 0;
    });
  }

console.log(removeEveryOther(nums))