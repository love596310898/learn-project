import obj, { a, b, c } from './export';
import * as obj1 from './export';

obj();
global.console.log(a, b, c);
global.console.log(obj1.default === obj);
global.console.log(obj1.a === a);
