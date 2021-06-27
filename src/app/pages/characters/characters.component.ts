import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy, AfterViewInit {
  dtElement: any;
  @ViewChild(DataTableDirective)
  set dataTableApp(dir: DataTableDirective) {
    this.dtElement = dir
  };

  houses = [
    { name: 'Slytherin', value: 'slytherin'},
    { name: 'Gryffindor', value: 'gryffindor'},
    { name: 'Ravenclaw', value: 'ravenclaw'},
    { name: 'Hufflepuff', value: 'hufflepuff'},
  
  ];
  default: string = 'slytherin';
  housesForm: FormGroup;
  listCharacters: any;
  dtOptions: DataTables.Settings = {};


  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private charactersService: CharactersService) {
      this.housesForm = new FormGroup({
        selectedHouse: new FormControl(null)
      });
      this.housesForm.controls['selectedHouse'].setValue(this.default, 
        {onlySelf: true});
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
  }
  ngAfterViewInit(): void {
    this.selectHouse(this.default);
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
       dtInstance.destroy();
       this.dtTrigger.next();     
    });
  }
  selectHouse(name?: string) {
    let valHouse = this.housesForm.get('selectedHouse');
    this.charactersService.getCharacters(valHouse?.value || name).subscribe((res) => {
      console.log(res);
      this.listCharacters = res;
      if(name){
        this.dtTrigger.next();
      } else {
        this.rerender();
      }
      
    }, error => {
      // Error
      console.log(error);
    });


  }
}
