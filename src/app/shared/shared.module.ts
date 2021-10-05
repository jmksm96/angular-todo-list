import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
} from '@ant-design/icons-angular/icons';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];
@NgModule({
  declarations: [],
  imports: [CommonModule, NzIconModule.forRoot(icons)],
  exports: [
    NzInputModule,
    NzTypographyModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,

    NzLayoutModule,
    NzGridModule,
    NzTypographyModule,
  ],
})
export class SharedModule {}
