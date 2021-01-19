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
      declarations: [ MarketingComponent ],
      providers: [
        
      ]
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

  it('should have a value for event format', () => {
    const eventFormat = 'Academy';
    component.marketingForm.controls['eventFormat'].setValue(eventFormat);
    expect(component.marketingForm.value['eventFormat']).toBe('Academy');
  });

  it('should select maximum of 1 option for marketing objective', () => {
    const marketingObject = ['Data 1'];

    component.marketingForm.controls['marketingObjective'].setValue(marketingObject);

    expect(component.marketingForm.controls['marketingObjective'].valid).toBeTrue();
  });

  
  it('should only have 2 decimal places for Amount Estimated', () => {
    const amount1 = 12.345;
    const amount2 = 12.34;

    component.marketingForm.controls['amountEstimated'].setValue(amount1);

    expect(component.marketingForm.controls['amountEstimated'].valid).toBeFalse();

    component.marketingForm.controls['amountEstimated'].setValue(amount2);

    expect(component.marketingForm.controls['amountEstimated'].valid).toBeTrue();
  });

  it('should enter a correct URL for def jam link field', () => {
    const url1 = 'https://www.google.com/';
    const url2 = 'Google';

    component.marketingForm.controls['externalEventWebsite'].setValue(url1);

    expect(component.marketingForm.controls['externalEventWebsite'].valid)
        .toBeTrue();

    component.marketingForm.controls['externalEventWebsite'].setValue(url2);

    expect(component.marketingForm.controls['externalEventWebsite'].valid)
        .toBeFalse();
  });

  it('should have a default value of No for invite executives field', () => {
    const value = 'No';

    component.marketingForm.controls['inviteExecutives'].setValue(value);

    expect(component.marketingForm.controls['inviteExecutives'].valid).toBeTrue();
  });


  it('should open the snackbar', () => {
    spyOn(component, 'openSnackbar').and.callThrough();

    component.openSnackbar('Successfully Updated!', 'Dismiss');

    expect(component.openSnackbar).toHaveBeenCalledTimes(1);
  });
  
});
