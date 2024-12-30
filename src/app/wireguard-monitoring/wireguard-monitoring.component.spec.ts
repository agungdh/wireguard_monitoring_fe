import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { WireguardMonitoringComponent } from './wireguard-monitoring.component';

describe('WireguardMonitoringComponent', () => {
  let component: WireguardMonitoringComponent;
  let fixture: ComponentFixture<WireguardMonitoringComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireguardMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
