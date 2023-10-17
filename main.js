const ary=[];

function n1(){
    ary.push("1");
    app();
}

function n2(){
    ary.push('2');
    app();
}

function n3(){
    ary.push('3')
    app()
}

function n4(){
    ary.push('4');
    app();
}

function n5(){
    ary.push('5');
    app();
}

function n6(){
    ary.push('6');
    app();
}

function n7(){
    ary.push('7');
    app();
}

function n8(){
    ary.push('8');
    app();
}

function n9(){
    ary.push('9');
    app();
}

function n0(){
    ary.push('0');
    app();
}


function n00(){
    ary.push('00');
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
/*function app() {
    document.getElementsByClassName("text-box").value = str;
}
function app(){
    let str = ary.join("")
    document.getElementById('id_textBox1').innerHTML = str ;
}*/

function equal(){
    let n = 0
    let m = 0;
    let num = [];
    let cal = [];
    let date = [];

    for(let i=0; i<ary.length; i++){
        if(isNaN(ary[i])==false){
            num[m] = ary[i];
            m = m+1;
        }else{
            cal[n]=ary[i];
            let str = num.join("")
            date[n] = Number(str);
            m = 0;
            num = [];
            n = n + 1;
        }
    }
    let str = num.join("")
    date[n] = Number(str);

    for(i=0; i<n; i++){
        if(cal[i]=='+'){
            date[i+1]=date[i]+date[i+1];
        }else if(cal[i]=='-'){
            date[i+1]=date[i]-date[i+1];
        }else if(cal[i]=='×'){
            date[i+1]=date[i]*date[i+1]
        }else if(cal[i]=='÷'){
            date[i+1]=date[i]/date[i+1];
        }
    }
    /*let ans = 0;
    for(i=0; i<n+1; i++){
        ans = ans + date[i];
    }*/
    ans=date[n]
    myform.mytext.value = ans ;
}
