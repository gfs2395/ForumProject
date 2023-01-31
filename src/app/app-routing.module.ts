import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/forum/Main/Main.component';
import { PostComponent } from 'src/forum/Post/Post.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children:[
      {
        path: 'post',
        component: PostComponent
      },
    ]
    
},
{
  path: 'profile',
  component: PostComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
