import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, filter} from 'rxjs/internal/operators';
import { UsersFilter } from '../../models/users-filter.model';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersFilterComponent implements OnInit, OnDestroy {
  filterForm: FormGroup;
  filterFormChangesSubs: Subscription;
  @Output() filterChanges = new EventEmitter<UsersFilter>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filterForm = this.fb.group({
      firstName: [''],
      phone: [''],
      city: [''],
      dateFrom: [null],
      dateTo: [null]
    });

    this.filterFormChangesSubs = this.filterForm.valueChanges
      .pipe(
        filter(() => this.filterForm.valid),
        debounceTime(500)
      )
      .subscribe((usersFilter: UsersFilter) => this.filterChanges.emit(usersFilter));
  }

  ngOnDestroy() {
    this.filterFormChangesSubs.unsubscribe();
  }

  onReset() {
    this.filterForm.reset();
  }
}
