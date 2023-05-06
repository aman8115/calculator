var ok =0

function getInput(i){
   
   
   //document.getElementById("input").value
    if(i === '='){
        document.getElementById("input").value=eval( document.getElementById("input").value)
    } else if( i === '+'|| i === '-' || i === '*'|| i=== '/' ) {
        if(ok === 0){
            document.getElementById("input").value+=i
            ok = 1;

        }

    }
    else if (i === 'C'){
        document.getElementById("input").value=''
    } else{
        document.getElementById("input").value+=i
        ok = 0;
    }


}