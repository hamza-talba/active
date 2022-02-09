import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Contact } from 'src/app/dashboard/models/contacts.model';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactsTableComponent implements OnInit {
  @Input()data:Contact[]
  @ContentChild(TemplateRef, { static: true }) injectedCells: TemplateRef<
    Element
  >;
  constructor() { }

  ngOnInit(): void {
  }

}
