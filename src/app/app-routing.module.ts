import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { ListarUnaTareaComponent } from './listar-una-tarea/listar-una-tarea.component';

const routes: Routes = [
  {path: "listar", component:ListarComponent},
  {path: "listarunatarea", component:ListarUnaTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
