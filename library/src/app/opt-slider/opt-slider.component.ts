import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
// import { Observable, interval , of } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { startWith, take, map } from 'rxjs/operators';
import { slider } from './hello-slide.animations';

@Component({
  selector: 'app-opt-slider',
  templateUrl: './opt-slider.component.html',
  styleUrls: ['./opt-slider.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptSliderComponent implements OnInit {

  @Input() name: string;
    imgags = [
        'assets/bg.jpg',
        'assets/car.png',
        'assets/canberra.jpg',
        'assets/holi.jpg'
    ];
    carouselTileItems: Array < any > =[0, 1, 2, 3, 4, 5];
    public carouselTileConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 2, lg: 4, all: 0 },
        speed: 250,
        point: {
            visible: true
        },
        touch: true,
        loop: true,
        animation: 'lazy'
    };
    tempData: any[];

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.tempData = [];
        
    }
    

}
