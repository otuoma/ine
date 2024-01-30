import { Component } from '@angular/core';
import { FooterComponent as BaseComponent } from '../../../../app/footer/footer.component';

@Component({
  selector: 'ds-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent extends BaseComponent {
  showTopFooter = true;
  dateObj: number = Date.now();
}
