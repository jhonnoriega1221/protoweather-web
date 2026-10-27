import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ImageService } from '../../../ui/image/services/image.service';
@Component({
  selector: 'pw-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SunComponent implements AfterViewInit {
  @ViewChild('imageLoader') image!: ElementRef<HTMLImageElement>;

  constructor(private imageService: ImageService) {}

  ngAfterViewInit(): void {
    this.imageService
      .load('/assets/weather_backgrounds/sun.webp')
      .subscribe(() => {
        this.image.nativeElement.classList.add('loaded');
      });
  }
}
