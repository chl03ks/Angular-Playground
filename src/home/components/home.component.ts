import {Component} from 'angular2/core';
import {MyComponentComponet} from './my-component/my-component.component';

@Component({
  selector   : 'sd-home',
  templateUrl: './home/components/home.component.html',
  styleUrls  : ['./home/components/home.component.css'],
  directives : [MyComponentComponet]
})
export class HomeComponent {}
