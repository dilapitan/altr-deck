import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";

const material = [MatButtonModule, MatGridListModule, MatToolbarModule];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
