// here i will explain code for viewchildren 

// first file : sham.component.ts :
{
      export class ShamComponent  {

      massages:Array<String>=[
      "msg1",
      "msg2",
      "msg3"
      ]
      }
}
// now see file : sham.component.html :
{
      <app-sham-msg *ngFor="let message of massages" [message]="message">

      </app-sham-msg>
}


// now pass this massages using ng for to sham-msg (child)

file name : 
{{message}}


// now we have to handle message transfering from sham.component.html to sham-msg.component.html

{
      export class ShamComponent  {


            massages:Array<String>=[
            "msg1",
            "msg2",
            "msg3"
            ]

            this only give access to first value
            @ViewChild(ShamMsgComponent) access:any;

            // so as parent sending some value let us put some value 
            
            // we can only manipulate value in child inside ngAfterViewInit function

            ngAfterViewInit(): void {
            console.log(this.access.message)
            this.access.message="this is changed"
            console.log(this.acc)

            }
      }
}


// now in order to get all values 

file sham.component.this
{

      export class ShamComponent  {


      // we have to use ViewChildren in order to grab access for all the values and its Output will be of type querylist

      @ViewChildren(ShamMsgComponent) acc:any;

      massages:Array<String>=[
      "msg1",
      "msg2",
      "msg3"
      ]
      klpd:any


      console.log(this.klpd)

      // lets change everything 
      for(let i=0;i<this.klpd.length;i++){
            this.klpd[i].message=i+"th and value is changed using ViewChildren inside the sham.Component.ts"
      }

      OUTPUT : 

      // sham-msg works!

      // 0th and value is changed using ViewChildren inside the sham.Component.ts
      // sham-msg works!

      // 1th and value is changed using ViewChildren inside the sham.Component.ts
      // sham-msg works!

      // 2th and value is changed using ViewChildren inside the sham.Component.ts 
      
      }
}
