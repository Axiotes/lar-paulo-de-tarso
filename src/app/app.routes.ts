import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { EthicalValuesComponent } from './pages/ethical-values/ethical-values.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { TypeDonationComponent } from './pages/type-donation/type-donation.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about-us", component: AboutComponent },
    { path: "news", component: NewsComponent },
    { path: "ethical-values", component: EthicalValuesComponent },
    { path: "contact", component: ContactComponent },
    { path: "donations", component: DonationsComponent },
    { path: "donations/:type_donation", component: TypeDonationComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutesModule { }