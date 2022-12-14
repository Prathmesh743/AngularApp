import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit{

      title:string
      master= 'Master';
      heroes: any[];

    constructor()
    {
       console.log("constructor intialiated")
       console.log(`title is:${this.title}`)
       
    }

    ngOnInit(): void {
        console.log("Hello-Component Class intiated")
        console.log("This is Parent Component")
        this.heroes= [{'name':'Spiderman'},{'name': 'Iron Man'}]
        //this.title= "Hello Angular";
    }
}
