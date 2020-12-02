import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tourList: any = [];
  description: any = '';

  constructor() { }

  ngOnInit(): void {
    this.populateTourList();
  }

  populateTourList(): any {
    const description =  'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
    const imageForCox = 'https://blog.amarroom.com/wp-content/uploads/2018/11/Kuyakata-tour-guide.jpg';
    const imageForSaint = 'https://s3-ap-southeast-1.amazonaws.com/staging-hifi-digital/wp-content/uploads/sites/2/2018/04/28173004/day-tour-from-dhaka-chandpur-2.jpg';
    for (let i = 0; i <= 23; i++) {
      const tour = {
        id: i,
        title: 100 % i === 0 ? `Cox bazer ${i + 1}` : `Saint Marteen ${i + 1}`,
        subTitle: `Bangladesh, Cox`,
        description,
        image: 100 % i === 0 ? imageForCox : imageForSaint
      };
      this.tourList.push(tour);
    }
  }

}
