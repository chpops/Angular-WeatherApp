import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData: any;
  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };

    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=373afb9fe7d2587cd3837754899bf7f1')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

    // let data = JSON.parse('{"coord":{"lon":37.6156,"lat":55.7522},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09n"},{"id":701,"main":"Mist","description":"mist","icon":"50n"},{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"base":"stations","main":{"temp":266.27,"feels_like":261.29,"temp_min":266.15,"temp_max":266.48,"pressure":1015,"humidity":93},"visibility":2800,"wind":{"speed":3,"deg":100},"snow":{"1h":0.34},"clouds":{"all":90},"dt":1613925433,"sys":{"type":1,"id":9027,"country":"RU","sunrise":1613882426,"sunset":1613918773},"timezone":10800,"id":524901,"name":"Moscow","cod":200}');
    // this.setWeatherData(data);
  } 

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
