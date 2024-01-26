import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { HistoryComponent } from './history/history.component';

const routes : Routes = [
  {path: '', component: MainComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'merchandising', component: MerchandisingComponent},
  {path: 'about-us', component: AboutUsComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutUsComponent,
    MerchandisingComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
