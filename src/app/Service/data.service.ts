import { Injectable } from '@angular/core';
import { DsApiSettingService } from './ds-api-setting.service';
import { ApiConfig } from '../Shared/api-config'

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private dsApiSetting: DsApiSettingService, private apiConfig: ApiConfig) {
  }
  getBookData() {
    return this.dsApiSetting.Get(this.apiConfig._config.booksURL);
  }
  getMovieData() {
    return this.dsApiSetting.Get(this.apiConfig._config.moviesURL);
  }
}
