import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from 'src/forum/Post/Post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from 'src/forum/Main/Main.component';
@NgModule({
  declarations: [		
    AppComponent,
    PostComponent,
    NavbarComponent,
    MainComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
