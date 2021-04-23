//함수를 리턴하는 함수
//-> 함수를 호출함과 동시에 다른 함수로 바꾸거나, 자기 자신을 재정의 할 수 있다!
const self = function(){
  console.log('a');
  return function(){
    console.log('b');
  }
}
self = self(); //self함수가 실행되면서 a가 출력되고 self 함수 변수에 self() 함수 호출 리턴값이 저장된다.
self();