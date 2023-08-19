import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastTableComponent } from './podcast-table.component';

describe('PodcastTableComponent', () => {
  let component: PodcastTableComponent;
  let fixture: ComponentFixture<PodcastTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
