import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';

import { HeaderComponent } from './components/ui/Header/header/header.component';
import { FooterComponent } from './components/ui/Footer/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';

import { FooterIconComponent } from './components/ui/Footer/footer-icon/footer-icon.component';
import { FooterContactsComponent } from './components/ui/Footer/footer-contacts/footer-contacts.component';
import { FooterNavComponent } from './components/ui/Footer/footer-nav/footer-nav.component';
import { MainPageTextComponent } from './components/pages/main-page/main-page-text/main-page-text.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AboutTextComponent } from './components/pages/about/about-text/about-text.component';
import { AboutContentComponent } from './components/pages/about/about-content/about-content.component';
import { AboutDescriptionComponent } from './components/pages/about/about-description/about-description.component';
import { AboutSubDescriptionComponent } from './components/pages/about/about-sub-description/about-sub-description.component';
import { CompanyComponent } from './components/pages/company/company.component';
import { ProcessComponent } from './components/pages/process/process.component';
import { NewsComponent } from './components/pages/news/news.component';
import { NewsCardComponent } from './components/pages/news-card/news-card.component';
import { FormComponent } from './components/pages/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { NoveltyComponent } from './pages/novelty/novelty.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { StaffComponent } from './pages/staff/staff.component';
import { AssortmentComponent } from './pages/assortment/assortment.component';
import { AssortmentItemComponent } from './components/assortment-item/assortment-item.component';
import { StaffCardComponent } from './components/staff-card/staff-card.component';
import { AssortmentCardComponent } from './components/assortment-card/assortment-card.component';
import { AssortmentDetailedComponent } from './pages/assortment-detailed/assortment-detailed.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutNewContentComponent } from './components/pages/about/about-new-content/about-new-content.component'
import { NewServiceService } from './new-service.service';
import { CardRepository } from './repository/card';
import { AssortmentRepository } from './repository/assortment';
import { DetailedRepository } from './repository/detailed';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AdminComponent,
    MainPageComponent,
    FooterContactsComponent,
    FooterIconComponent,
    FooterNavComponent,
    MainPageTextComponent,
    AboutComponent,
    AboutTextComponent,
    AboutContentComponent,
    AboutDescriptionComponent,
    AboutSubDescriptionComponent,
    CompanyComponent,
    ProcessComponent,
    NewsComponent,
    NewsCardComponent,
    FormComponent,
    LoginComponent,
    NoveltyComponent,
    AddArticleComponent,
    StaffComponent,
    AssortmentComponent,
    AssortmentItemComponent,
    StaffCardComponent,
    AssortmentCardComponent,
    AssortmentDetailedComponent,
    ButtonComponent,
    AboutNewContentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [CardRepository,AssortmentRepository, DetailedRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
