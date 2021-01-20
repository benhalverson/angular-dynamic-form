import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from 'src/app/event.service';
import { EnumList } from '../../enum-list';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  constructor(private readonly fb: FormBuilder, private readonly snackbar: MatSnackBar, private readonly eventService: EventService,) { }

  priority = '';
  toggleChecker = false;
  urlRegexp =
    /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

  decimalValue = /^[0-9]+(\.[0-9]{1,2})?$/;
  marketingObjective: EnumList[] = [
    {
      field: 'OPTION_1',
      value: 'Option 1'
    },
    {
      field: 'OPTION_2',
      value: 'Option 2'
    }
  ];

  productFocus: EnumList[] = [
    {
      field: 'OPTION_1',
      value: 'Option 1'
    },
    {
      field: 'OPTION_2',
      value: 'Option 2'
    }
  ];

  priorities: EnumList[] = [
    {
      field: 'Product Focus',
      value: 'PRODUCT_FOCUS'
    },
    {
      field: 'Marketing Objective',
      value: 'MARKETING_OBJECTIVE_FOCUS'
    },
    {
      field: 'Brand and Engagement',
      value: 'BRAND_AND_ENGAGEMENT_FOCUS'
    },
    {
      field: 'Other',
      value: 'PRIORITY_OTHER'
    },
  ];

  brandFocus: EnumList[] = [
    {
      field: 'Test',
      value: 'Option 1'
    },
    {
      field: 'OPTION_2',
      value: 'Option 2'
    },
    {
      field: 'OPTION_3',
      value: 'Option 3'
    },
    {
      field: 'OPTION_4',
      value: 'Option 4'
    }
  ];

  eventFocusEmpty = false;
  eventMarketingObjectiveEmpty = false;

  marketingForm = this.fb.group({
    priority: [null, Validators.required],
    productFocus: ['', Validators.maxLength(2)],
    marketingObjective: [''],
    brandAndEngagement: [''],
    otherPriorities: [''],

  });

  ngOnInit(): void {
    this.eventService.updateEvent('test', 'test', 'test');
  }

  validate() {
    console.log('priority', this.marketingForm.value['priority']);
    this.eventFocusEmpty = !this.marketingForm.controls['productFocus'].valid;
    this.eventMarketingObjectiveEmpty =
      !this.marketingForm.controls['marketingObjective'].valid;

  }

  updateForm() {
    const marketingFieldRequest = {
      code: '',
      owner: '',
      name: '',
      format: '',
      customerSegment: '',
      financialsInfo: {
        fundingTeam: '',
        revenueOpportunity: '',
        amountEstimated: 0,

      },
      marketingInfo: {
        targetAudience: '',
        googleBrandedEvent: false,
        customerVertical: '',
        priorityExecutive: false,
        estimateNumberOfAttendees: 0,
      },
      reportingInfo: {
        externalEventWebsite: '',

      }
    }; // new api.marketingRequest;
    const workflowStage = 'MARKETING_INFO_ADDED';

   marketingFieldRequest.format = this.marketingForm.value['eventFormat'];
    marketingFieldRequest.customerSegment = this.marketingForm.value['customerSegment'];
    marketingFieldRequest.financialsInfo.fundingTeam = this.marketingForm.value['fundingTeam'];
    marketingFieldRequest.financialsInfo.revenueOpportunity =
      this.marketingForm.value['revenueOpportunity'];
    marketingFieldRequest.marketingInfo.targetAudience =
      this.marketingForm.value['targetAudience'];
    marketingFieldRequest.marketingInfo.googleBrandedEvent =
      this.marketingForm.value['googleBranded'] === 'yes';
    marketingFieldRequest.marketingInfo.customerVertical =
      this.marketingForm.value['customerVertical'];
    marketingFieldRequest.reportingInfo.externalEventWebsite =
      this.marketingForm.value['externalEventWebsite'];
    marketingFieldRequest.marketingInfo.priorityExecutive =
      this.marketingForm.value['inviteExecutives'] === 'yes';
   marketingFieldRequest.marketingInfo.estimateNumberOfAttendees =
      this.marketingForm.value['attendees'];
  }

  submitMarketingForm() {

    this.toggleChecker = true;
    this.validate();
    if (this.marketingForm.valid) {
      this.updateForm();
    }
  }

  setMarketingObjectivesValidators() {

  }

  selectedPriority(value: string) {
    console.log('selected');
    this.priority = value;
    this.setMarketingObjectivesValidators();
  }

  submitButton() {
    return 'button text';
  }

  openSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'left',
    });
  }
}
