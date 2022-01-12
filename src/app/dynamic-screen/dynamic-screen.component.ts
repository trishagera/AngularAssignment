import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-screen',
  templateUrl: './dynamic-screen.component.html',
  styleUrls: ['./dynamic-screen.component.css']
})
export class DynamicScreenComponent implements OnInit {
  @ViewChild('observer') lastDiv: any;
  public maxCount: number[];
  public scrollCount: number[];
  private lastDivCount: number;
  

  constructor(private renderer: Renderer2) { 
    this.maxCount = Array.from(Array(500).keys());
    this.scrollCount = [];
    this.lastDivCount = 15;
  }

  ngOnInit(): void {
    this.scrollCount = this.maxCount.slice(1, this.lastDivCount);
    console.log(this.scrollCount);
    console.log(this.maxCount)
  }

  ngAfterViewInit(): void {
    this.lastDiv = this.renderer.selectRootElement(this.lastDiv.nativeElement);
    //defining options for intersectinObserver
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    //defining callback method for intersection observer
    const addMoreDivs = ((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(entry.isIntersecting && this.lastDivCount < this.maxCount.length - 1) {
          this.scrollCount = this.scrollCount.concat(this.maxCount.slice(this.lastDivCount, this.lastDivCount + 10))
          this.lastDivCount = this.lastDivCount + 10;
        }
      })
    });
    const observer = new IntersectionObserver(addMoreDivs.bind(window), options);
    observer.observe(this.lastDiv);
  }

  public showAlert(i: number) {
    alert("Button '" + i + "' is clicked");
  }
}
