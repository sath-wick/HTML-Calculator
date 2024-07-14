var gotError = false;
function appendNum(value){
    if(gotError){
    clearOP();
    gotError = false;
    }   
    document.getElementById("Pframe").textContent = '';
    document.getElementById("frame").textContent += value;    
}

function clearOP(){
    document.getElementById("frame").textContent = '';
    document.getElementById("Pframe").textContent = '';
}

function calcRes(){
    try{
        const res = eval(document.getElementById("frame").textContent);
        document.getElementById("Pframe").textContent = document.getElementById("frame").textContent + '= ';
        document.getElementById("frame").textContent = res;
    }
    catch(error){
        document.getElementById("Pframe").textContent = ''
        document.getElementById("frame").textContent = 'Invalid operation';
        gotError = true;
    }
}

function clearDigit(){
    document.getElementById("Pframe").textContent = '';
    document.getElementById("frame").textContent = document.getElementById("frame").textContent.slice(0,-1);
}

function calcSq(){
    try{
    document.getElementById("frame").textContent = eval('Math.pow(document.getElementById("frame").textContent,2)');
    }
    catch(error){
        gotError = true;
    }

}

function calcSqrt(){
    try{
        
        document.getElementById("frame").textContent = eval('Math.sqrt(document.getElementById("frame").textContent)');
    }
    catch(error){ 
        gotError = true;
    }


}