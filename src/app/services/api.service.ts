import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currentDate = '' as string;
  tomorrowDate = '' as string;
  apiGtLeague: string = "https://api.gtleagues.com/api/";
  limit: number = 1000;

  constructor(private http: HttpClient) {
    this.setCurrentDate();
  }

  setCurrentDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.currentDate = this.formatDate(today);
    this.tomorrowDate = this.formatDate(tomorrow);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    return `${year}-${month}-${day}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  fetchSeasonsData(): Observable<any> {
    return this.http.get(`${this.apiGtLeague}seasons?limit=${this.limit}&offset=0&status=1`);
  }

  fetchResultsData(): Observable<any> {
    const params = {
      kickoff: `between:${this.currentDate}T03:00:00.000Z,${this.tomorrowDate}T02:59:59.999Z`,
      limit: 50,
      offset: 0,
      sort: '-kickoff,-matchNr',
      status: 'in:3,5,4,6',
      xtc: true
    };

    console.log(params)
    return this.http.get(`${this.apiGtLeague}fixtures`, { params });
  }
}
