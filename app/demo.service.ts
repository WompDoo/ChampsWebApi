import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getChampions() {
        //return this.http.get('http://localhost/ChampsWebApi/champions/findAll/').map((res:Response) => res.json());
        var result = this.http.get('http://localhost/ChampsWebApi/champions/findAll/').map((res:Response) => res.json());
        console.log(result);
        return result;
    }

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    /*getBooksAndMovies() {
     return Observable.forkJoin(
     this.http.get('http://localhost/ChampsWebApi/champions/findById/?champions_id=1').map((res:Response) => res.json()),
     this.http.get('http://localhost/ChampsWebApi/champions/findById/?champions_id=1').map((res:Response) => res.json())
     );
     }*/


    createChampion(champion) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(champion);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.post(' http://localhost/ChampsWebApi/champions/addChampion/add.php', body, headers).map((res:Response) => res.json());

    }


    updateChampion(champion) {
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.put('http://localhost/ChampsWebApi/champions/updateChampion/update.php?id=' + champion.champions_id + '&name=' + champion.name + '&role=' + champion.role + '&winPercent=' + champion.winPercent);
    }

    deleteChampion(champion) {
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.delete('http://localhost/ChampsWebApi/champions/deleteChampion/?id=' + champion.champions_id);
    }

}
