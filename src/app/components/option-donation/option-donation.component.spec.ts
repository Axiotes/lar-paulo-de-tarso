import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDonationComponent } from './option-donation.component';

describe('OptionDonationComponent', () => {
  let component: OptionDonationComponent;
  let fixture: ComponentFixture<OptionDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionDonationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
