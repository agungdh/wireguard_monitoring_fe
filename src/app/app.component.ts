import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {WireguardService} from './wireguard.service';
import {WireguardMonitoringComponent} from './wireguard-monitoring/wireguard-monitoring.component';

@Component({
  selector: 'app-root',
  imports: [WireguardMonitoringComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wireguard-monitor';
}
