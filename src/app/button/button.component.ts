import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  preserveWhitespaces:true,
})
export class ButtonComponent implements OnInit {


  constructor() { }



  

  ngOnInit(): void {
  }
  btnclick()
  {
    alert("92..xxxx");
  }
  onclick()
  {
    confirm("angular developer");
  }
   sclick()
   {
     alert("page not found");
   }
}
