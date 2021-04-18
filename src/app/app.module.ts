import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { HeaderComponent } from './Components/header/header.component';
import { weatherRouting } from './weather.routing';
import { FormsModule }   from '@angular/forms';
import { TestComponent } from './Components/test/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    HeaderComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    weatherRouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
