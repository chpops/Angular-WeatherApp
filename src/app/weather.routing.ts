import { RouterModule, Routes } from '@angular/router';
import { WeatherWidgetMainComponent} from './Components/weather-widget-main/weather-widget-main.component'
import { TestComponent} from './Components/test/test/test.component';
import { ModuleWithProviders } from '@angular/core';


const WEATHER_ROUTER:Routes = [
    {path: '', component: WeatherWidgetMainComponent},
    {path: 'testComponent', component: TestComponent}
]

export const weatherRouting:ModuleWithProviders<any> = RouterModule.forRoot(WEATHER_ROUTER)