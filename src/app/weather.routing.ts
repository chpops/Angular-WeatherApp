import { RouterModule, Routes } from '@angular/router';
import { WeatherWidgetMainComponent} from './Components/weather-widget-main/weather-widget-main.component'
import { ForecastComponent} from './Components/forecast/forecast.component'
import { ModuleWithProviders } from '@angular/core';


const WEATHER_ROUTER:Routes = [
    {path: '', component: WeatherWidgetMainComponent},
    {path: 'forecast', component: ForecastComponent}
]

export const weatherRouting:ModuleWithProviders<any> = RouterModule.forRoot(WEATHER_ROUTER)