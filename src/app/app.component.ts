import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  row : Number;
  seats :Number;
  theatreArr = [];
  onSubmit() {
    // create seats dummy array... 
    const dummySeats = [];
    for(let i = 0; i < this.seats; i++)  {
      dummySeats.push(i);
    }
    this.theatreArr.push({row: this.row, seats: dummySeats});
    this.theatreArr.sort((a, b) => a.row - b.row);
    console.log(this.theatreArr);
  }
}
