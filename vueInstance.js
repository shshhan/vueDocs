//데이터 객체
const data = {
    a : 1,
}

//Vue인스턴스에 데이터 객체 추가
let vm = new Vue({
    data : data
    // data : {
    //     newTodoText : '',
    //     visitCount : 0,
    //     hideCompletedTodos : false,
    //     todos : [],
    //     error : null
    // }
})

//인스턴스의 속성은 원본 데이터의 값을 return
console.log(vm.a === data.a);   //true

//인스턴스의 속성 값을 변경하면 원본 데이터의 값에도 영향
vm.a = 2;
console.log(data.a); //2

//반대도 마찬가지
data.a = 10;
console.log(vm.a);

vm.b = 'hi';
console.log(vm.b);


let obj = {
    foo : 'bar'
}

Object.freeze(obj)  //obj 객체의 속성이 변경되는 것을 막음

let vm2 = new Vue({
    el : '#app',
    data : obj
})

//Vue인스턴스의 데이터 속성에 접근할 때는 $ 접두어 필수
console.log(vm2.$data === obj); //true
console.log(vm2.$el === document.getElementById('app'));    //true

vm2.$watch('foo', function(newVal, oldVal) {
    //vm2.foo가 변경되면 호출하는 함수
});


//인스턴스 라이프사이클 훅
//created, mounted, updated, destroyed 등등
//라이프사이클 훅에서 this는 instance 자신
//따라서 화살표 함수의 사용은 지양

new Vue({
    data : {
        a : 1
    },
    created : function(){
        console.log(`a is ${this.a}`);  //괜히 한번 최근에 공부한 템플릿 리터럴 사용해보기
    }
})