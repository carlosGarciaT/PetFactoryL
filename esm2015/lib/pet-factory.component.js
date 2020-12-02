import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PetFactoryService } from './pet-factory.service';
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
export { PetFactoryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWZhY3RvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV0LWZhY3RvcnkvIiwic291cmNlcyI6WyJsaWIvcGV0LWZhY3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQW9CMUQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBRTVELFFBQVEsS0FBVSxDQUFDO0lBRW5CLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7Q0FDRixDQUFBOztZQVp3QyxpQkFBaUI7O0FBSC9DO0lBQVIsS0FBSyxFQUFFO21EQUFhO0FBRFYsbUJBQW1CO0lBakIvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7S0FFRixDQUFDO0dBQ1csbUJBQW1CLENBZ0IvQjtTQWhCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBldEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi9wZXQtZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IFBldCB9IGZyb20gJy4vcGV0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBldGZhY3RvcnknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmb3JtPlxuICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOiA8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm5ld1BldC5uYW1lXCIgLz48YnIgLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5TdGF0dXM6IDwvbGFiZWw+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJzdGF0dXNcIiBbKG5nTW9kZWwpXT1cIm5ld1BldC5zdGF0dXNcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF2YWlsYWJsZVwiIHNlbGVjdGVkPkF2YWlsYWJsZTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGluZ1wiPlBlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNvbGRcIj5Tb2xkPC9vcHRpb24+PC9zZWxlY3RcbiAgICAgID48YnIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHdWFyZGFyXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIiAvPlxuICAgIDwvZm9ybT5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUGV0RmFjdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5ld1BldDogUGV0O1xuICBzdGF0dXM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBldEZhY3RvcnlTZXJ2aWNlOiBQZXRGYWN0b3J5U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLnBldEZhY3RvcnlTZXJ2aWNlLmNyZWF0ZVBldCh0aGlzLm5ld1BldCk7XG4gICAgaWYgKCh0aGlzLnN0YXR1cyA9IDEpKSB7XG4gICAgICBhbGVydCgnU2UgaGEgaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgbGEgbWFzY290YScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnTm8gc2UgaGEgaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgbGEgbWFzY290YScpO1xuICAgIH1cbiAgfVxufVxuIl19