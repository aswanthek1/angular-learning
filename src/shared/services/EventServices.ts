import { Subject, Observable } from "rxjs";

/// This service helps us to listen to events emiting for any component from any component.

class EventService {
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

export default new EventService();