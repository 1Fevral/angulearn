import { Component} from '@angular/core';
 
class Item {
     name: string;
     price: number;

     constructor(name: string, price: number) {
          this.name = name;
          this.price = price;
     }
}

@Component({
    selector: 'my-app',
    template: `<child-comp [name]="name"></child-comp>
                <input type="text" [(ngModel)]="name" />`
})
export class AppComponent{ 
     items: Item[] = 
     [
          {name: "Bread", price: 12}
     ];
     
     name: string= this.items[0].name;
}