System.register(['@angular/core', './demo.service', 'rxjs/Rx'], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
    var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };
    var core_1, demo_service_1, Rx_1;
    var AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(_demoService) {
                    this._demoService = _demoService;
                }

                AppComponent.prototype.ngOnInit = function () {
                    this.getChampions();
                };
                AppComponent.prototype.getChampions = function () {
                    var _this = this;
                    this._demoService.getChampions().subscribe(
                        // the first argument is a function which runs on success
                        function (data) {
                            _this.champions = data;
                        },
                        // the second argument is a function which runs on error
                        function (err) {
                            return console.error(err);
                        },
                        // the third argument is a function which runs on completion
                        function () {
                            return console.log('done loading foods');
                        });
                };
                AppComponent.prototype.createChampion = function (name, role, winPercent) {
                    var _this = this;
                    var champion = {name: name, role: role, winPercent: winPercent};
                    this._demoService.createChampion(champion).subscribe(function (data) {
                        // refresh the list
                        _this.getChampions();
                        return true;
                    }, function (error) {
                        console.error("Error saving food!");
                        return Rx_1.Observable.throw(error);
                    });
                };
                AppComponent.prototype.updateChampion = function (champion) {
                    var _this = this;
                    this._demoService.updateChampion(champion).subscribe(function (data) {
                        // refresh the list
                        _this.getChampions();
                        return true;
                    }, function (error) {
                        console.error("Error saving food!");
                        return Rx_1.Observable.throw(error);
                    });
                };
                AppComponent.prototype.deleteChampion = function (champion) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + champion.name + "?")) {
                        this._demoService.deleteChampion(champion).subscribe(function (data) {
                            // refresh the list
                            _this.getChampions();
                            return true;
                        }, function (error) {
                            console.error("Error deleting food!");
                            return Rx_1.Observable.throw(error);
                        });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'demo-app',
                        template: "\n  <h1>Champions</h1>\n  <h2>Championi muutmine</h2>\n  <ul>\n    <li *ngFor=\"let champion of champions\">\n    ID: {{champion.champions_id}}<br>\n    Nimi:<input type=\"text\" name=\"champion-name\" [(ngModel)]=\"champion.name\">\n    <br>\n        role:<input type=\"text\"  [(ngModel)]=\"champion.role\">\n    <br>\n        WinPercent:<input type=\"text\" [(ngModel)]=\"champion.winPercent\">\n    <br>\n\n    <button (click)=\"updateChampion(champion)\">Save</button>\n    <button (click)=\"deleteChampion(champion)\">Delete</button>\n    </li>\n  </ul>\n  <h2>Lisamine</h2>\n    <input type=\"text\" name=\"champion_name\" [(ngModel)]=\"champion_name\">\n    <input type=\"text\" name=\"champion_role\" [(ngModel)]=\"champion_role\">\n    <input type=\"text\" name=\"champion_winPercent\" [(ngModel)]=\"champion_winPercent\">\n    <button (click)=\"createChampion(champion_name,champion_role,champion_winPercent)\">Save</button>\n\n\n  "
                    }),
                    __metadata('design:paramtypes', [demo_service_1.DemoService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map