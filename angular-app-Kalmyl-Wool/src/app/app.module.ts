import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/ui/Header/header/header.component';
import { FooterComponent } from './components/ui/Footer/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { FooterContactsComponent } from './components/ui/Footer/footer-contacts/footer-contacts.component';
import { FooterNavComponent } from './components/ui/Footer/footer-nav/footer-nav.component';
import { MainPageTextComponent } from './components/pages/main-page/main-page-text/main-page-text.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CompanyComponent } from './components/pages/company/company.component';
import { ProcessComponent } from './components/pages/process/process.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { FormComponent } from './components/pages/form/form.component';
import { FormsModule } from '@angular/forms';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { StaffComponent } from './pages/staff/staff.component';
import { AssortmentComponent } from './pages/assortment/assortment.component';
import { AssortmentItemComponent } from './components/assortment-item/assortment-item.component';
import { StaffCardComponent } from './components/staff-card/staff-card.component';
import { AssortmentCardComponent } from './components/assortment-card/assortment-card.component';
import { AssortmentDetailedComponent } from './pages/assortment-detailed/assortment-detailed.component';
import { ButtonComponent } from './components/button/button.component';
import { GeneralService } from './services/general.service';





export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    MainPageComponent,
    FooterContactsComponent,
    FooterNavComponent,
    MainPageTextComponent,
    AboutComponent,

    CompanyComponent,
    ProcessComponent,
    NewsComponent,
    NewsCardComponent,
    FormComponent,

    AddArticleComponent,
    StaffComponent,
    AssortmentComponent,
    AssortmentItemComponent,
    StaffCardComponent,
    AssortmentCardComponent,
    AssortmentDetailedComponent,
    ButtonComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
