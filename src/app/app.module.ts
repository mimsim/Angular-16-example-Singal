import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCardComponent } from "./my-card/my-card.component";
import { ApiServiceService } from './shared/services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UsersComponent } from './users/users.component';
import { UsersService } from './shared/services/users.service';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        UsersService,
        ApiServiceService,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MyCardComponent,
        UserDetailsComponent,
        UsersComponent,
        ToolbarComponent
    ]
})
export class AppModule { }
