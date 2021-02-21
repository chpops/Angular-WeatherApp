import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { HeaderComponent } from './Components/header/header.component';
import { ForecastComponent } from './Components/forecast/forecast.component';
import { weatherRouting } from './weather.routing';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    HeaderComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule,
    weatherRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
