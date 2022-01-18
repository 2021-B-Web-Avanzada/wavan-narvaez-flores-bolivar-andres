  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  conversations = [
    {name: "Alejo Fernandez", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false, },
    {name: "Sr. Bryan", time:"8:21", latestMessage: "Good Morning!" ,  latestMessageRead: true},
    {name: "Ismael Rivas", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Ricardo Falcón", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
    {name: "Carlos Iñiguez", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Cristhian Fernandez", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Erick Espadas", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
    {name: "Raúl Narváez", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Grace Suquillo", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Luís Narváez", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
    {name: "Carlos Murgueytio", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Juan Topo", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Thiago Neymar", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
    {name: "Mbappe Guaman", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
