import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProfessionComponent } from './image-profession.component';

describe('ImageProfessionComponent', () => {
  let component: ImageProfessionComponent;
  let fixture: ComponentFixture<ImageProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
