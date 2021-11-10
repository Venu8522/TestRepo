import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DsApiSettingService {

  constructor(private http: HttpClient) { }
  public Get(url: string, parameter: any = null) {
    return this.http.get<any>(url, {
      params: parameter
    });
  }
}
