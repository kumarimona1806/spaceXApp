import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { HttpServiceService } from './http-service.service';
import { ISpaceModal } from './modal/ispacemodal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SpaceX Launch Programs';
  public listItem: ISpaceModal[];
  public years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
    '2017', '2018', '2019', '2020'];
  selectedYear: string;
  selectedlaunch: boolean;
  selectedlanding: any;
  public filterObject = { launch_success: '', land_success: '', launch_year: '' };
  constructor(private httpServiceService: HttpServiceService, private spinner: NgxSpinnerService) { }

  /**
   * @description initialize the component
   */
  ngOnInit() {
    this.spinner.show();
    if (localStorage.getItem('filterValue')) {
      this.filterObject = JSON.parse(localStorage.getItem('filterValue'));
    }
    this.httpServiceService.GetResponseData(this.filterObject).subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: (error) => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }

  /**
   * @description call service based on applied filter
   * @param filterValue contains filter passed from template
   */
  public filterData(filterValue?: string): void {
    this.spinner.show();
    localStorage.setItem('filterValue', JSON.stringify(this.filterObject));
    this.httpServiceService.GetResponseData(this.filterObject).subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: (error) => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }

  /**
   * @description to handle the reponse and set in a variable
   * @param response modal to recive reponse
   */
  private handleUpdateResponse(response: ISpaceModal[]) {
    this.spinner.hide();
    this.listItem = response;
  }

  /**
   * @description reset filters
   */
  public clearFilter() {
    localStorage.removeItem('filterValue');
    this.filterObject = { launch_success: '', land_success: '', launch_year: '' };
    this.filterData();
  }
}
