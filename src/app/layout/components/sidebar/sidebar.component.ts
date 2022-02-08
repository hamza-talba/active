import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {


  ngOnInit(): void {

  }
}
