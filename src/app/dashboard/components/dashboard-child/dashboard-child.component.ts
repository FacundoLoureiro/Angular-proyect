import { ChangeDetectionStrategy, Component, Input, Output, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.css'
})
export class DashboardChildComponent implements OnInit {
  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("se cambio el dashboard-child", changes);
  }
  ngOnInit(): void {
    console.log("se inicializo el dashboard-child");
  }

  handleClick() {
    this.text = 'dashboard text changed by the child';
    this.textChange.emit(this.text);
  }

}
