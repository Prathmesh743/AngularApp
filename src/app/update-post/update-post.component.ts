import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { PostService } from 'hello-world-services/post.service';
import { IPost } from '../Hello-World.interface/IPost';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
    
    updatePost: FormGroup;
    newPost: IPost;
    errMsg: string;
    constructor(private _formbuilder: FormBuilder, private _postservice: PostService){
      console.log("update post component constructor");
    }

    ngOnInit()
    {
        console.log("Update Post component intiated");
        this.updatePost= this._formbuilder.group(
          {
             id: ['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
             title: ['',[Validators.required, CheckPostTitle]],
          }
         )
    }


    SubmitForm(form: FormGroup): void
    {
        let id= form.value.id;
        let title= form.value.title;
        this._postservice.UpdatePost(id,title).subscribe(
             responsePostData => {
                this.newPost= responsePostData
                console.log(this.newPost);
             },
             responseErrorData => {
                this.errMsg= responseErrorData
                console.log(this.errMsg);
             }
         );
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
