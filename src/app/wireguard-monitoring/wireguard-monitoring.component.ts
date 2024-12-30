import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { WireguardMonitoringDataSource, WireguardMonitoringItem } from './wireguard-monitoring-datasource';
import {WireguardService} from '../wireguard.service';

@Component({
  selector: 'app-wireguard-monitoring',
  templateUrl: './wireguard-monitoring.component.html',
  styleUrl: './wireguard-monitoring.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class WireguardMonitoringComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<WireguardMonitoringItem>;
  dataSource = new WireguardMonitoringDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(private wireguardService: WireguardService) {
    this.wireguardService.getWireguardStat()
  }
}
