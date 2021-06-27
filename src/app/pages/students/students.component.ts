import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { StudentsService } from 'src/app/core/services/students/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy, AfterViewInit {
  dtElement: any;
  @ViewChild(DataTableDirective)
  set dataTableApp(dir: DataTableDirective) {
    this.dtElement = dir
  };
  listStudents:any;
  dtOptions: DataTables.Settings = {};

  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
  }
  ngAfterViewInit(): void {
    this.fetchStudents();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  fetchStudents(){
    this.studentsService.getStudents().subscribe((res)=> {
      this.listStudents = res;
      this.dtTrigger.next();
    }, error =>{
      console.log(error);
    });
  }
}
