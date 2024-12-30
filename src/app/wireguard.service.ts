import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientModel} from './client.model';

@Injectable({
  providedIn: 'root'
})
export class WireguardService {

  constructor(private http: HttpClient) {

  }

  getWireguardStat(): void {
    this.http.get<ClientModel[]>('https://api.monitoring.agungdh.com/wireguard').subscribe(data => {
      console.log(data[0].client)
      console.log(data[0].stat.allowedIps)
      console.log(data[0].stat.endpoint)
    });
  }
}
