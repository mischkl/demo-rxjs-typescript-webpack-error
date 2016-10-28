import {Subject} from 'rxjs/Subject';
import {doSomething} from './doSomething';

const subject: Subject<string> = new Subject<string>();
subject.subscribe(doSomething);
subject.next('Hello RxJS!');

