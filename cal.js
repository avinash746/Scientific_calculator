function dis(val){
    const display=document.getElementById('result')
    display.value+=val
}
function slove(){
    const display=document.getElementById('result')
    let x=display.value
    let y=eval(x)
    display.value=y
}
function del(){
    const display=document.getElementById('result')
    display.value=''

}
function x2(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,2)

}
function x3(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,3)
    
}
function x4(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,4)
    
}
function x5(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,5)
    
}
function x6(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,6)
    
}
function x7(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,7)
    
}
function x8(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,8)
    
}
function x9(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,9)
    
}
function sin(){
    const display=document.getElementById('result')
    display.value=Math.sin(display.value*(Math.PI/180))

}
function sinh(){
    const display=document.getElementById('result')
    display.value=Math.sinh(display.value)
    
}
function asin(){
    const display=document.getElementById('result')
    display.value=Math.asin(display.value)
    
}
function asinh(){
    const display=document.getElementById('result')
    display.value=Math.asinh(display.value)
    
}
function cos(){
    const display=document.getElementById('result')
    display.value=Math.cos(display.value*(Math.PI/180))

}
function cosh(){
    const display=document.getElementById('result')
    display.value=Math.cosh(display.value)
    
}
function acos(){
    const display=document.getElementById('result')
    display.value=Math.acos(display.value)
    
}
function acosh(){
    const display=document.getElementById('result')
    display.value=Math.acosh(display.value)
    
}
function tan(){
    const display=document.getElementById('result')
    display.value=Math.tan(display.value*(Math.PI/180))

}
function tanh(){
    const display=document.getElementById('result')
    display.value=Math.tanh(display.value)
    
}
function atanh(){
    const display=document.getElementById('result')
    display.value=Math.atanh(display.value)
    
}
function cot(){
    const display=document.getElementById('result')
    display.value=1/Math.tan(display.value)
    
}
function coth(){
    const display=document.getElementById('result')
    display.value=1/Math.tanh(display.value)
    
}
function log(){
    const display=document.getElementById('result')
    display.value=Math.log10(display.value)
    
}

function ln(){
    const display=document.getElementById('result')
    display.value=Math.log(display.value)
    
}

