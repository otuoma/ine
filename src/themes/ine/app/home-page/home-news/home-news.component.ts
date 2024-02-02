import {Component, OnInit} from '@angular/core';
import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';

@Component({
  selector: 'ds-home-news',
  templateUrl: './home-news.component.html'
})

/**
 * Component to render the news section on the home page
 */
export class HomeNewsComponent extends BaseComponent implements OnInit{
  randomClass = 'background-image background-image-3';
  ngOnInit() {
    let image_classes = [
      'background-image background-image-1',
      'background-image background-image-2',
      'background-image background-image-5',
      'background-image background-image-6',
      'background-image background-image-7',
      'background-image background-image-8'
    ];

    let randomNum = Math.floor(Math.random() * image_classes.length);
    this.randomClass = image_classes[randomNum];

  }
}

