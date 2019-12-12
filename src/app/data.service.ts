import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn : 'root'
})

export class DataService {

    baseURI : string = "http://localhost:42325/api/"
    constructor(private http : HttpClient) {}

    getProjects(): Observable<any> {

        return this.http.get<any>(this.baseURI+'projects')
    }

    deleteProject(projectID : string) : Observable<any> {
        let httpParams = new HttpParams()
        .set('ProjectID',projectID)
        return this.http.delete<any>(this.baseURI+'delete',{params : httpParams})
    }

}