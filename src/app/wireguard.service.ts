import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientModel} from './client.model';
import {firstValueFrom, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WireguardService {
  private httpClient: HttpClient = inject(HttpClient);

  getWireguardStat(): Observable<ClientModel[]> {
    return this.httpClient.get<ClientModel[]>('https://api.monitoring.agungdh.com/wireguard')
  }
}
