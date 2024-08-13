import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit, OnDestroy {
  public progress: number = 100;
  public time: number = 300;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.startProgress();
  }

  ngOnDestroy(): void {
    this.progress = 100;
    this.time = 300
  }

  public close(): void {
    this.matDialog.closeAll();
  }

  public startProgress(): void {
    setInterval(() => {
      if (this.progress <= 0) {
        this.progress = 100;
        this.close();
      } else {
        this.progress--;
      }
    }, this.time);
  }
}
