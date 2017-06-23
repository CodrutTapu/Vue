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
        formAge: ''
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name + '!'
        },
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
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
    }
});
