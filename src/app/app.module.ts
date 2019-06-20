import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './containers/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatButtonModule, MatIconModule } from '@angular/material';
import { MomentUtcDateAdapter } from './date-adapter';
import { UsersFilterComponent } from './components/users-filter/users-filter.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersFilterComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
