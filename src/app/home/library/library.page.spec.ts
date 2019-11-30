import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArionLibraryTab } from './library.page';

describe('ArionLibraryTab', () => {
  let component: ArionLibraryTab;
  let fixture: ComponentFixture<ArionLibraryTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArionLibraryTab],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArionLibraryTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
