//make a new Vue.js instance
new Vue({
    //this Vue.js instance is associated with vue-app div
    el: '#vue-app',
    data: {
        name: 'Codrut',
        job: 'Student',
        website: 'http://codrut.rocks',
        websiteTag: '<a href="http://codrut.rocks">Personal website 2</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name + '!'
        }
    }
});
