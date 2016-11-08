System.register(['@angular/core', "@angular/http"], function (exports_1, context_1) {
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
    var core_1, http_1;
    var DemoService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function () {
            DemoService = (function () {
                function DemoService(http) {
                    this.http = http;
                }

                // Uses http.get() to load a single JSON file
                DemoService.prototype.getChampions = function () {
                    //return this.http.get('http://localhost/ChampsWebApi/champions/findAll/').map((res:Response) => res.json());
                    var result = this.http.get('http://localhost/ChampsWebApi/champions/findAll/').map(function (res) {
                        return res.json();
                    });
                    console.log(result);
                    return result;
                };
                // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
                // The entire operation will result in an error state if any single request fails.
                /*getBooksAndMovies() {
                 return Observable.forkJoin(
                 this.http.get('http://localhost/ChampsWebApi/champions/findById/?champions_id=1').map((res:Response) => res.json()),
                 this.http.get('http://localhost/ChampsWebApi/champions/findById/?champions_id=1').map((res:Response) => res.json())
                 );
                 }*/
                DemoService.prototype.createChampion = function (champion) {
                    var headers = new http_1.Headers({'Content-Type': 'application/json'});
                    var options = new http_1.RequestOptions({headers: headers});
                    var body = JSON.stringify(champion);
                    // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
                    return this.http.post(' http://localhost/ChampsWebApi/champions/addChampion/add.php', body, headers).map(function (res) {
                        return res.json();
                    });
                };
                DemoService.prototype.updateChampion = function (champion) {
                    // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
                    return this.http.put('http://localhost/ChampsWebApi/champions/updateChampion/update.php?id=' + champion.champions_id + '&name=' + champion.name + '&role=' + champion.role + '&winPercent=' + champion.winPercent);
                };
                DemoService.prototype.deleteChampion = function (champion) {
                    // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
                    return this.http.delete('http://localhost/ChampsWebApi/champions/deleteChampion/?id=' + champion.champions_id);
                };
                DemoService = __decorate([
                    core_1.Injectable(),
                    __metadata('design:paramtypes', [http_1.Http])
                ], DemoService);
                return DemoService;
            }());
            exports_1("DemoService", DemoService);
        }
    }
});
//# sourceMappingURL=demo.service.js.map