import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'demo-app',
    template: `
  <h1>Champions</h1>
  <h2>Championi muutmine</h2>
  <ul>
    <li *ngFor="let champion of champions">
    ID: {{champion.champions_id}}<br>
    Nimi:<input type="text" name="champion-name" [(ngModel)]="champion.name">
    <br>
        role:<input type="text"  [(ngModel)]="champion.role">
    <br>
        WinPercent:<input type="text" [(ngModel)]="champion.winPercent">
    <br>

    <button (click)="updateChampion(champion)">Save</button>
    <button (click)="deleteChampion(champion)">Delete</button>
    </li>
  </ul>
  <h2>Lisamine</h2>
    <input type="text" name="champion_name" [(ngModel)]="champion_name">
    <input type="text" name="champion_role" [(ngModel)]="champion_role">
    <input type="text" name="champion_winPercent" [(ngModel)]="champion_winPercent">
    <button (click)="createChampion(champion_name,champion_role,champion_winPercent)">Save</button>


  `
})
export class AppComponent {

    public champions;

    constructor(private _demoService:DemoService) {
    }

    ngOnInit() {
        this.getChampions();
    }

    getChampions() {
        this._demoService.getChampions().subscribe(
            // the first argument is a function which runs on success
            data => {
                this.champions = data
            },
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => console.log('done loading foods')
        );
    }


    createChampion(name, role, winPercent) {
        let champion = {name: name, role: role, winPercent: winPercent};
        this._demoService.createChampion(champion).subscribe(
            data => {
                // refresh the list
                this.getChampions();
                return true;
            },
            error => {
                console.error("Error saving food!");
                return Observable.throw(error);
            }
        );
    }

    updateChampion(champion) {
        this._demoService.updateChampion(champion).subscribe(
            data => {
                // refresh the list
                this.getChampions();
                return true;
            },
            error => {
                console.error("Error saving food!");
                return Observable.throw(error);
            }
        );
    }

    deleteChampion(champion) {
        if (confirm("Are you sure you want to delete " + champion.name + "?")) {
            this._demoService.deleteChampion(champion).subscribe(
                data => {
                    // refresh the list
                    this.getChampions();
                    return true;
                },
                error => {
                    console.error("Error deleting food!");
                    return Observable.throw(error);
                }
            );
        }
    }
}
