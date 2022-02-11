let app = new Vue({
    el : '#app',
    data : {
        message : 'Hello Vue!'
    },
})

let app2 = new Vue({
    el : '#app-2',
    data : {
        message : '이 페이지는 ' + new Date() + '에 로드 되었습니다.'
    },
})

let app3 = new Vue({
    el : '#app-3',
    data : {
        seen : true
    }
})

setInterval(function(){
    if(app3.seen == true){
        app3.seen = false;
    } else {
        app3.seen = true
    }
}, 3000)

let app4 = new Vue({
    el : '#app-4',
    data : {
        todos : [
            { text : 'JavaScript 배우기' },
            { text : 'Vue 배우기' },
            { text : 'Create something dope' },
        ]
    }
})

const app5 = new Vue({
    el : '#app-5',
    data : {
        message : 'Hello! Vue.js!'
    },
    methods : {
        reverseMessage : function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
})

let app6 = new Vue({
    el : '#app-6',
    data : {
        message : 'Hellllo Vue.js!!'
    }
})


//컴포넌트를 사용한 작성방법
Vue.component('todo-item', {
    // todo-item 컴포넌트는 "prop"이라고 하는
    // 사용자 정의 속성을 입력 받을 수 있다.
    // 이 prop은 todo라는 이름으로 정의
    props : ['todo'],
    template : '<li>{{ todo.text }}</li>'
})

let app7 = new Vue({
    el :'#app-7',
    data : {
        groceryList : [
            { id : 0, text : 'Vegetables' },
            { id : 1, text : 'Cheese' },
            { id : 2, text : 'Whatever else humans are supposed to eat' },
        ]
    }
})