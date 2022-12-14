import { Component,OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';

import { PostService } from 'hello-world-services/post.service';
import { IPost } from '../Hello-World.interface/IPost';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit{
   
    createPost: FormGroup;
    receivePost: IPost;
    responseStatus: string;
    errMsg: string;
   constructor(private formbuilder: FormBuilder, private _postService: PostService){
    console.log("create new post component intiated")
        
     }

   ngOnInit() {
       console.log("create new post component intiated");
       this.createPost= this.formbuilder.group(
        {
           userId: ['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
           id: ['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
           title: ['',[Validators.required, CheckPostTitle]],
           body: ['',[Validators.required]]
        }
       )
   }

   SubmitForm(form: FormGroup)
   {
      console.log(form.value.userId);
      console.log(form.value.title);

         //calling 
        this._postService.CreateNewPost(form.value.userId,form.value.id,form.value.title,form.value.body).subscribe(
            responsePostData  => {
                //this.responseStatus= responsePostData
                 this.receivePost= responsePostData
                 console.log(this.receivePost);
            },
            responseErrorData => {
                this.errMsg= responseErrorData;
                console.log(this.errMsg);
            },
            () => console.log("SubmitLoginForm method executed successfully")
        )
   }
}

function CheckPostTitle(control: FormControl) {
   
  let vulgerWords= ['bloody','bitch']
  let currentTitle= control.value;
  //console.log(currentTitle);
  let res= vulgerWords.some( element => {
      if(currentTitle.includes(element))
      {
         return true
      }
      else
      {
         return false
      }
  });

  if(!res)
  {
       return  null;
  }
  else
  {
      return{
           vulgerMsg: {
              message: "Title should not contain vulger words"
           }
      };
  }

}


 