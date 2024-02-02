import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showParagraphs: boolean = true;

  toggleParagraphs() {
    this.showParagraphs = !this.showParagraphs;
  }
}
