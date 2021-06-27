import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent
  },
  {
      path: 'create',
      loadChildren: () => import('./create/create.module').then( m => m.CreateModule)
  },
  {
      path: 'application',
      loadChildren: () => import('./application/application.module').then( m => m.ApplicationModule)
  },
];

@NgModule({
  declarations: [
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    PipesModule
  ]
})
export class StudentsModule { }
