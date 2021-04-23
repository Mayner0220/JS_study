const str = 'test';
console.log(str);
console.log(str[0],str[1],str[2],str[3]);// 자동으로 문자열로 저장된다.

//! 한 번 정의된 문자열은 변하지 않는다.

str[0] = 'T';
console.log(str);//'T'로 변하지 않았다.