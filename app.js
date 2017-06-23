//make a new Vue.js instance
new Vue({
    //this Vue.js instance is associated with vue-app div
    el: '#vue-app',
    data: {
        name: 'Codrut',
        job: 'Student'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name + '!'
        }
    }
});
