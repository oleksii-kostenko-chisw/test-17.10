import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { MemberCardComponent } from './team/components/member-card/member-card.component';
import { TeamBlockComponent } from './team/components/team-block/team-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MemberCardComponent,
    TeamBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
