import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPost } from 'src/app/Hello-World.interface/IPost';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http:HttpClient) { }
   users: IPost[]

    //Fetch User Data From external services
   FetchUSer():Observable<IPost[]>
   {
       let data = this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts").pipe( catchError(this.errorHandler));
       return data;
   }

   errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  } 

}
