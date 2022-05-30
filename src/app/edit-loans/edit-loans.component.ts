import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-loans',
  templateUrl: './edit-loans.component.html',
  styleUrls: ['./edit-loans.component.scss']
})
export class EditLoansComponent implements OnInit {
  
  
  @Input()
  Name:string
  @Input()
  Type:string

  @Output()
  updatedList = new EventEmitter()

  editid:number=0
  constructor(private activate:ActivatedRoute, private fb:FormBuilder) {
    this.activate.params.subscribe((params)=>{
      this.editid = params.id
    })
  }
  
  editLoan:FormGroup
  
  updated(){
    const str:string ="Successfull"
    this.updatedList.emit(str)
  } 

  ngOnInit(): void {


    // creating using formgroup
    // this.editLoan = new FormGroup({
    //   'loadName': new FormControl(),
    //   'loadDescription': new FormControl(),
    //   'loanType': new FormControl()
    // })

    // creating using form builder
    this.editLoan = this.fb.group({
      'loadName': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      'loadDescription': new FormControl('',[
        Validators.minLength(5)
      ]),
    })

    const obj = {
      'loadName':'My loan',
      'loadDescription':'this is my loan'
    }
    this.editLoan.valueChanges.subscribe(data =>{
      console.log(data)
    })
    this.editLoan.statusChanges.subscribe(data=>{
      console.log(data)
    })
  }
  // this.editLoan.setValue(obj)

  editted(){
    console.log(this.editLoan.value)
    console.log(this.editLoan.valid)
    console.log(this.editLoan.invalid)
    console.log(this.editLoan.invalid)

    console.log(this.editLoan.pending)
    console.log(this.editLoan.pristine)

    console.log(this.editLoan.dirty)

    console.log(this.editLoan.touched)

  }

  resetform(){
    this.editLoan.reset()
  }

}
