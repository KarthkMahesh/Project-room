import { Component, OnInit, EventEmitter, Input, Output,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IgenMenuDto } from 'src/app/_dto/igenMenu.dto';
import { MenuFormatDto } from 'src/app/_dto/menu-format.dto';
import { apiUrl } from 'src/app/_providers/_resources/api-url.properties';
import { AuthService } from 'src/app/_providers/_services/auth.service';
import { MenuService } from 'src/app/_providers/_services/menu.service';
import { UiService } from 'src/app/_providers/_services/ui.service';
import { EmailService } from 'src/app/pages/auth/services';
import { Observable, of } from 'rxjs';
import { Email, User } from 'src/app/pages/auth/models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { routes } from 'src/app/consts';
import { MasterService } from 'src/app/_providers/_services/master.service';
import { TenderDetailDto } from 'src/app/_dto/tender-detail.dto';
import { ErrorTranslateService } from 'src/app/_providers/_services/error-translate.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CommonDto } from 'src/app/_dto/common.dto';
import { error } from 'console';
import Swal from 'sweetalert2';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TenderCategoryDto } from 'src/app/_dto/category.dto';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  constructor(
    private _menuService: MenuService,
    private router: Router,
    private _ui: UiService,
    private emailService: EmailService,
    private authenticationService: AuthService,
    private _masterService: MasterService,
    private errorService:ErrorTranslateService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fb: UntypedFormBuilder
  ) { 
    
  }



  async ngOnInit() {
   
    
  }


}
