import { Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
 
  constructor() { }

  protected showList(){
    var myList = document.getElementById("hide-at-first");

    myList.style.display = "block";
    

  }

}
