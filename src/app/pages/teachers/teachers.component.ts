import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TeachersService } from 'src/app/core/services/teachers/teachers.service';
import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, OnDestroy, AfterViewInit {
  dtElement: any;
  @ViewChild(DataTableDirective)
  set dataTableApp(dir: DataTableDirective) {
    this.dtElement = dir
  };
  listTeachers: any;
  dtOptions: DataTables.Settings = {};

  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private teachersService: TeachersService ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
  }
  ngAfterViewInit(): void {
    this.fetchTeachers();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  fetchTeachers(){
    this.teachersService.getTeachers().subscribe((res)=> {
      this.listTeachers = res;
      this.dtTrigger.next();
    }, error =>{
      console.log(error);
    });
  }
}
