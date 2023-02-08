import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss'],
})
export class TableEditComponent {
  form: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TableEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = []
  ) {}
  ngOnInit(): void {
    console.log(this.data, 'wewq');
    this.FormBuild();
  }

  /* Method to build the form group for get  informations */
  FormBuild(): void {
    this.form = this.fb.group({
      id: '',
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.form.patchValue(this.data);
  }
  /*this method is to send the editted data from the dialog to the table component */
  submit() {
    console.log(this.form.getRawValue());
    this.dialogRef.close({
      data: {
        id: this.form.get('id'),
        first_name: this.form.get('first_name'),
        last_name: this.form.get('last_name'),
        email: this.form.get('email'),
      },
    });
  }
}
