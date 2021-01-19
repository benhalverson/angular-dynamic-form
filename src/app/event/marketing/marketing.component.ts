import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { EnumList } from '../../enum-list';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  constructor(private readonly fb: FormBuilder) { }
  toggleChecker = false;
  priority = '';
  code = '';
  name = '';
  owner = '';
  status = '';
  eventCode = '';
  eventStage = '';
  amountEstimated = 0;

  urlRegexp =
    /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;
  decimalValue = /^[0-9]+(\.[0-9]{1,2})?$/;

  eventFormat: EnumList[] = [];
  fundingTeam: EnumList[] = [];
  customerSegment: EnumList[] = [];
  revenueOpportunity: EnumList[] = [];
  targetAudience: EnumList[] = [];
  marketingObjective: EnumList[] = [];
  customerVertical: EnumList[] = [];
  productFocus: EnumList[] = [];
  estimatedAttendees: EnumList[] = [];
  priorities: EnumList[] = [];
  brandFocus: EnumList[] = [];

  eventFormatEmpty = false;
  eventMainFundingEmpty = false;
  eventCustomerSegmentEmpty = false;
  eventRevenueOpportunityEmpty = false;
  eventTargetAuienceEmpty = false;
  eventEstimatedAttendeesEmpty = false;
  eventFocusEmpty = false;
  eventCustomerVertical = false;
  eventMarketingObjectiveEmpty = false;

  marketingForm = this.fb.group({
    eventFormat: ['', Validators.required],
    fundingTeam: ['', Validators.required],
    customerSegment: ['', Validators.required],
    revenueOpportunity: ['', [Validators.required]],
    targetAudience: ['', Validators.required],
    attendees: ['', Validators.required],
    googleBranded: [null, Validators.required],
    priority: [null, Validators.required],
    productFocus: ['', Validators.maxLength(2)],
    marketingObjective: [''],
    brandAndEngagement: [''],
    otherPriorities: [''],
    customerVertical: ['', Validators.required],
    amountEstimated:
      [
        '',
        [
          Validators.required, Validators.min(0.01),
          Validators.pattern(this.decimalValue)
        ]
      ],
    externalEventWebsite: ['', [Validators.pattern(this.urlRegexp)]],
    inviteExecutives: [false],
  });

  ngOnInit(): void {
  }
  submitMarketingForm() {
    console.log('submitted');
  }

  selectedPriority(value: string) {
    console.log('selected');
  }

  submitButton() {
    return 'button text';
  }

}
