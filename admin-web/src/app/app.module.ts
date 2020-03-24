import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { XhrInterceptor } from './xhr-interceptor';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';
import { UnauthenticatedComponent } from './unauthenticated/unauthenticated.component';
import { ChangesComponent } from './changes/changes.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent,
    UnauthenticatedComponent,
    ChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
