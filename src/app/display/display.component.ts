import { OnInit, Component ,Input } from '@angular/core';

@Component({
    selector:'app-disp',
    templateUrl:'./display.component.html',
    styleUrls:['./display.component.css']
})

export class DisplayComponent implements OnInit{
    
    constructor() { }
    @Input() details:String[]=[];

    a:boolean=false;
    del(i:number)
  { let removed = this.details.splice(i,1);
  }
    ngOnInit() {
    }
  
}