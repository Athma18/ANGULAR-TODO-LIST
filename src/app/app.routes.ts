import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterFormTDComponent } from './register-form-td/register-form-td.component';
import { RegisterFormRFComponent } from './register-form-rf/register-form-rf.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    } ,
 
    {
        path:'registerTD',component:RegisterFormTDComponent
    },
    {
        path:'registerRF',component:RegisterFormRFComponent
    },
      {
        path:'**',component:PageNotFoundComponent

    },

]
