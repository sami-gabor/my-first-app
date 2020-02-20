import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: '<p>Warning...</p>',
    styles: [
        `p {
            background-color: lightpink;
            border: 2px solid red;
            padding: 10px;
        }`
    ]
})
export class WarningAlertComponent {

}