import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { ListarUnaTareaComponent } from './listar-una-tarea/listar-una-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarUnaTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
