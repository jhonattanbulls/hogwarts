import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent
  }
];


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    PipesModule
  ]
})
export class TeachersModule { }
