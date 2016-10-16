"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var Ng2Modal = (function () {
    function Ng2Modal(modalService) {
        this.modalService = modalService;
    }
    Ng2Modal.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content) /* , { windowClass: 'dark-modal' }) */
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            console.log(result);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(reason);
        });
    };
    Ng2Modal.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    Ng2Modal = __decorate([
        core_1.Component({
            selector: 'ng2-modal',
            moduleId: module.id,
            templateUrl: 'ng2-modal.tpl.html',
            // encapsulation: ViewEncapsulation.None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #286090;\n      border-radius: 0;\n      color: white;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [ng_bootstrap_1.NgbModal])
    ], Ng2Modal);
    return Ng2Modal;
}());
exports.Ng2Modal = Ng2Modal;
//# sourceMappingURL=modal.js.map