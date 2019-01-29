import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit, OnChanges {

  bookFormGroup: FormGroup;
  @Input() reset: boolean;
  @Output() send = new EventEmitter();
  lengthValidator = [Validators.required, Validators.minLength(2), Validators.maxLength(50)];

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // Set form
    this.bookFormGroup = this._formBuilder.group({
      name: [null, this.lengthValidator],
      editorial: [null, this.lengthValidator],
      author: [null, this.lengthValidator],
      edition: [null, this.lengthValidator]
    });
  }

  /**
   * This method allows reset the modal each time it is closed
   * @param {SimpleChanges} changes
   * @memberof NewBookComponent
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reset'].currentValue) {
      this.bookFormGroup.reset();
    }
  }

  sendForm() {
    this.send.emit({form: this.bookFormGroup.value});
  }

}
