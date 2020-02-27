interface person
{
    name : string;
    age : string;
}

class student implements person
{
    name : string;
    age : string;
    classname : string;
    fsubject : string ;

      constructor(name : string , age : string , classname : string , fsubject : string)
      {
    this.name   = name;
    this.age = age;
    this.classname = classname;
    this.fsubject  = fsubject;
      }

      display():void
      {
          console.log(this.name);
      }

      
       
    }
     

    

//class school
//{
    //schoolname : string ;
    //studentlist : Array<string> ;
//}


 
 const inputName : HTMLInputElement = <HTMLInputElement>document.getElementById('name');
 const n= inputName.value;
  

 
 const inputAge : HTMLInputElement = <HTMLInputElement>document.getElementById('age');
 const a=inputAge.value;
  

 
 const inputClass : HTMLInputElement = <HTMLInputElement>document.getElementById('class');
 const c=inputClass.value;
  


 const inputSubject : HTMLInputElement = <HTMLInputElement>document.getElementById('subject');
 const s=inputSubject.value;
   
function add():void
{
let per  = new student(n,a,c,s);
per.display();
}

document.getElementById('add')!.addEventListener('click',add);