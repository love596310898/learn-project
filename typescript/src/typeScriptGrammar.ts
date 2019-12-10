import name from './babelTest'

class Person{
    fullName: string
    cont: number
    getName: object
    constructor (public lastName: string, public firstName: string){
        this.fullName =  lastName + firstName
        this.cont = 0
        this.getName = () => {
            return this.fullName
        }
    }
}

let sam = {age: 18, ...name}
