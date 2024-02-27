import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { MarketDataComponent } from './components/market-data/market-data.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'market', component: MarketDataComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
