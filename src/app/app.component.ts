import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'] 
})
export class AppComponent{ 
     public phone: Phone = new Phone ("",null,"");
     
     public phones: Phone[] = [];
     public manufacturers = ["","Apple","Samsung"];

     addPhone() {
          this.phones.push(new Phone(this.phone.title,this.phone.price,this.phone.manufacturer));
     }
}

export class Phone {
     constructor(public title: string,
                 public price: number,
                 public manufacturer: string)
               { }
}