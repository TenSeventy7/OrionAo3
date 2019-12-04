import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviewPage } from './preview.page';

describe('PreviewPage', () => {
  let component: PreviewPage;
  let fixture: ComponentFixture<PreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
