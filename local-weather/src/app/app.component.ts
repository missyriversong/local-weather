// /*import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'local-weather';
// }

// */

import { Component } from '@angular/core'
import { WeatherService } from './weather.service'
import { ICurrentWeather } from './icurrent-weather'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'local-weather-app'
  currentWeather: ICurrentWeather = {
    city: '',
    country: '',
    date: new Date(),
    image: '',
    temperature: 0,
    description: '',
  }

  constructor(private weatherService: WeatherService) {}

  doSearch(searchValue: string) {
    const userInput = searchValue.split(',').map((s: any) => s.trim())
    this.weatherService
      .getCurrentWeather(userInput[0], userInput[1] ?? undefined)
      .subscribe((data) => (this.currentWeather = data))
  }
}
