import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() first_name: string;
  @Input() last_name: string;
  @Input() height: number;
  birth_date = new Date(2016, 12, 15);

  constructor() {
  }

  ngOnInit() {
  }

  get height_feet() {
    return this.height * 1.2;
  }

  height_up() {
    this.height = Number(this.height) + 1;
  }

  height_down() {
    this.height = Number(this.height) - 1;
  }
}
