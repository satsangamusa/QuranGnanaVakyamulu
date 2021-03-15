import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MundhumaataPage } from './mundhumaata.page';

describe('MundhumaataPage', () => {
  let component: MundhumaataPage;
  let fixture: ComponentFixture<MundhumaataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundhumaataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MundhumaataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
