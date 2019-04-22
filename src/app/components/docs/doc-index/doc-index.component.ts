import { Component, OnInit } from '@angular/core';
import { DocsService } from '../../../services/docs.service';
import { Doc } from '../../../models/doc';

@Component({
  selector: 'app-doc-index',
  templateUrl: './doc-index.component.html',
  styleUrls: ['./doc-index.component.css']
})
export class DocIndexComponent implements OnInit {

  constructor(private _docsService: DocsService) { }

  ngOnInit() {
    this._docsService.getDocs().subscribe((docs: Doc[]) => {
    });
  }

}
