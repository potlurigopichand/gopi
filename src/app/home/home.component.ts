import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


a:string='home component';
b='data';
c=123;
status=true;

games=['pubg','subway','temple'];

game='gopi chand';
todaydate=new Date();
money=534556;
performance=10;

document:any;

user : User[]=[];
constructor(private testserv:TestService){
  this.document=document;
}
name:undefined;

  ngOnInit(): void {
    // prompt('hello this is from Homecomponent NgOnIt');
    alert(this.testserv.gettodaysdate());

  }
  getalluserinfo(){
    this.testserv.getalluser().subscribe(user=>{
      this.user=user;
    });
  }
  
  }


