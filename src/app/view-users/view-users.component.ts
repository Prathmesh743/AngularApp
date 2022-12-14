import { Component,OnInit } from '@angular/core';
import { UserService } from 'hello-world-services/user.service';
import { IPost } from '../Hello-World.interface/IPost';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

       userData: IPost[];
       check: boolean;
       errMsg:string;
       //responsePostsData: any;
      constructor(private _userservice:UserService)
      {
         console.log("view user constructor invoked");
      }

      ngOnInit(){

        this.FetchPostsData();

        console.log("view user component intiatited");
    }

      FetchPostsData()
      {
        this._userservice.FetchUSer().subscribe(
            responseUserData=> {
               this.userData= responseUserData;
               this.check= true;
            },
            responseErrorData =>{
               this.errMsg= responseErrorData
               this.check=false;
               console.log(this.errMsg);
            },
            () => console.log("Fetch Posts Data method excuted successfully")
        );
      }
}
