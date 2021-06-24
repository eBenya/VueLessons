var app = new Vue({
    el: '#app',
    data: {
        someText: 'some text',
        someTextWithTags: '<a v-on:click.prevent="showText" href="#">SomeLinkTagText</a>',
        textIsShow: true,
        buttonInfo: '',
        tasks: [
            { text: 'Test task1', isCompleted: false, isEdited: false, date: '22.06.2021' },
            { text: 'Test task2', isCompleted: false, isEdited: false, date: '24.06.2021' },
            { text: 'Test task3', isCompleted: false, isEdited: false, date: '24.06.2021' },
            { text: 'Test task4', isCompleted: true, isEdited: false, date: '23.06.2021' }
        ],
        newTaskText: '',
        takeDate: (new Date()).toLocaleDateString(),
        useCurrentDate: false,

        questions1: [
            {
                question: 'Вопрос 1',
                answer: 'Ответ 1'
            },
            {
                question: 'Вопрос 2',
                answer: 'Ответ 2'
            },
            {
                question: 'Вопрос 3',
                answer: 'Ответ 3'
            },
        ],
        styles: {
            color: 'red',
        },

        questions2: [
            {
                question: 'Вопрос 1',
                answers: [
                    'Ответ 1',
                    'Ответ 2',
                    'Ответ 3',
                    'Ответ 4',
                    'Ответ 5',
                ],
                right: 3, // номер правильного ответа
            },
            {
                question: 'Вопрос 2',
                answers: [
                    'Ответ 1',
                    'Ответ 2',
                    'Ответ 3',
                    'Ответ 4',
                    'Ответ 5',
                ],
                right: 1, // номер правильного ответа
            },
            {
                question: 'Вопрос 3',
                answers: [
                    'Ответ 1',
                    'Ответ 2',
                    'Ответ 3',
                    'Ответ 4',
                    'Ответ 5',
                ],
                right: 5, // номер правильного ответа
            },
        ]
    },
    methods: {
        showText: function () {
            this.buttonInfo = 'kek';
            this.textIsShow = !this.textIsShow;
        },
        removeTask(taskNumber) {
            this.tasks.splice(taskNumber, 1);
        },
        addNewTask() {
            let d;
            if (this.useCurrentDate) {
                d = (new Date()).toLocaleDateString();
            }
            else {
                d = this.localDate;
            }
            this.tasks.push({ text: this.newTaskText, isCompleted: false, isEdited: false, date: d });
            this.newTaskText = '';
        },

        checkAnswer(item, event) {
            if (event.target.value === item.answer) {
                event.target.style.background = 'green';
            }
            else {
                event.target.style.background = 'red';
            }
        },
        checkAnswer2(item, event) {
            if (item.right.toString() == event.target.value)
                event.target.parentNode.style.color = 'green';
            else {
                event.target.parentNode.style.color = 'red';
            }
        },
    },
    computed: {
        localDate: function () {
            return this.takeDate.split('-').reverse().join('.');
        }
    },
});