import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login.component/login.component.component";
import { admnHome } from "./admincomponents/admnHome.Component";
import { accessUser } from './admincomponents/accessUser.component';
import { crtUser } from './admincomponents/crtUser.component';
import { crtRole } from './admincomponents/crtRole.component';
import { admPrfl } from './admincomponents/admPrfl.component';
import { oprtrHome } from './operatorcomponent/oprtrHome.Component';
import { oprtraccessUser } from './operatorcomponent/oprtraccessUser.component';
import { usereHome } from './usercomponents/userHome.Component';
import { userPrfl } from './usercomponents/userPrfl.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
},
{
    path:'admnHome',
    component: admnHome,
    children :[
        {
          path:'accsUser',
          component:accessUser
        },
        {
          path:'crtUser',
              component:crtUser
        },
        
        {
          path:'crtRole',
              component:crtRole
        },
        {
          path:'admnprfl',
              component:admPrfl
        },
    ]
},
{
  path:'oprtrHome',
  component:oprtrHome,
  children :[
    {
      path:'oprtrccsUser',
      component:oprtraccessUser
    },
    {
      path:'crtUser',
          component:crtUser
    },
    {
      path:'admnprfl',
          component:admPrfl
    },
]
},
{
path:'userHome',
    component:usereHome,
    children :[
      {
        path:'userprfl',
        component:userPrfl
      }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
