import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(protected httpClient: HttpClient) { }

  /**
   * @description call api based on applied filter
   * @param filterValues recive applied filters
   */
  public GetResponseData(filterValues: any): Observable<any> {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    if (filterValues['launch_year']) {
      url = `${url}&launch_year=${filterValues['launch_year']}`;
    }
    if (filterValues['land_success']) {
      url = `${url}&land_success=${filterValues['land_success']}`;
    }
    if (filterValues['launch_success']) {
      url = `${url}&launch_success=${filterValues['launch_success']}`;
    }
    return this.httpClient.get(url);
  }
}
