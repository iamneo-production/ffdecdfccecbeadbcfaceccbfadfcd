import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  fromCurr :string = '';
  toCurr   :string = '';
  amount !:number;
  result: string = 'sample';
  show:boolean = false;


  showResult()
  {
    console.log(this.fromCurr);
    console.log(this.toCurr);
    console.log(this.amount);
    if(this.fromCurr !='' && this.toCurr != '')
    {
      this.show = true;
    }
    else
    {
      this.show = false;
    }
  }
}
