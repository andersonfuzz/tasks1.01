import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './view/home/home.component';
import { CreateComponent } from './view/tasks/create/create.component';
import { TaskComponent } from './view/tasks/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './view/tasks/update/update.component';
import { DeleteComponent } from './view/tasks/delete/delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TaskComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
