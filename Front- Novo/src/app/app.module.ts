import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from 'src/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TemplateComponent } from './template/template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AssociaContaAdminComponent } from './associa-conta-admin/associa-conta-admin.component';
import { AssociaContaClienteComponent } from './associa-conta-cliente/associa-conta-cliente.component';
import { ListacontasComponent } from './listacontas/listacontas.component';
import { ValidarContaAdminComponent } from './validar-conta-admin/validar-conta-admin.component';
import { PauseClienteComponent } from './pause-cliente/pause-cliente.component';
import { PauseAdminComponent } from './pause-admin/pause-admin.component';
import { HomeComponent } from './home/home.component';
import { CallComponent } from './call/call.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    TemplateComponent,
    AssociaContaAdminComponent,
    AssociaContaClienteComponent,
    ListacontasComponent,
    ValidarContaAdminComponent,
    PauseClienteComponent,
    PauseAdminComponent,
    HomeComponent,
    CallComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
