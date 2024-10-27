function triangle(str, num){
    let res = '';
    for (let i = 1; i <= num;i++){
        for (let j = 0; j < i;j++){
            if (str === undefined){
                return undefined;
            } 
            // console.log(str);
            res += str;
        }
        if (i < num){
            res += '\n';
        }
    }
    return res;
}
/*
for i := 1; i <= num; i++ {
		 for j := 0; j < i; j++ {
			fmt.Print("*")
		}
		fmt.Println()
	}
*/
/*
function countTo10(count){
    if (count < 10) {
      console.log('counter at', count)
      countTo10(count + 1) // call itself with the updated value of count
    }
  }
  console.log(triangle('*',50));*/
//  console.log(triangle('*',5));