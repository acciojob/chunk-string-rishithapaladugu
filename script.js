function stringChop(str, size) {
  // your code here
	if(!str){
		return [];
	}
	if(size <= 0){
		return [];
	}
	const result = [];
	for(let i = 0; i < str.length; i += size){
		result.push(str.substring(i, i + size));
	}
	return result; 
	
	
	
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
console.log(stringChop(str, size));

