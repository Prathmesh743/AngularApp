import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPost } from 'src/app/Hello-World.interface/IPost';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

    postObj: IPost;
    titleObj: Object;

    CreateNewPost(userId: Number,id:Number,title:string,body:string):Observable<IPost>
    {
         this.postObj= { userId : userId , id: id, title: title, body: body};
         //return data from http post response
         return this.http.post<IPost>("https://jsonplaceholder.typicode.com/posts",this.postObj).pipe(catchError(this.HandleError));
    }

    UpdatePost(id: Number,title: string):Observable<IPost>
    {
         this.titleObj = {title: title};
         var url= "https://jsonplaceholder.typicode.com/posts/";
         var postid= id;
         var newUrl= `${url}${postid}`;
          return this.http.patch<IPost>(newUrl,this.titleObj).pipe(catchError(this.HandleError));
    }

    HandleError(error: HttpErrorResponse)
    {
        console.log(error);
        return throwError(error.message || "Server Error");
    }
}
