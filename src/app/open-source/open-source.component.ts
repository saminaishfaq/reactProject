import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.css']
})
export class OpenSourceComponent implements OnInit {

  constructor(private router:Router) { }
  openSource()
  {
    this.router.navigate(['/opensource']);
  }

  ngOnInit(): void {
  }

}
