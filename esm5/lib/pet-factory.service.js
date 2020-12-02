import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    PetFactoryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PetFactoryService_Factory() { return new PetFactoryService(); }, token: PetFactoryService, providedIn: "root" });
    PetFactoryService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PetFactoryService);
    return PetFactoryService;
}());
export { PetFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BldC1mYWN0b3J5LyIsInNvdXJjZXMiOlsibGliL3BldC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLHFEQUFxRDtBQUNyRCxxQ0FBcUM7QUFLckM7SUFHRTtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsaUNBQWlDLENBQUM7SUFDL0MsQ0FBQztJQUVELG9DQUFvQztJQUNwQywrRUFBK0U7SUFDL0Usd0NBQXdDO0lBQ3hDLDJFQUEyRTtJQUMzRSxJQUFJO0lBRUoscUNBQVMsR0FBVCxVQUFVLEdBQUc7UUFDWCxJQUFJLE1BQWMsQ0FBQztRQUNuQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRTtZQUN0QixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDO2FBQ0MsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDWjtZQUNELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0lBbkNVLGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBb0M3Qjs0QkE1Q0Q7Q0E0Q0MsQUFwQ0QsSUFvQ0M7U0FwQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGV0RmFjdG9yeVNlcnZpY2Uge1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVybCA9ICdodHRwczovL3BldHN0b3JlLnN3YWdnZXIuaW8vdjIvJztcbiAgfVxuXG4gIC8vIGNyZWF0ZVBldChwZXQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIC8vICAgY29uc3QgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkocGV0KTtcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy51cmwgKyAncGV0JywgcGFyYW1zLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gIC8vIH1cblxuICBjcmVhdGVQZXQocGV0KTogbnVtYmVyIHtcbiAgICBsZXQgc3RhdHVzOiBudW1iZXI7XG4gICAgY29uc3QgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkocGV0KTtcbiAgICBmZXRjaCh0aGlzLnVybCArICdwZXQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBwYXJhbXMsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgPScsIHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgc3RhdHVzID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgc3RhdHVzID0gMjtcbiAgICAgIH0pO1xuICAgIHJldHVybiBzdGF0dXM7XG4gIH1cbn1cbiJdfQ==