import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherData: any;
  selectedCity: string = 'Manado'; // Default ke Manado
  cities: string[] = ['Manado', 'Medan', 'Jakarta', 'Bandung', 'Surabaya', 'Makassar', 'Medan', 'Denpasar', 'Ambon', 'Jayapura'];  // Daftar kota lainnya

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  // Mengambil cuaca berdasarkan kota yang dipilih
  getWeather() {
    this.weatherService.getWeatherByCity(this.selectedCity).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log(this.weatherData);  // Melihat data yang diterima dari API
      },
      (error) => {
        console.error('Error fetching weather data:', error);  // Handling jika terjadi error
      }
    );
  }
}
