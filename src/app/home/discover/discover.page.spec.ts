import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArionDiscoverTab } from './discover.page';

describe('ArionDiscoverTab', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<ArionDiscoverTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArionDiscoverTab],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArionDiscoverTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
