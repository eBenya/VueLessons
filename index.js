var app = new Vue({
    el: '#app',
    data: {
        showPar: false,
        text: 'someText',
        message: 'hello',
        name: 'kek',
        surname: 'puc',
        var1: 1,
        var2: 2,
        num: 5,
        num1: 1,
        num2: 2,
        num3: 3,
        numArr: [1, 2, 3],
        items: ['a', 'b', 'c', 'd', 'e'],
        users: {
            employee1: '100$',
            employee2: '200$',
            employee3: '300$',
        },
        hrefs: [
            { href: '1.html', text: 'ссылка 1' },
            { href: '2.html', text: 'ссылка 2' },
            { href: '3.html', text: 'ссылка 3' },
        ],
        products: [
            { name: 'product1', price: 100, quantity: 5 },
            { name: 'product2', price: 200, quantity: 4 },
            { name: 'product3', price: 300, quantity: 3 },
        ],
        vorkNum: null,
        resultSqrNum: 0,
        isFirstInput: true,
        input1: '',
        input2: '',
        textAreaWordsArray: [],
        textAreaLongString: '',
        radioType: '',
        selected: '',
        isDisabled: false,
    },
    methods: {
        executeAllert(mess) {
            alert(mess);
        },
        sayHello: function () {
            alert(this.message);
        },
        getSumm: function (arr) {
            let sum = arr.reduce((sum, it) => sum += it);
            alert(sum);
        },
        changeMessage() {
            this.message = 'Bye';
        },
        addItem() {
            this.items.push('newItem' + this.items.length);
        },
        removeItem(index) {
            this.items.splice(index, 1);
        },
        reverseItems() {
            this.items.reverse();
        },
        sortItems() {
            this.items.sort();
        },
        filterFirst10() {
            this.items = this.items.filter((o, key) => key > 0 && key < 10);
        },
        //str.charAt(0).toUpperCase()+str.slice(1, str.length-1)+str.charAt(str.length-1).toUpperCase();
        upperCaseFirst() {
            this.text = this.text.charAt(0).toUpperCase() + this.text.slice(1);
        },
        upperCaseLast() {
            this.text = this.text.slice(0, this.text.length - 1) + this.text.charAt(this.text.length - 1).toUpperCase()
        },
        upperCaseFirstAndLast() {
            this.upperCaseFirst();
            this.upperCaseLast();
        },
        squareItem(index) {
            this.numArr = this.numArr.map((o, i) => i === index ? o ** 2 : o);
        },
        showToogleMode() {
            this.showPar = !this.showPar;
        },
        calcSqrt() {
            this.resultSqrNum = Math.sqrt(this.vorkNum);
        },
        switchInput(isFirst) {
            this.isFirstInput = isFirst;
        },
        confirmInputChange() {
            if (this.isFirstInput) {
                this.input2 = this.input1;
            }
            else {
                this.input1 = this.input2;
            }
        },
        createWordArray() {
            if (this.textAreaLongString) {
                this.textAreaWordsArray = this.textAreaLongString.split(' ').map(x => x);
            }
        },
    }
});
