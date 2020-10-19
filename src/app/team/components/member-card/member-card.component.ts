import { Component, Input, OnInit } from '@angular/core';
import { IMemberCardBlock } from '../../models/member-card-block.model';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent implements OnInit {
  @Input() memberCard: IMemberCardBlock;

  constructor() {}

  ngOnInit(): void {}

  get imagesSources(): string {
    let result = '';
    Object.entries(this.memberCard.imageUrl).forEach(([name, value]) => {
      result += `${value} ${name.match(/\d+/)[0]}w, `;
    });
    return result;
  }
}
