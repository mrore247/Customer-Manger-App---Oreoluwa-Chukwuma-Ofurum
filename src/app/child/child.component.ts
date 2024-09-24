import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildService } from '../services/child.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // name!: string;
  // subsciption: Subscription;
  // constructor(private childService: ChildService) {
  //   this.subsciption = childService.name$.subscribe((response) => {
  //     this.name = response;
  //   });
  // }
  // @Input()
  // childInput: string | undefined;
  // @Output()
  // nameEmitter = new EventEmitter<string>();
  // displayName() {
  //   this.nameEmitter.emit('Oreoluwa Ofurum');
  // }
}
