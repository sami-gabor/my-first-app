import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { BasicsAssignmentTwoComponent } from './basics-assignment-two/basics-assignment-two.component';
import { BasicAssignmentThreeComponent } from './basic-assignment-three/basic-assignment-three.component';
import { SectionFiveComponent } from './section-five/section-five.component';
import { CockpitComponent } from './section-five/cockpit/cockpit.component';
import { ServerElementComponent } from './section-five/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    BasicsAssignmentTwoComponent,
    BasicAssignmentThreeComponent,
    SectionFiveComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
