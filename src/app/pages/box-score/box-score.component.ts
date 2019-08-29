import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-score',
  templateUrl: './box-score.component.html',
  styleUrls: ['./box-score.component.scss']
})
export class BoxScoreComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('Derp');
    route.params.subscribe(val => {
      console.log('params: ', val);
    });
   }

  ngOnInit() {
  }

}
