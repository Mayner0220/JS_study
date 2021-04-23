const emptyArr = []; //빈배열 생성
console.log(emptyArr[0]);
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr);
//배열의 경우는 값을 순차적으로 넣을 필요 없이 
//아무 인덱스 위치에나 값을 동적으로 추가할 수 있다.