import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {StoriesComponent} from "./stories/stories.component";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  {path:'', component:PostsComponent},
  {path:'posts', component:PostsComponent},
  {path:'story', component:StoriesComponent},
  {path:'headers', component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
