const ary=[];

function n1(){
    ary.push(1);
    app();
}

function n2(){
    ary.push(2);
    app();
}

function n3(){
    ary.push(3)
    app()
}

function n4(){
    ary.push(4);
    app();
}

function n5(){
    ary.push(5);
    app();
}

function n6(){
    ary.push(6);
    app();
}

function n7(){
    ary.push(7);
    app();
}

function n8(){
    ary.push(8);
    app();
}

function n9(){
    ary.push(9);
    app();
}

function n0(){
    ary.push(0);
    app();
}

function del(){
    ary.pop();
    app();
}


function add(){
    ary.push('+');
    app();
}

function sub(){
    ary.push('-');
    app();
}

function multi(){
    ary.push('×');
    app();
}

function div(){
    ary.push('÷');
    app();
}

function nl(){
    ary.push('(');
    app();
}

function nr(){
    ary.push(')');
    app();
}

function app(){
    let str = ary.join("")
    myform.mytext.value = str;
}

function multidiv(ary){
    for(i=0; i<ary.length; i++){
        if(ary[i]=='×'){
            ary[i-1] = ary[i-1]*ary[i+1];
            if(i+2!=ary.length){
                for(let l=i+2; l<ary.length; l++){
                    ary[l-2] = ary[l];
                }
            }
            ary.splice(ary.length-2,2);
        }else if(ary[i]=='÷'){
            ary[i-1] = ary[i-1]/ary[i+1];
            if(i+2!=ary.length){
                for(let l=i+2; l<ary.length; l++){
                    ary[l-2] = ary[l];
                }   
            }
            ary.splice(ary.length-2,2);
        }
    }
}

function addsub(ary){
    for(i=0; i<ary.length; i++){
        if(ary[i]=='+'){
            ary[i-1] = ary[i-1]+ary[i+1];
            if(i+2!=ary.length){
                for(let l=i+2; l<ary.length; l++){
                    ary[l-2] = ary[l];
                }
            }
            ary.splice(ary.length-2,2);
        }else if(ary[i]=='-'){
            ary[i-1] = ary[i-1]-ary[i+1];
            if(i+2!=ary.length){
                for(let l=i+2; l<ary.length; l++){
                    ary[l-2] = ary[l];
                }   
            }
            ary.splice(ary.length-2,2);
        }
    }
}


function equal(){
    
    //search(ary);
    multidiv(ary);
    addsub(ary);
    myform.mytext.value = ary[0] ;
}
