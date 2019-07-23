import { Component, OnInit, HostListener } from '@angular/core';
import { iframeUrl } from '../../constants';

interface IframeDimensions {
  width: string;
  height: string;
}

@Component({
  selector: 'app-apply-component',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  public iframeUrl: string;
  public iframeDimensions: IframeDimensions;
  public loading: boolean;

  constructor() {
  }
  ngOnInit() {
    this.loading = true;
    this.iframeUrl = iframeUrl;
  }

   public onLoadIFrame() : void {
    this.loading = false;
    window.dispatchEvent(new Event('resize'));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      let width: number | boolean;
      width = event.target.innerWidth;
      switch(width) {
          case (width >= 992):
            this.iframeDimensions.width = "745";
            this.iframeDimensions.height = "850";
          break;
          case (width >= 768 && width < 992):
              this.iframeDimensions.width = "100%";
              this.iframeDimensions.height = "850";
          break;
          case (width >= 576 && width < 768):
              this.iframeDimensions.width = "135%";
              this.iframeDimensions.height = "850";
          break;
      }
  }
}
