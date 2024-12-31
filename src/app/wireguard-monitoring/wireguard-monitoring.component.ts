import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import {WireguardService} from '../wireguard.service';
import {ClientModel} from '../client.model';
import {Observable} from 'rxjs';
import {AsyncPipe, DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-wireguard-monitoring',
  templateUrl: './wireguard-monitoring.component.html',
  styleUrl: './wireguard-monitoring.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, AsyncPipe, DecimalPipe]
})
export class WireguardMonitoringComponent implements OnInit {
  wireguardService: WireguardService = inject(WireguardService);

  localTime: string = new Date().toLocaleString();
  datas$: Observable<ClientModel[]> = new Observable<ClientModel[]>();

  ngOnInit(): void {
    this.datas$ = this.wireguardService.getWireguardStat()
  }

  convertIsoToDate(date: string): string {
    return new Date(date).toLocaleString();
  }
}
