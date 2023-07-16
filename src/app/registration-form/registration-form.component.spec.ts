import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let routerMock: Partial<Router>;

  beforeEach(async () => {
    routerMock = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatInputModule, BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatSelectModule,],
      providers: [
        FormBuilder,
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the RegistrationFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should handle error on failed registration', () => {
    // Arrange
    spyOn(console, 'error');

    component.formGroup.setValue({
      name: '',
      lastName: '',
      email: '',
      password: '',
      age: null,
      gender: '',
      height: null,
      weight: null,
    });

    // Act
    component.register();

    // Assert
    expect(component.formGroup.valid).toBeFalsy();
    expect(routerMock.navigate).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Registration failed', jasmine.anything());
  });

  it('should navigate to /mainMenu on successful registration', () => {
    // Arrange
    spyOn(console, 'log');
    spyOn(component.formGroup.value.name, 'toUpperCase').and.returnValue('JOHN');
    spyOn(component.formGroup.value.lastName, 'toUpperCase').and.returnValue('DOE');
    spyOn(component.formGroup.value.email, 'toLowerCase').and.returnValue('test@test.com');

    component.formGroup.setValue({
      name: 'John',
      lastName: 'Doe',
      email: 'test@test.com',
      password: 'password',
      age: 25,
      gender: 'M',
      height: 180,
      weight: 75,
    });

    // Act
    component.register();

    // Assert
    expect(component.formGroup.valid).toBeTruthy();
    expect((component.formGroup.value.name.toUpperCase as jasmine.Spy).calls.count()).toBe(1);
    expect((component.formGroup.value.lastName.toUpperCase as jasmine.Spy).calls.count()).toBe(1);
    expect((component.formGroup.value.email.toLowerCase as jasmine.Spy).calls.count()).toBe(1);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/mainMenu']);
    expect(console.log).toHaveBeenCalledWith('Registration successful', jasmine.anything());
  });



});
