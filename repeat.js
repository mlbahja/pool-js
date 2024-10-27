function repeat(s, num){    
let i = 0
let st = ""
while (i < num){ 
 st += s;
 if (s !== s.length) 
 i++;
}
return st;
}

