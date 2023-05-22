import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription} from 'rxjs';
import { Customer } from './Interface/customer';
import { CustomerService } from './service/customerservice';


@Component({
  selector: 'nx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit , OnDestroy {

  public customers: Customer[] = [];
  unsubscribe!:Subscription;
  // results!: any[];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Nationality!: string[];
    gender!:string[];
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    public loading: boolean = true;

    cols!: any[];
    _selectedColumns!: any[];


    constructor(private customerService: CustomerService) {}


    ngOnInit() {

    this.unsubscribe =  this.customerService.getCustomers().subscribe((res:any)=>{
        this.customers = res.results;
        this.loading = false;
        console.log( this.customers,"////");
      })
      this.cols = [
        { field: "name", header: "Name" },
        { field: "gender", header: "Gender" },
        { field: "location", header: "Location" },
        { field: "email", header: "E-mail" },
        { field: "dob", header: "Current Age" },
        { field: "registered", header: "Registration Seniority" },
        { field: "phone", header: " Phone number" },
        { field: "picture", header: "Picture" },
        { field: "nat", header: "Nationality" }

    ];

    this._selectedColumns = this.cols;

    this.Nationality = ['CA', 'BR','AU','US','NZ','DK',
    'DE','GB','FR','UA','CA','ES','NL','CA','MX',
    'NO','DS','DK','FI','CH','IR','RS','IN','TR','IE'];

     this.gender= [
      'male','female'
     ]

    }

    @Input() get selectedColumns(): any[] {
      return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
      //restore original order
      this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }

    clear(table: Table) {
        table.clear();
    }

    ngOnDestroy(): void {
      this.unsubscribe.unsubscribe();
    }

}
