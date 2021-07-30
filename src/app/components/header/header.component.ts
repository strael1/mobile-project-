import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    
    @Output('showTabContent') showTabContent = new EventEmitter<string>();

    btnDropdown: boolean = false;
    
    dropDown() {
     this.btnDropdown = !this.btnDropdown;  
    }
 
    tabMenu(valorTab: string) {
        this.showTabContent.emit(valorTab)
    }
   
}