import { ChangeDetectorRef, Component, OnDestroy, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { interval } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
// import { Observable } from 'rxjs';
// import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: '1' })),
      state('out', style({ opacity: '0' })),
      transition('* => *', [
        animate(1000)
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit {
  private bgImgs: Array<any>;
  private current = 0;
  currentImage;
  state = 'in';
  counter = 0;
  enableAnimation = false;

  constructor(private cdref: ChangeDetectorRef, private sanitize: DomSanitizer) {
    this.bgImgs = [
      './assets/images/269530.jpg',
      './assets/images/3200191.jpg',
      './assets/images/colored-smoke.jpg',
    ];
    this.currentImage = this.bgImgs[0];
  }

  sourceSubscribe;
  ngOnInit() {
    this.sourceSubscribe = interval(10000)
      .subscribe(x => {
        this.runAnimation();
      });
  }

  ngOnDestroy() {
    if (this.sourceSubscribe) {
      this.sourceSubscribe.unsubscribe();
    }

  }

  ngAfterViewInit() {
    this.cdref.detectChanges();
  }

  ngAfterViewChecked() {
    this.cdref.detectChanges();
  }
  runAnimation() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  toggleImg() {
    setTimeout(() => {
      this.currentImage = this.sanitize.bypassSecurityTrustStyle(`url(${this.bgImgs[this.current]})`);
      this.current === this.bgImgs.length - 1 ? (this.current = 0) : ++this.current;
    });
  }

  onDone($event) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }

  toggleState() {
    if (this.counter < 2) {
      setTimeout(() => {
        this.state = this.state === 'in' ? 'out' : 'in';
      });
      this.counter++;
    }
  }
}


