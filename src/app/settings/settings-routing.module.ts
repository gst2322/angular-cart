import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { SettingsComponent } from '@app/settings/settings.component';
import { Shell } from '@app/shell/shell.service';
import { ProductsComponent } from '@app/products/products.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'products', component: ProductsComponent },
    { path: 'settings', component: SettingsComponent, data: { title: extract('Settings') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SettingsRoutingModule {}
