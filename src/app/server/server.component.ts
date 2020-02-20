import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    
    getColor() {
        return this.serverStatus === 'online' ? 'lightgreen' : 'pink'
    }
}