import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserResponse } from '@app/shared/interfaces/interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService, CrafterService } from '@app/core/services/services.index';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login.component';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { StorageService } from '@app/core/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit, OnDestroy {

  @Output() changed = new EventEmitter<boolean>();
  signUpForm: FormGroup;
  namePattern = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
  matchError = false;
  conditions: boolean;
  private unsubscribe$ = new Subject<void>();

  constructor(private login: LoginService,
              private ls: StorageService,
              private store: Store<AppState>,
              private crafter: CrafterService,
              private router: Router,
              public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.createSignUpForm();
  }

  openConditions(): void {
    this.changed.emit(true);
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) { return; }
    const user: User = this.signUpForm.value;
    this.signUp(user);
  }

  private signUp(user: User): void {
    this.login.signUp(user)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: UserResponse) => {
        if (res.ok) {
          this.handleSignUp(res);
        }
      }, (err: HttpErrorResponse) => {
        err.status === 0 ?
        this.handleError('server') : this.handleError();
    });
  }

  private createSignUpForm(): void {
    this.signUpForm = new FormGroup({
          name: new FormControl(null, [Validators.required,
                                       Validators.minLength(3),
                                       Validators.maxLength(20),
                                       Validators.pattern(this.namePattern)]),
         email: new FormControl(null, [Validators.required,
                                       Validators.email,
                                       Validators.minLength(5),
                                       Validators.maxLength(35)]),
      password: new FormControl(null, [Validators.required,
                                       Validators.minLength(5),
                                       Validators.maxLength(25)]),
       password2: new FormControl('', [Validators.required])
    }, { validators: this.theyMatchError('password', 'password2')});
  }

  private theyMatchError(one: string, two: string) {
    return (group: FormGroup) => {
      const p = group.controls[one].value;
      const m = group.controls[two].value;
      if (p === m) {
        this.matchError = false;
        return null;
      }
      this.matchError = true;
      return { error: true };
    };
  }

  private handleSignUp(data: UserResponse): void {
    this.dialogRef.close();
    this.store.dispatch(UserActions.setUser({user: data.user}));
    this.ls.setKey('token', data.token);
    this.ls.setKey('user', data.user._id);
    this.crafter.toaster(data.user.name, 'welcome', 'info');
    this.router.navigateByUrl('/profile');
  }

  private handleError(type?: string): void {
    if (type === 'server') {
      this.crafter.toaster('server.error',
                           'server.bad',
                           'error');
    } else {
      this.crafter.toaster('sign.in.error',
                           'email.unique',
                           'error');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}