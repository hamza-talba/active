import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "dashboard",
        canActivate:[AuthGuard],
        loadChildren: () =>
        import("./dashboard/dashboard.module").then(
          (m) => m.DashboardModule
        ),
      },
      {
        path:"auth",
        loadChildren: () =>
        import("./auth/auth.module").then(
          (m) => m.AuthModule
        ),
      },
      {
        path:"**",
        redirectTo:"dashboard"
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
