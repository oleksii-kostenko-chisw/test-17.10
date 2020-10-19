import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeamBlockItemVM } from './models/team-block.model';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  public team$: Observable<ITeamBlockItemVM[]>;

  constructor(private _teamService: TeamService) {}

  ngOnInit(): void {
    this.team$ = this._teamService.getTeamVM();
  }
}
