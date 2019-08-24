import { Component, OnInit, Input } from '@angular/core';
import{Post} from '../post'
  import { from } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
// posts = [
  // {title:'First Post', Content:'First post\'s content'},
  // {title:'Second Post', Content:'Second post\'s content'},
  //  {title:'Third Post', Content:'Third post\'s content'}
  //];
  @Input() posts:Post[] =[];

  constructor() { }

  ngOnInit() {
  }

}
