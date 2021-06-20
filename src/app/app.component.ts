import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Two-Way Data Binding Example';
  count = 0;
  startCount: string = "0";
  endCount: string = "10";
  allowInput = false;
  constructor() { 
  }

  ngOnInit() {
    console.log(this.title);
    
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.countFn(this.count + 1)
      }, 1000);
    
  }

  countFn (count: any): any {
    this.count = count;
    console.log(count);
    if(count < Number(this.endCount)) {
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.countFn(this.count + 1)
      }, 1000);
    } else {
      this.allowInput = true;
    }
  }

  restart() {
    this.allowInput = false;
    this.count = Number(this.startCount);
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.countFn(this.count + 1)
    }, 1000);
  }
  reset() {
    this.startCount = "0";
    this.endCount = "10";
  }
}
