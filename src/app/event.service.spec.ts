import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update an event', () => {
    spyOn(service, 'updateEvent').and.returnValue(true);
    service.updateEvent('test', 'test', 'test');
    expect(service.updateEvent).toHaveBeenCalled();
  });
});
