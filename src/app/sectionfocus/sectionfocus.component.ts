import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { merge } from 'rxjs/operators';

function observeFocus(element: HTMLElement) {
  return fromEvent(element, 'focus').pipe(
    merge(fromEvent(element, 'blur'))
  );
}

@Component({
  selector: 'app-sectionfocus',
  templateUrl: './sectionfocus.component.html',
  styleUrls: ['./sectionfocus.component.css']
})
export class SectionfocusComponent {

  @ViewChild('myElement', { static: true })
  myElement!: ElementRef;

  ngAfterViewInit() {
    observeFocus(this.myElement.nativeElement).subscribe(event => {
      if (event.type === 'focus') {
        console.log('Element focused');
      } else if (event.type === 'blur') {
        console.log('Element blurred');
      }
    });
  }

}
