import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
    selector: 'app-root',
    //   template: '<router-outlet></router-outlet>',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    status: boolean = false;

    constructor(private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.loadingService.status$.subscribe(status => {
            this.status = status;
        });
    }
}
