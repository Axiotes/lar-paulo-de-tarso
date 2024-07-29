import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicalValuesComponent } from './ethical-values.component';

describe('EthicalValuesComponent', () => {
  let component: EthicalValuesComponent;
  let fixture: ComponentFixture<EthicalValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EthicalValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EthicalValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
