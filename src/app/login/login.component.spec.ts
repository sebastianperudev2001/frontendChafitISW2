
/*
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: Partial<AuthServiceService>;
  let routerMock: Partial<Router>;

  beforeEach(async () => {
    authServiceMock = {
      login: jasmine.createSpy('login').and.callFake((credentials) => {
        // Return a mocked Observable for testing different scenarios
        if (credentials.email === 'test@test.com' && credentials.password === 'password') {
          return of({ message: 'Authentication successful' });
        } else {
          return of({ message: 'Authentication failed' });
        }
      }),
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: AuthServiceService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /mainMenu on successful authentication', () => {
    // Arrange
    component.formGroup.setValue({ email: 'test@test.com', password: 'password' });

    // Act
    component.loginProces();

    // Assert
    expect(authServiceMock.login).toHaveBeenCalledWith({ email: 'test@test.com', password: 'password' });
    expect(routerMock.navigate).toHaveBeenCalledWith(['/mainMenu']);
  });

  it('should show an alert on authentication failure', () => {
    // Arrange
    component.formGroup.setValue({ email: 'test@test.com', password: 'incorrect' });

    // Act
    component.loginProces();

    // Assert
    expect(authServiceMock.login).toHaveBeenCalledWith({ email: 'test@test.com', password: 'incorrect' });
    expect(window.alert).toHaveBeenCalledWith('Authentication failed');
  });
});
*/