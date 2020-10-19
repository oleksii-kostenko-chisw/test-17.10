import { Component, Input, OnInit } from '@angular/core';
import { ITeamBlockItemVM } from '../../models/team-block.model';

@Component({
  selector: 'app-team-block',
  templateUrl: './team-block.component.html',
  styleUrls: ['./team-block.component.scss'],
})
export class TeamBlockComponent implements OnInit {
  @Input() teamBlockItem: ITeamBlockItemVM;

  constructor() {}

  ngOnInit(): void {}
}
