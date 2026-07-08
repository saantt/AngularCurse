import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app-angular';
  user: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  
  visible: boolean = false;

  setVisible() {
    this.visible = this.visible ? false : true;
  }
}
