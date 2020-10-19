import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeamResponseModel } from './models/team-response.model';
import { map, pluck } from 'rxjs/operators';
import { ITeamBlockItem, ITeamBlockItemVM } from './models/team-block.model';
import { IMemberCardBlock, IMemberCardBlockVM } from "./models/member-card-block.model";

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private readonly _teamUrl: string =
    'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json';

  constructor(private _http: HttpClient) {}

  public getTeamInfo(): Observable<ITeamBlockItem[]> {
    return this._http
      .get<ITeamResponseModel>(this._teamUrl)
      .pipe(pluck('data'));
  }

  public getTeamVM(): Observable<ITeamBlockItemVM[]> {
    return this.getTeamInfo().pipe(
      map<ITeamBlockItem[], ITeamBlockItemVM[]>(
        (teamBlocks: ITeamBlockItem[]) => {
          return teamBlocks.map<ITeamBlockItemVM>(
            (teamBlock: ITeamBlockItem) => {
              const { attributes } = teamBlock;
              const memberCardsVM = Object.values<IMemberCardBlock>(
                attributes.memberCards
              ).map<IMemberCardBlockVM>((memberCard: IMemberCardBlock) => {
                let result = '';
                const memberCardsEntries = Object.entries(memberCard.imageUrl);
                memberCardsEntries.forEach(([name, value]) => {
                  result += `${value} ${name.match(/\d+/)[0]}w, `;
                });
                return {
                  block: memberCard.block,
                  imageSrcSet: result,
                  imageUrl: String(memberCardsEntries[0][1]),
                };
              });
              return {
                id: teamBlock.id,
                attributes: {
                  title: attributes.title,
                  memberCards: memberCardsVM,
                },
              };
            }
          );
        }
      )
    );
  }
}
