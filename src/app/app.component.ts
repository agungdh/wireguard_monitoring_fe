import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {WireguardService} from './wireguard.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wireguard-monitor';

  constructor(private wireguardService: WireguardService) {
    this.wireguardService.getWireguardStat()
  }
}
