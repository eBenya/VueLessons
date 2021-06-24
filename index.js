var app = new Vue({
    el: '#app',
    data: {
        someText: 'some text',
        someTextWithTags: '<a v-on:click.prevent="showText" href="#">SomeLinkTagText</a>',
        name: '',
        surname: '',
        patronymic: '',
        someNumber: 0,
        textIsShow: true,
        buttonInfo: 'kek',
    },
    methods: {
        showText: function () {
            this.buttonInfo = 'kek';
            this.textIsShow = !this.textIsShow;
        },
        onClickEventHandler: () => {
            alert('You tap to the SomeButton');
        },
        changeText: function (text) {
            this.someText = text;
        },
        testEvent: (e) => {
            console.log(e);
            alert('You tap to ' + e.target.firstChild.data);
        },
        onClickKeyBoardHandler: function (event) {
            this.buttonInfo = `key code - ${event.which}; key - ${event.key}`;
            //this.forceUpdate();
        },
        onClickMouseHandler: function(event) {
            let mouseButton = '';
            if (event.which === 1)
                mouseButton = 'LBM';
            else if (event.which === 2)
                mouseButton = 'RBM';
            else if (event.which === 3)
                mouseButton = 'MBM';

            this.buttonInfo = `key code - ${event.which}; key - ${mouseButton}`;
        }
    },
    computed: {
        fullName: function () {
            return `${this.surname} ${this.name} ${this.patronymic}`;
        },
        sqrSomeNumber: function () {
            return this.someNumber ** 2;
        }
    },
});
