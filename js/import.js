import obj from './export'
import {a, b, c} from './export'
import * as obj1 from './export'
obj()
console.log(a, b, c)
console.log(obj1.default === obj)
console.log(obj1.a === a)