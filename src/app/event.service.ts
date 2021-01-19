import { Injectable } from '@angular/core';
import { EnumList } from './enum-list';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  enumList: EnumList[] = [];

  constructor() { }

  getRevenueOpportunityEnum() {
    return this.enumList.values();
  }


  updateEvent(event: string, spiiConstraint: string, updater: string) {
    const params ={
      event, spiiConstraint, updater,
    }

    console.log('params', params);
    return true;
  }

}
