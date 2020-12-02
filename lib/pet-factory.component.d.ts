import { OnInit } from '@angular/core';
import { PetFactoryService } from './pet-factory.service';
import { Pet } from './pet.model';
export declare class PetFactoryComponent implements OnInit {
    private petFactoryService;
    newPet: Pet;
    status: number;
    constructor(petFactoryService: PetFactoryService);
    ngOnInit(): void;
    onSubmit(): void;
}
