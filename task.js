var task = {
    title: 'Mi titulo',
    description: 'Mi descripcion'
};


Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' es urgente';
    },
    writable: false,
    enumerable: false,
    configurable: true
});


console.log(urgentTask.toString());
