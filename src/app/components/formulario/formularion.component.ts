import {Component} from '@angular/core';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
    users: any = [];
    nameInput: string = '';
    phoneInput: string = ''; 

    createContact() {
        this.users.push({
            name: this.nameInput,
            phone: this.phoneInput
        })
        this.nameInput = '';
        this.phoneInput = '';
    }

    deleteContact(id: number) {
        const positionId = id;
        this.users.splice(positionId, 1);
    }

}