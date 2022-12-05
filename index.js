const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6f0bf729aamshe6b2925de451ccap17e3edjsnc3a4fcd2a021",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=trichy", options)
  .then( async(response) => {
    const data = await response.json();
      const city = data.location.name;
      console.log(city);
      const temperature = data.current.temp_c;
      console.log(data);
      console.log(temperature);
      const humidity = data.current.humidity;
    
     document.getElementById("city").innerHTML = city;
     document.getElementById("tempval").innerHTML=temperature;

     document.getElementById("humidity").innerHTML=humidity;
  })
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// var input = document.getElementById("querycity");
// input.addEventListener("keypress", async function(event) {
// //   await getDetails();
// });

let getDetails = async()=>{
    let queryCity = document.getElementById("querycity").value
    console.log(querycity)
    const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${queryCity}`,
        options
      );
    
      const data = await response.json();
      const city = data.location.name;
    //   console.log(city);
      const temperature = data.current.temp_c;
    //   console.log(data);
    //   console.log(temperature);
      const humidity = data.current.humidity;
    
     document.getElementById("city").innerHTML = city;
     document.getElementById("tempval").innerHTML=temperature;

     document.getElementById("humidity").innerHTML=humidity;
}