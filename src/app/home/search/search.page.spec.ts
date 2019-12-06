import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArionSearchTab } from './search.page';

describe('ArionSearchTab', () => {
  let component: ArionSearchTab;
  let fixture: ComponentFixture<ArionSearchTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArionSearchTab],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArionSearchTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
