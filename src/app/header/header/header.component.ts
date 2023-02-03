import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle() {
    var x = document.getElementById("myLinks");

    if (x && x.style.display === "block") {
      x.style.display = "none";
    } else {
      //@ts-ignore
      x.style.display = "block";
    }
    console.log("data")
  }

  closeNav() {
    setTimeout(() => {
      var x = document.getElementById("myLinks");
      //@ts-ignore
      x.style.display = "none";
    }, 50);
  }
}
