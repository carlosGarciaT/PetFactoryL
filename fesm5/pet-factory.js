import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
var PetFactoryService = /** @class */ (function () {
    function PetFactoryService() {
        this.url = 'https://petstore.swagger.io/v2/';
    }
    // createPet(pet): Observable<any> {
    //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
    //   const params = JSON.stringify(pet);
    //   return this.http.post(this.url + 'pet', params, { headers: headers });
    // }
    PetFactoryService.prototype.createPet = function (pet) {
        var status;
        var params = JSON.stringify(pet);
        fetch(this.url + 'pet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: params,
        })
            .then(function (response) {
            console.log('response =', response);
            if (response.status === 200) {
                status = 1;
            }
            return response.json();
        })
            .catch(function (err) {
            console.error(err);
            status = 2;
        });
        return status;
    };
    PetFactoryService.ɵprov = ɵɵdefineInjectable({ factory: function PetFactoryService_Factory() { return new PetFactoryService(); }, token: PetFactoryService, providedIn: "root" });
    PetFactoryService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PetFactoryService);
    return PetFactoryService;
}());

var PetFactoryComponent = /** @class */ (function () {
    function PetFactoryComponent(petFactoryService) {
        this.petFactoryService = petFactoryService;
    }
    PetFactoryComponent.prototype.ngOnInit = function () { };
    PetFactoryComponent.prototype.onSubmit = function () {
        this.status = this.petFactoryService.createPet(this.newPet);
        if ((this.status = 1)) {
            alert('Se ha insertado correctamente la mascota');
        }
        else {
            alert('No se ha insertado correctamente la mascota');
        }
    };
    PetFactoryComponent.ctorParameters = function () { return [
        { type: PetFactoryService }
    ]; };
    __decorate([
        Input()
    ], PetFactoryComponent.prototype, "newPet", void 0);
    PetFactoryComponent = __decorate([
        Component({
            selector: 'lib-petfactory',
            template: "\n    <form>\n      <label for=\"name\">Name: </label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"newPet.name\" /><br />\n      <label for=\"status\">Status: </label>\n      <select name=\"status\" [(ngModel)]=\"newPet.status\">\n        <option value=\"available\" selected>Available</option>\n        <option value=\"pending\">Pending</option>\n        <option value=\"sold\">Sold</option></select\n      ><br />\n      <input type=\"submit\" value=\"Guardar\" (click)=\"onSubmit()\" />\n    </form>\n  "
        })
    ], PetFactoryComponent);
    return PetFactoryComponent;
}());

var PetFactoryModule = /** @class */ (function () {
    function PetFactoryModule() {
    }
    PetFactoryModule = __decorate([
        NgModule({
            declarations: [PetFactoryComponent],
            imports: [FormsModule],
            exports: [PetFactoryComponent, FormsModule],
        })
    ], PetFactoryModule);
    return PetFactoryModule;
}());

/*
 * Public API Surface of pet-factory
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PetFactoryComponent, PetFactoryModule, PetFactoryService as ɵa };
//# sourceMappingURL=pet-factory.js.map
