const divid = document.getElementById('duplicater');
const divid2 = document.getElementById('duplicater2');

//create more email field
const rendarEmailInput = (div) =>{


            const input = document.createElement("input");
            input.type = "email";
            input.name = "moreEmail";
            input.className="form-control";
            div.appendChild(input);
      }

const button = document.getElementById('btn1');
    button.addEventListener('click', e=>{
        e.preventDefault();
       rendarEmailInput(divid);
    });

//create more number field
    const rendarNumberInput = (div) =>{


    const input = document.createElement("input");
    input.type = "number";
    input.name = "moreNumber";
    input.className="form-control";
    div.appendChild(input);
}

const button2 = document.getElementById('btn2');
    button2.addEventListener('click', e=>{
        e.preventDefault();
        
        rendarNumberInput(divid2);
    });

    
    

 

const inputdata = {

   AnotherEmail:[],
   AnotherPhone:[]
};
const allelement = document.getElementById("allelement");
//    function pushData

document.getElementById('submitBtn').addEventListener('click', function(e){


   e.preventDefault();
        // get value from the input text
        const inputText = document.getElementById('inputName').value;
    
       inputdata.name = inputText;
       

        const inputEmail = document.getElementById('inputEmail').value;
        inputdata.email = inputEmail;

        const inputPhone = document.getElementById('inputPhone').value;
        inputdata.phone = inputPhone;

    const inputanotheremail = document.getElementsByName('moreEmail');

    const AnotherEmaillength = inputanotheremail.length;
    //moreinputemail data push`
        for(i = 0; i < AnotherEmaillength ; i++)
        {
            inputdata.AnotherEmail.push(inputanotheremail[i].value);
            
            
        }

    //moreinputphone data push`
    const AnotherPhone = document.getElementsByName('moreNumber');
    const AnotherPhonelength = AnotherPhone.length;
    for(i = 0; i < AnotherPhonelength; i++)
        {
            
            inputdata.AnotherPhone.push(AnotherPhone[i].value);
            
        }

       
        
       
     
 let table = document.getElementById('myTable');

 let row = `'<tr>';
    <td>${inputdata.name}</td>
    <td>${inputdata.email}</td>
    <td>${inputdata.phone}</td>
        
`
  
  

    const inputemaillength = inputdata.AnotherEmail.length; 
     
    if( inputemaillength > 0 ){
        row += "<td>"
        for (i = 0; i < inputemaillength ; i++){

            
           row += inputdata.AnotherEmail[i] + '<br>';
            
              
         }
         
         row += "</td>"
         
    }


    const inputphonelength = inputdata.AnotherPhone.length; 
    if( inputphonelength > 0 ){
        row += "<td>"
        for (i = 0; i < inputphonelength ; i++){

            
           row += inputdata.AnotherPhone[i] + '<br>';
            
              
         }
         
         row += "</td>"
         
    }
    

    row += "</tr>"

    table.innerHTML += row ;
    

  allelement.reset();      
        

});

    
