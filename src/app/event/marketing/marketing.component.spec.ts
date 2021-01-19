import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EventModule } from '../event.module';

import { MarketingComponent } from './marketing.component';

describe('MarketingComponent', () => {
  let component: MarketingComponent;
  let fixture: ComponentFixture<MarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EventModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [ MarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
