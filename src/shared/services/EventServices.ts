import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

/// This service helps us to listen to events emiting for any component from any component.
@Injectable({
    providedIn:'root'
})///this will say this class can be injected to other classes in the entire application.
export class EventService {
    private subject = new Subject();

    emit(eventName:string, payload:any) {
        this.subject.next({eventName, payload})
    }

    listen(eventName:string, callback:(event: any) => void) {
        this.subject.asObservable().subscribe((nextObj: any) => {
            if(eventName === nextObj.eventName) {
                callback(nextObj.payload)
            }
        })
    }
}

// export default new EventService();e