import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatCardModule,
        MatGridListModule,
        MatTabsModule,
        MatToolbarModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatGridListModule,
        MatTabsModule,
        MatToolbarModule,
        MatButtonModule
    ]
})
export class AppMaterialModule {}