import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
let PetFactoryService = class PetFactoryService {
    constructor() {
        this.url = 'https://petstore.swagger.io/v2/';
    }
    // createPet(pet): Observable<any> {
    //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
    //   const params = JSON.stringify(pet);
    //   return this.http.post(this.url + 'pet', params, { headers: headers });
    // }
    createPet(pet) {
        let status;
        const params = JSON.stringify(pet);
        fetch(this.url + 'pet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: params,
        })
            .then((response) => {
            console.log('response =', response);
            if (response.status === 200) {
                status = 1;
            }
            return response.json();
        })
            .catch((err) => {
            console.error(err);
            status = 2;
        });
        return status;
    }
};
PetFactoryService.ɵprov = ɵɵdefineInjectable({ factory: function PetFactoryService_Factory() { return new PetFactoryService(); }, token: PetFactoryService, providedIn: "root" });
PetFactoryService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PetFactoryService);

let PetFactoryComponent = class PetFactoryComponent {
    constructor(petFactoryService) {
        this.petFactoryService = petFactoryService;
    }
    ngOnInit() { }
    onSubmit() {
        this.status = this.petFactoryService.createPet(this.newPet);
        if ((this.status = 1)) {
            alert('Se ha insertado correctamente la mascota');
        }
        else {
            alert('No se ha insertado correctamente la mascota');
        }
    }
};
PetFactoryComponent.ctorParameters = () => [
    { type: PetFactoryService }
];
__decorate([
    Input()
], PetFactoryComponent.prototype, "newPet", void 0);
PetFactoryComponent = __decorate([
    Component({
        selector: 'lib-petfactory',
        template: `
    <form>
      <label for="name">Name: </label>
      <input type="text" name="name" [(ngModel)]="newPet.name" /><br />
      <label for="status">Status: </label>
      <select name="status" [(ngModel)]="newPet.status">
        <option value="available" selected>Available</option>
        <option value="pending">Pending</option>
        <option value="sold">Sold</option></select
      ><br />
      <input type="submit" value="Guardar" (click)="onSubmit()" />
    </form>
  `
    })
], PetFactoryComponent);

let PetFactoryModule = class PetFactoryModule {
};
PetFactoryModule = __decorate([
    NgModule({
        declarations: [PetFactoryComponent],
        imports: [FormsModule],
        exports: [PetFactoryComponent, FormsModule],
    })
], PetFactoryModule);

/*
 * Public API Surface of pet-factory
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PetFactoryComponent, PetFactoryModule, PetFactoryService as ɵa };
//# sourceMappingURL=pet-factory.js.map
