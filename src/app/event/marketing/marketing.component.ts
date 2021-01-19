import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EnumList } from '../../enum-list';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  constructor(private readonly fb: FormBuilder, private readonly snackbar: MatSnackBar,) { }
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

  eventFormat: EnumList[] = [
    {
      field: 'OPTION_1',
      value: 'Option 1'
    },
    {
      field: 'OPTION_2',
      value: 'Option 2'
    }
  ];
  fundingTeam: EnumList[] = [
    {
      field: 'OPTION_1',
      value: 'Option 1'
    },
    {
      field: 'OPTION_2',
      value: 'Option 2'
    }
  ];
  customerSegment: EnumList[] = [
    {
      field: 'OPTION_1',
      value: 'Option 1'
    },
    {
      field: 'OPTION_2',
      value: 'Option 2'
    }
  ];
  revenueOpportunity: EnumList[] = [
    {
      field: 'OPTION_1',
      value: 'Option 1'
    },
    {
      field: 'OPTION_2',
      value: 'Option 2'
    }
  ];
  targetAudience: EnumList[] = [
    {
      field: 'OPTION_1',
      value: 'Option 1'
    },
    {
      field: 'OPTION_2',
      value: 'Option 2'
    }
  ];
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
  customerVertical: EnumList[] = [
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
  estimatedAttendees: EnumList[] = [
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
      field: 'PRODUCT_FOCUS',
      value: 'Option 2'
    },
    {
      field: 'MARKETING_OBJECTIVE_FOCUS',
      value: 'Option 1'
    },
    {
      field: 'BRAND_AND_ENGAGEMENT_FOCUS',
      value: 'Brand and Engagement'
    },
    {
      field: 'PRIORITY_OTHER',
      value: 'other'
    },
  ];
  brandFocus: EnumList[] = [
    {
      field: 'OPTION_1',
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

  openSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'left',
    });
  }
}
