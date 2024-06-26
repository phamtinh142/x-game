import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: AdminComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [AdminComponent],
  bootstrap: [AdminComponent]
})
export class AdminModule {}
