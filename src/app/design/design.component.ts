import { OnInit, Component ,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'app-design',
    templateUrl:'./design.component.html',
    styleUrls:['./design.component.css']
})

export class DesignComponent implements OnInit{
    
    constructor() { }
    inputTask:string="";
   @Output() generate = new EventEmitter()

   
    toDoAdd()
    { if(this.inputTask!=""){
        this.generate.emit(this.inputTask)
        this.inputTask=""
      }
  
    }
    ngOnInit() {
    }
  
}