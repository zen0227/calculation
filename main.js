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
    if(ary.length==0)
    ary.push('0');
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

function equal(){
    arrange();
    search();
    multidiv(cal);
    addsub(cal); 
    myform.mytext.value = cal[0];
    
}

function arrange(){
    newary = [];
    cal = [];
    let n = 0, m = 0;
    for(i=0; i<ary.length; i++){
        if(ary[i]!='+'&&ary[i]!='-' &&ary[i]!='×'&&ary[i]!='÷'&&ary[i]!='('&&ary[i]!=')'){
            newary[n] = ary[i];
            n++;
        }else if(newary.length!=0){
            let str = newary.join("");
            cal[m] = str;
            cal[m+1] = ary[i];
            m = m+2;
            newary = [];
            n = 0;
        }else{
            cal[m] = ary[i];
            m = m+1;
        }
    }
    let str = newary.join("");
    cal[m] = str;
}

function search(){
    mary = [];
    s = [];
    let n = 0, m = 0;
    for(i=0; i<cal.length; i++){
        if(cal[i]=='('){
            s[n] = i;
            n++;
        }else if(cal[i]==')'){
            s[n] = i;
            for(let k=Number(s[n-1])+1; k<i; k++){
                //()の中身の配列を作る
                mary[m] = cal[k];
                m++;
            }
            multidiv(mary);
            addsub(mary);
            cal[s[n-1]] = mary[0];
            if(s[n]!=cal.length-1){
                m = 0;
                for(let k=Number(s[n])+1; k<cal.length; k++){
                    cal[Number(s[n-1])+1+m] = cal[k];
                    m++;
                }
                cal.splice(Number(s[n-1])+2,s[n]-s[n-1]);
            }else{
                cal.splice(Number(s[n-1])+1,s[n]-s[n-1]);
            }
        }
        

        
        
    }
}

function multidiv(cal){
    for(i=0; i<cal.length; i++){
        if(cal[i]=='×'){
            cal[i-1] = cal[i-1]*cal[i+1];
            if(i+2!=cal.length){
                for(let l=i+2; l<cal.length; l++){
                    cal[l-2] = cal[l];
                }
            }
            cal.splice(cal.length-2,2);
            i = i-1;
        }else if(cal[i]=='÷'){
            cal[i-1] = cal[i-1]/cal[i+1];
            if(i+2!=cal.length){
                for(let l=i+2; l<cal.length; l++){
                    cal[l-2] = cal[l];
                }   
                
            }
            cal.splice(cal.length-2,2);
            i = i-1;
        }
    }
    
}

function addsub(cal){
    for(i=0; i<cal.length; i++){
        if(cal[i]=='+'){
            //+の時だけ配列の中身が文字列だと認識されてしまうので、型キャストを行う
            cal[i-1] = Number(cal[i-1])+Number(cal[i+1]);
            if(i+2!=cal.length){
                for(let l=i+2; l<cal.length; l++){
                    cal[l-2] = cal[l];
                }
            }
            cal.splice(cal.length-2,2);
            i = i-1;
        }else if(cal[i]=='-'){
            cal[i-1] = cal[i-1]-cal[i+1];
            if(i+2!=cal.length){
                for(let l=i+2; l<cal.length; l++){
                    cal[l-2] = cal[l];
                }
            }
            cal.splice(cal.length-2,2);
            i = i-1;
        }
    }
}
