import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

/*   projectDetails = {'projectID'   : '12345',
                    'projectName' : 'BD',
                    'description' : 'Health Care',
                    'startDate '  : '03/02/2007',
                    'endDate'     : '02/03/2020',
                     'projectStatus' : 'Active'} */

  projectDetails : [{projectID : string, projectName:string,projectDescription:string,
                     projectStartDate : string, projectEndDate : string, projectStatus : string }]
  constructor(private dataService : DataService ) {}
  
  ngOnInit() {

    this.dataService.getProjects()
    .subscribe(response => {
       Object(response).keys.forEach(key => {
          this.projectDetails.push(response[key])
       })
    })

  }

  onDelete(projectID : string) {
    this.dataService.deleteProject(projectID)
    .subscribe(resposne => {})
  }

}
