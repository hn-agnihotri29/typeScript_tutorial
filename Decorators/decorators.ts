//Parameterized decomrator
type = ComponentOptions = {
  selector: string 
}
/*
Decorator Factory
*/
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called')
    constructor.prototype.options = options
    constructor.prototype.uniqueId: Date.now()
    constructor.prototype.insertDOM = () = {
      console.log('Inserting the component in DOM')
    }
  }
//Passing an object/  single value to this decorator  
@Component({selector: '#my-profile'}) 
class ProfileComponent() {
   
}

//Decorator Composition mean way to merge two decorator 
function pipe(constructor: Function) {
    console.log('pipe decorator')
    constructor.prototype.pipe = true
}
// --> Pipe decorator called
// --> Component decortor called 
 @Component({selector: '#my-profile'})
@Pipe  
class ProfileComponent() {
   
}

//Method Decorator
/*
1st parameter is target : any is type that typescript compiler is expect from us.
2nd parameter is name of target method
3rd parameer is descriptor: PropertyDescriptor
*/
function Log(target: any, method: string ,descriptor: PropertyDescriptor) {
  let original = descriptor.value as Funtion;
  //the value references to target method
   descriptor.value = function (message: string) => {
     console.log("Before")
     original.call(this,  message )
     console.log("After");
   }
  //this function replace say function 
 }

class Perosn {
  @Log
  say(message: string) {
    console.log('Person says' + message);
  }
}
let person = new Perosn();
person.say('Hello')
  
//output
//this will not run the say function but Log one if we need to run the say function
// pass the message paramentor to decriptor.value =  function(message: stinrg)

// ...agrs, any ---> all function to take various number of parameter

 


//Property Decorator
//here we don't have aperoperty descriptor instead  we are going to decrelare the property descriptor for the target property

function MinLenght(length : number) {
  return (target : any, propertyName: string) => {
    const descriptor: PropertyDescriptor = {
        //preess crtl + space to see all method of PropertyDescriptor
         set(newval: stinrg) {
           if(newval.length < lenght) {
              thorw new Error
           }
         }
     }
  }
}

  class User {

    @MinLength(4)
    password: string;

    constructor(password: string) {
      this.password = password;
    }
    
  }
















