import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Doc } from '../../models/doc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public docs: Doc[];

  constructor(private _service: HomeService) {

  }

  ngOnInit() {
    this._service.get_docs().subscribe( (data: Doc[]) => {
      this.docs = data;
    });
  }
}
