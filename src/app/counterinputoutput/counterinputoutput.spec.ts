import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counterinputoutput } from './counterinputoutput';

describe('Counterinputoutput', () => {
  let component: Counterinputoutput;
  let fixture: ComponentFixture<Counterinputoutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counterinputoutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Counterinputoutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
