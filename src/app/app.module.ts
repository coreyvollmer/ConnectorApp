import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';
import { AccountingPageComponent } from './accounting-page/accounting-page.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'quote', component: QuotePageComponent },
  { path: 'policy', component: PolicyPageComponent },
  { path: 'accounting', component: AccountingPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardPageComponent,
    HomePageComponent,
    QuotePageComponent,
    PolicyPageComponent,
    AccountingPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

