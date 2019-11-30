import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArionAccountTab } from './account.page';

describe('ArionAccountTab', () => {
  let component: ArionAccountTab;
  let fixture: ComponentFixture<ArionAccountTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArionAccountTab],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArionAccountTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
