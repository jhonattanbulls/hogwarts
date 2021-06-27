import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'characters', loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule) },
  { path: 'students', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule) },
  { path: 'teachers', loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule) },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
