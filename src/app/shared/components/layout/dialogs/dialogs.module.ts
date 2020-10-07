import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ContentBoxModule } from '../boxes/content-box/content-box.module';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SpinnerModule } from '../../snippets/spinner/spinner.module';
import { InboxAccessModule } from '@store/inbox/data-access/inbox-access.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TestResultComponent } from './test-result/test-result.component';
import { NewInboxComponent } from './new-inbox/new-inbox.component';

const Material = [
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    DeleteAccountComponent,
    NoAccountComponent,
    MessageModalComponent,
    EditProfileComponent,
    ConfirmationComponent,
    TestResultComponent,
    NewInboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentBoxModule,
    SpinnerModule,
    InboxAccessModule,
    NgxMatSelectSearchModule,
    ...Material
  ]
})

export class DialogsModule { }
