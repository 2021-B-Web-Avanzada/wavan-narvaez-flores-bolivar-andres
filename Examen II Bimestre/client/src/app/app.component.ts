import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("game")
  private gameCanvas: ElementRef | any;

  private context: any;
  private socket: any;

  public ngOnInit() {
    this.socket = io("http://localhost:3000");
  }

  public ngAfterViewInit() {
    this.context = this.gameCanvas.nativeElement.getContext("2d");
    this.socket.on("position", (position: { x: any; y: any; }) => {
      this.context.clearRect(
        0,
        0,
        this.gameCanvas.nativeElement.width,
        this.gameCanvas.nativeElement.height
      );
      this.context.fillRect(position.x, position.y, 20,20);
    });
  }

  public move(direction: string) {
    this.socket.emit("move", direction);
  }

}
