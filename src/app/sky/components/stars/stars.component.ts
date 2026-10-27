import { AfterViewInit, Component, ElementRef, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ImageService } from '../../../ui/image/services/image.service';

@Component({
    selector: 'pw-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class StarsComponent implements AfterViewInit {

  @Input() actualHour:number = 0;
  @ViewChild('imageLoader') image!:ElementRef<HTMLImageElement>;

  constructor(private imageService:ImageService){}

  ngAfterViewInit(): void {
      this.imageService.load('/assets/weather_backgrounds/stars.webp').subscribe( () => {
        this.image.nativeElement.classList.add('loaded');
      })
  }

}
