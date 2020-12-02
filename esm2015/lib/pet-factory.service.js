import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
PetFactoryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PetFactoryService_Factory() { return new PetFactoryService(); }, token: PetFactoryService, providedIn: "root" });
PetFactoryService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PetFactoryService);
export { PetFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BldC1mYWN0b3J5LyIsInNvdXJjZXMiOlsibGliL3BldC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLHFEQUFxRDtBQUNyRCxxQ0FBcUM7QUFLckMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFHNUI7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLGlDQUFpQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsK0VBQStFO0lBQy9FLHdDQUF3QztJQUN4QywyRUFBMkU7SUFDM0UsSUFBSTtJQUVKLFNBQVMsQ0FBQyxHQUFHO1FBQ1gsSUFBSSxNQUFjLENBQUM7UUFDbkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUU7WUFDdEIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjthQUNuQztZQUNELElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQzthQUNDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDWjtZQUNELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDTCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTs7QUFwQ1ksaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxpQkFBaUIsQ0FvQzdCO1NBcENZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBldEZhY3RvcnlTZXJ2aWNlIHtcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9wZXRzdG9yZS5zd2FnZ2VyLmlvL3YyLyc7XG4gIH1cblxuICAvLyBjcmVhdGVQZXQocGV0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAvLyAgIGNvbnN0IHBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHBldCk7XG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsICsgJ3BldCcsIHBhcmFtcywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAvLyB9XG5cbiAgY3JlYXRlUGV0KHBldCk6IG51bWJlciB7XG4gICAgbGV0IHN0YXR1czogbnVtYmVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHBldCk7XG4gICAgZmV0Y2godGhpcy51cmwgKyAncGV0Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlID0nLCByZXNwb25zZSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHN0YXR1cyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHN0YXR1cyA9IDI7XG4gICAgICB9KTtcbiAgICByZXR1cm4gc3RhdHVzO1xuICB9XG59XG4iXX0=