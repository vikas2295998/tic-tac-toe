
let val='X';
const childs=document.querySelectorAll('.grid div');
var grid=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
console.log(childs);
let value=`<i class="fa-solid fa-o"></i>`;
const para=document.getElementById('messege');
const child=document.querySelectorAll('.grid div');
child[0].className="active";
var draw=false;
const play=()=>{
    document.getElementById('play').style.display='block';
}
const messege=(flag)=>{
    console.log(flag);
    if(flag==='X'){
        para.innerHTML=`Player X's turn !!! `

    }
    else if(flag==='O'){
        para.innerHTML=`Player O's turn !!!`
    }
    else{
        if(flag===1){
            para.innerHTML="Player X wins !!!";
        }
        else if(flag==0){
            para.innerHTML="Player O wins !!!";
        }
        else{
            para.innerHTML="match draw !!!";
        }
        draw=true;
        play();
    }
}

let check=(flag)=>{
    // console.log(flag);
    let a;
    for(let i=0;i<3;i++){
        a=true;
        for(let j=0;j<3;j++){
            if(grid[i][j]!=flag)
            {
                a=false;
            }
        }
        if(a==true)
        return true;
    }
    for(let i=0;i<3;i++){
        a=true;
        for(let j=0;j<3;j++){
            if(grid[j][i]!=flag)
            {
                a=false;
            }
        }
        if(a==true)
        return true;
    }


    a=true;
    for(let i=0,j=0;i<3;i++,j++){
        if(grid[i][j]!=flag)
        a=false;
    }
    if(a==true)
    return true;
    a=true;
    for(let i=0,j=2;i<3;i++,j--){
        if(grid[i][j]!=flag)
        a=false;
    }
    if(a==true)
    return true;
    return false;
};
let check_full=()=>{
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(grid[i][j]==-1)
            return false;
        }
    }
    return true;
}
childs.forEach((e,i)=>{
    if(draw===false){
    console.log(e);
    let col=Math.floor(i%3);
    let row=Math.floor(i/3);
    e.addEventListener('mouseover',()=>{
        if(grid[row][col]==-1 && draw==false){
            if(val=='O'){
                e.classList.add('hc');
                e.classList.remove('hx');
            }
            
            else
            {
                e.classList.add('hx');
                e.classList.remove('hv');
            }
        }
        else{
            e.classList.remove('hc');
                e.classList.remove('hx');
        }
    });
    e.addEventListener('click',()=>{
        if(e.innerHTML==="" && draw==false)
        {
            
        
        if(val=='X'){
            val='O';
            e.classList.add('x');
            grid[row][col]=1;
            if(check(1)==true)
            messege(1);
            else{
                messege('O');
            }
        }
        else{
            val='X'; 
            e.classList.add('circle');
            grid[row][col]=0;
            if(check(0)==true)
            messege(0);
            else{
                messege('X');
            }
            
        }
        if(check_full() && draw==false)
        messege(2);
        console.log(e.className);
        }
    })
}
})

