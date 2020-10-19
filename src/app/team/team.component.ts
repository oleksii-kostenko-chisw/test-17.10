import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ITeamBlockItem } from "./models/team-block.model";
import { TeamService } from "./team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public team$: Observable<ITeamBlockItem[]>;

  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {
    this.team$ = this._teamService.getTeamInfo();
  }

}
