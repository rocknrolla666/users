import { Component, ChangeDetectionStrategy, OnChanges, ViewChild, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { UsersFilter } from '../../models/users-filter.model';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent implements OnInit, OnChanges {
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['name', 'dob', 'phone', 'city'];
  pageSizeOptions: number[] = [10, 20, 30];
  @Input() users: User[];
  @Input() filter: UsersFilter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.users && changes.users.currentValue) {
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    }
    if (this.filter) {
      this.applyFilter(this.filter);
    }
  }

  private applyFilter(usersFilter: UsersFilter) {
    this.dataSource.filterPredicate = this.createFilterPredicate();
    this.dataSource.filter = JSON.stringify(usersFilter);
  }

  private createFilterPredicate() {
    return (data: User, filter: string) => {
      const usersFilter: UsersFilter = JSON.parse(filter);

      if (usersFilter.phone) {
        const userPhone = data.phone.replace(/\D+/g, '');
        if (!userPhone.includes(usersFilter.phone.toString())) {
          return false;
        }
      }

      if (usersFilter.firstName && !data.firstName.includes(usersFilter.firstName.trim().toLocaleLowerCase())) {
        return false;
      }

      if (usersFilter.city && !data.city.includes(usersFilter.city.trim().toLocaleLowerCase())) {
        return false;
      }

      if (usersFilter.dateFrom) {
        const userDOB = Date.parse(data.dob.split(' ')[0]);
        const filterDateFrom = Date.parse(usersFilter.dateFrom.split('T')[0]);
        if (userDOB < filterDateFrom) {
          return false;
        }
      }

      if (usersFilter.dateTo) {
        const userDOB = Date.parse(data.dob.split(' ')[0]);
        const filterDateTo = Date.parse(usersFilter.dateTo.split('T')[0]);
        if (userDOB > filterDateTo) {
          return false;
        }
      }

      return true;
    };
  }
}
