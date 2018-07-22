import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myArray = [
    {
      name: 'Joe',
      ranking: 5
    },
    {
      name: 'Bob',
      ranking: 4
    },
    {
      name: 'Jerry',
      ranking: 1
    },
    {
      name: 'Michael',
      ranking: 7
    },
    {
      name: 'Diana',
      ranking: 50
    },
    {
      name: 'Bill',
      ranking: 13
    },
    {
      name: 'Monica',
      ranking: 3
    },
    {
      name: 'Rachel',
      ranking: 5
    },
    {
      name: 'Judith',
      ranking: 9
    }

  ];
  averageNum = 0;
  constructor() {
  }

  ngOnInit() {
  }

  sort(array) {
    array.sort(function (a, b) {
      if (a.ranking > b.ranking) {
        return 1;
      } else if (a.ranking < b.ranking) {
        return -1;
      } else {
        return 0;
      }
    });
    return console.table(array);
  }

  average(array) {
    let averageNumber = 0;
    array.forEach(function (element) {
      averageNumber = averageNumber + element.ranking;
    });
    this.averageNum = averageNumber / array.length;
  }

  print() {
    console.table(this.myArray);
  }
}
