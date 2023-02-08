import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServicesService } from '.././api-services.service';
import { TableEditComponent } from '.././Dialog/table-edit/table-edit.component';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  displayedColumns = ['Id', 'first name', 'last name', 'email', 'Actions'];
  data: any;
  value: any;
  user_data: any;
  received_data: any = [];
  constructor(
    private router: Router,
    private api: ApiServicesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.get_table_data();
  }
  /* this method is to get user datas using api*/
  get_table_data() {
    console.log('s1 ');
    this.api.get_table_data().subscribe((res) => {
      console.log(res);
      this.data = [
        {
          id: 1,
          email: 'hrithik@gmail.com',
          first_name: 'nithin',
          last_name: 'raj',
        },
        {
          id: 2,
          email: 'niki@gmail.com',
          first_name: 'nikitha',
          last_name: 'isaac',
        },
      ];
    });
  }
  /*this method is to open the edit dialog box and its passing the data to the dilog */
  showPrompt(user_data: any): void {
    console.log(user_data);
    const dialogRef = this.dialog.open(TableEditComponent, {
      width: '350px',
      height: '400px',
      data: {
        id: user_data.id,
        first_name: user_data.first_name,
        last_name: user_data.last_name,
        email: user_data.email,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.received_data = res.data; // received data from confirm-component
      console.log(this.received_data);
      var id = this.received_data.id;
      var edit_data = {
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        email: this.received_data.email.value,
        first_name: this.received_data.first_name.value,
        id: this.received_data.id.value,
        last_name: this.received_data.last_name.value,
      };
      console.log(edit_data);
      this.api.edit_data(edit_data).subscribe((res) => {
        console.log(res);
      });
    });
  }
  /*this method is to open the create dialog box  */
  create_dialog(): void {
    const dialogRef = this.dialog.open(TableEditComponent, {
      width: '350px',
      height: '400px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.received_data = res.data; // received data from confirm-component
      console.log(this.received_data);
      var lenth = this.data.length;
      var newlength = lenth + 1;

      var edit_data = {
        email: this.received_data.email.value,
        first_name: this.received_data.first_name.value,
        id: newlength,
        last_name: this.received_data.last_name.value,
      };
      this.data.push(edit_data);
      console.log(this.data);
    });
  }
  /*this method is to delete the user*/
  Delete_Dialog(data: any) {
    console.log(data);
    var id = data.id;
    this.api.delete_user(id).subscribe((res) => {
      console.log(res);
    });
  }

  /*this method is to log out from the application */
  Logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
