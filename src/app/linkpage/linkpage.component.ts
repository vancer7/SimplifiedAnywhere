import { Component, OnInit } from '@angular/core';

import { LinkBlock} from "../linkblock";
import { LinkBlockService } from '../link-block.service'

@Component({
  selector: 'app-linkpage',
  templateUrl: './linkpage.component.html',
  styleUrls: ['./linkpage.component.scss']
})
export class LinkpageComponent implements OnInit {
  linkblocks: LinkBlock[] = [];

  constructor(private linkBlockService: LinkBlockService) { }

  ngOnInit(): void {
    this.getLinkBlocks()
  }
  getLinkBlocks(): void{
    this.linkBlockService.getLinkBlocks()
      .subscribe(linkblocks => this.linkblocks = linkblocks);
  }
}
