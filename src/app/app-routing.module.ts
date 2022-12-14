import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';


const routes: Routes = [
  {path: 'createPost', component: CreatePostComponent},
  {path: 'updatePost', component: UpdatePostComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


//export default routes;
export class AppRoutingModule { }

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
