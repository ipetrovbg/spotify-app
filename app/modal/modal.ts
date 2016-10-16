import { Component, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare const module;



@Component({
    selector: 'ng2-modal',
    moduleId: module.id,
    templateUrl: 'ng2-modal.tpl.html',
    // encapsulation: ViewEncapsulation.None,
    styles: [`
    .dark-modal .modal-content {
      background-color: #286090;
      border-radius: 0;
      color: white;
    }
  `]
})
export class Ng2Modal {

 closeResult: string;
  constructor(private modalService: NgbModal) {}

open(content) {
    this.modalService.open(content) /* , { windowClass: 'dark-modal' }) */
    .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(reason);
    });
  }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
        } else {
        return  `with: ${reason}`;
        }
    }

}