import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardComponent } from './poke-card.component';

describe('PokeCardComponent', () => {
  let component: PokeCardComponent;
  let fixture: ComponentFixture<PokeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
