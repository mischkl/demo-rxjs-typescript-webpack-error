import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {doSomething} from './doSomething';

const subject: Subject<string> = new Subject<string>();

subject
    .map(arg => arg.toUpperCase())
    .subscribe(doSomething);

subject.next('hello rxjs!');

