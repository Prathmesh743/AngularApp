import { Component,Input,OnInit} from '@angular/core';
import { HelloComponentComponent } from '../hello-component/hello-component.component';

@Component({
  selector: 'app-msg-component',
  templateUrl: './msg-component.component.html',
  styleUrls: ['./msg-component.component.css']
})
export class MsgComponentComponent  implements OnInit{

   @Input() 
   constructor(){

   }

   ngOnInit(): void {
       
   }


}
