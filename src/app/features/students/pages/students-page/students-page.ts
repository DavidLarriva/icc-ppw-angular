import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsPage {
  readonly students = signal([
    {id: 1, name: "Juan Perez"},
    {id: 2, name: "Maria Perez"},
    {id: 3, name: "David Perez"},
    {id: 4, name: "Esteban Perez"},
    {id: 5, name: "Juanita Perez"},
  ])
}
