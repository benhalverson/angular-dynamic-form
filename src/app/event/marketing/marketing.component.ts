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
    this.eventService.updateEvent('test', 'test', 'test');
  }

  validate() {
    console.log('priority', this.marketingForm.value['priority']);
    this.eventFormatEmpty = !this.marketingForm.controls['eventFormat'].valid;
    this.eventMainFundingEmpty =
      !this.marketingForm.controls['fundingTeam'].valid;
    this.eventCustomerSegmentEmpty =
      !this.marketingForm.controls['customerSegment'].valid;
    this.eventRevenueOpportunityEmpty =
      !this.marketingForm.controls['revenueOpportunity'].valid;
    this.eventTargetAuienceEmpty =
      !this.marketingForm.controls['targetAudience'].valid;
    this.eventEstimatedAttendeesEmpty =
      !this.marketingForm.controls['attendees'].valid;
    this.eventFocusEmpty = !this.marketingForm.controls['productFocus'].valid;
    this.eventCustomerVertical =
      !this.marketingForm.controls['customerVertical'].valid;
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
    this.amountEstimated = this.marketingForm.value['amountEstimated'];

    marketingFieldRequest.code = this.code;
    marketingFieldRequest.owner = this.owner;
    marketingFieldRequest.name = this.name;
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
    marketingFieldRequest.financialsInfo.amountEstimated =
      this.amountEstimated;
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
