import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDonationComponent } from './type-donation.component';

describe('TypeDonationComponent', () => {
  let component: TypeDonationComponent;
  let fixture: ComponentFixture<TypeDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeDonationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
