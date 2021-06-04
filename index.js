var app = new Vue({
    el: '#app',
    data: {
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
    },
    methods: {
        sayHello: function () {
            alert(this.message);
        },
        getSumm: function () {
            alert(this.num1 + '+' + this.num2 + '=' + (this.num1 + this.num2));
        },
        changeMessage() {
            this.message = 'Bye';
        },
        addItem() {
            this.items.push('newItem' + this.items.length);
        },
        removeFirstItem() {
            this.items.shift();
        },
        removeLastItem() {
            this.items.pop();
        },
        reverseItems() {
            this.items.reverse();
        },
        sortItems() {
            this.items.sort();
        },
        filterFirst10() {
            this.items = this.items.filter((o, key) => key > 0 && key < 10);
        }
    }
});
