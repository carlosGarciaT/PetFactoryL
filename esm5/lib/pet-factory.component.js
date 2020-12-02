import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PetFactoryService } from './pet-factory.service';
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
export { PetFactoryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWZhY3RvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV0LWZhY3RvcnkvIiwic291cmNlcyI6WyJsaWIvcGV0LWZhY3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQW9CMUQ7SUFJRSw2QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBRTVELHNDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQixzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNyQixLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOztnQkFYc0MsaUJBQWlCOztJQUgvQztRQUFSLEtBQUssRUFBRTt1REFBYTtJQURWLG1CQUFtQjtRQWpCL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsd2dCQVlUO1NBRUYsQ0FBQztPQUNXLG1CQUFtQixDQWdCL0I7SUFBRCwwQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGV0RmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3BldC1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGV0IH0gZnJvbSAnLi9wZXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGV0ZmFjdG9yeScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvcm0+XG4gICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIFsobmdNb2RlbCldPVwibmV3UGV0Lm5hbWVcIiAvPjxiciAvPlxuICAgICAgPGxhYmVsIGZvcj1cInN0YXR1c1wiPlN0YXR1czogPC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgbmFtZT1cInN0YXR1c1wiIFsobmdNb2RlbCldPVwibmV3UGV0LnN0YXR1c1wiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXZhaWxhYmxlXCIgc2VsZWN0ZWQ+QXZhaWxhYmxlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic29sZFwiPlNvbGQ8L29wdGlvbj48L3NlbGVjdFxuICAgICAgPjxiciAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkd1YXJkYXJcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiIC8+XG4gICAgPC9mb3JtPlxuICBgLFxuICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBQZXRGYWN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmV3UGV0OiBQZXQ7XG4gIHN0YXR1czogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGV0RmFjdG9yeVNlcnZpY2U6IFBldEZhY3RvcnlTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMucGV0RmFjdG9yeVNlcnZpY2UuY3JlYXRlUGV0KHRoaXMubmV3UGV0KTtcbiAgICBpZiAoKHRoaXMuc3RhdHVzID0gMSkpIHtcbiAgICAgIGFsZXJ0KCdTZSBoYSBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSBsYSBtYXNjb3RhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdObyBzZSBoYSBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSBsYSBtYXNjb3RhJyk7XG4gICAgfVxuICB9XG59XG4iXX0=