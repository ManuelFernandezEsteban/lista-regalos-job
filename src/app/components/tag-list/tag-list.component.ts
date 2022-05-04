import { Component, Input } from '@angular/core';
import { Tag } from 'src/app/models/tag.models';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent {
  @Input()tags:Tag[]=[]

  constructor() { }
 

}
