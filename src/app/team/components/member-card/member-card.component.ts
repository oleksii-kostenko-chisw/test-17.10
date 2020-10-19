import { Component, Input, OnInit } from '@angular/core';
import { IMemberCardBlockVM } from '../../models/member-card-block.model';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent implements OnInit {
  @Input() memberCard: IMemberCardBlockVM;

  constructor() {}

  ngOnInit(): void {}

  get mailTo(): string {
    return `mailto:${this.memberCard.block.link}`;
  }

  get phone(): string {
    return `tel:${this.memberCard.block.text}`;
  }
}
