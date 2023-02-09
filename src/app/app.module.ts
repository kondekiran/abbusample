import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthserviceService } from './authservice.service';
import { RegistrationComponent } from './registration/registration.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { TableEditComponent } from './Dialog/table-edit/table-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegistrationComponent,
    TableEditComponent,
  ],
  imports: [
    ToastrModule.forRoot({
      timeOut: 5000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    ToastrModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  providers: [AuthserviceService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
