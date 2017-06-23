//make a new Vue.js instance
new Vue({
    //this Vue.js instance is associated with vue-app div
    el: '#vue-app',
    data: {
        name: 'Codrut',
        job: 'Student',
        age: '23',
        website: 'http://codrut.rocks',
        websiteTag: '<a href="http://codrut.rocks">Personal website 2</a>',
        x: 0,
        y: 0,
        formName: '',
        formAge: '',
        a: 0,
        b: 0,
        available: false,
        nearby: false
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name + '!'
        },
        add: function(inc) {
            this.age = parseInt(this.age) + parseInt(inc);
        },
        subtract: function(dec) {
            this.age = parseInt(this.age) - parseInt(dec);
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me!');
        },
        logName: function() {
            console.log('You entered your name!');
        },
        logAge: function() {
            console.log('You entered your age!');
        }
    },
    computed: {
        addToA: function() {
            console.log('addToA');
            return parseInt(this.a) + parseInt(this.age);
        },
        addToB: function() {
            console.log('addToB');
            return parseInt(this.b) + parseInt(this.age);
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
