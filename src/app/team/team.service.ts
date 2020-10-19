import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeamResponseModel } from './models/team-response.model';
import { map, pluck, tap } from 'rxjs/operators';
import {
  ITeamBlockItem,
  // ITeamBlockItemPresentationalModel,
} from './models/team-block.model';
// import {
//   IMemberCardBlock,
//   IMemberCardBlockPresentationalModel,
// } from './models/member-card-block.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private readonly _teamUrl: string =
    'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json';

  constructor(private _http: HttpClient) {}

  public getTeamInfo(): Observable<ITeamBlockItem[]> {
    return this._http.get<ITeamResponseModel>(this._teamUrl).pipe(
      pluck('data'),
      // map<ITeamBlockItem, ITeamBlockItemPresentationalModel>(
      //   (response: ITeamBlockItem) => {
      //     const { id, attributes } = response;
      //     // const result: ITeamBlockItemPresentationalModel = {id};
      //     const mappedAttributes: IMemberCardBlockPresentationalModel[] = Object.values(
      //       attributes
      //     ).map((cardItem: IMemberCardBlock) => {
      //       let imageUrl: string = '';
      //       for(const [key, value] of  Object.entries(cardItem)) {
      //         imageUrl 
      //       }
      //     });
      //   }
      // )
    );
  }
}
