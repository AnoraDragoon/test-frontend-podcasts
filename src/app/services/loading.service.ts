import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private status = new BehaviorSubject<boolean>(false);
    status$ = this.status.asObservable();

    constructor() { }

    activate(): void {
        this.status.next(true);
    }

    desactivate(): void {
        this.status.next(false);
    }
}
