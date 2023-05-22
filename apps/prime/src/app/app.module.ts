import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { PaginatorModule } from "primeng/paginator";
import { ScrollerModule } from "primeng/scroller";
import { SelectButtonModule } from "primeng/selectbutton";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { TriStateCheckboxModule } from "primeng/tristatecheckbox";
import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { CustomerService } from "./table/service/customerservice";
import { TableComponent } from './table/table.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateModule } from 'primeng/animate';



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, TableComponent],
  imports: [
    BrowserModule,
    TooltipModule,
    SliderModule,
    AnimateModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    FormsModule,
    TagModule,
    MultiSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    PaginatorModule,
    SelectButtonModule,
    ScrollerModule,
    TableModule,
    TriStateCheckboxModule,
    BrowserModule,
    RouterModule.forRoot([  { path: '', component: TableComponent }],{ initialNavigation: "enabledBlocking" }),
  ],
  bootstrap: [AppComponent,TableComponent],
  providers: [ CustomerService ]
})
export class AppModule {}
