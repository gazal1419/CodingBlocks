const button = document.querySelector(".searchbtn button");
// console.log(main);





const quotes=["Be Yourself.","Dream Bird.","Rise Above.","You Matter.","You Can.","Accept Yourself.","Trust Yourself.","Consistency=Success.","Move Forward.","Love Much.","Be Kind."];
let getrandom=()=>{
    var index= Math.round(Math.random()*11)-1;
    return quotes[index];
}



button.addEventListener("click", (e) => {
    e.preventDefault();
  // console.log("Clicked!");
  const city = document.getElementById("cityname").value;
  if (city == null || city == "") {
    alert("Please enter your city name!!");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=855b0ba817d561f2ce1e246c2f2b4a69`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        var mainele=document.querySelector(".main");
        var description=document.querySelector(".descriptionweather");
        var temp=document.querySelector(".temprature span");
        var minmaxtemprature=document.querySelector(".minmaxtemp span");
        var quote=document.querySelector(".description span");
        var quote1=getrandom();
        var humid=document.querySelector(".other .distance span");
        
        console.log(data);
        mainele.innerHTML=data.weather[0].main;
        description.innerHTML=data.weather[0].description;

        

        temp.innerHTML=Math.round(data.main.temp-273.15);
        var mintemp=Math.round(data.main.temp_min-273.15);
        var maxtemp=Math.round(data.main.temp_max-273.15);
        minmaxtemprature.innerHTML=`(MIN)${mintemp}/${maxtemp}(MAX)
        `;
        quote.innerHTML=quote1;
        var hum=data.main.humidity;
        humid.innerHTML=` Humidity - ${hum}`;

      })
      .then((err) => {
        console.log(err);
      });
  }
  
});




