import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formularion.component';
import { HeaderComponent } from './components/header/header.component';
import { TrabalhoComponent } from './components/trabalho/trabalho.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    TrabalhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
