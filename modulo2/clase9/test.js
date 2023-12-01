let user = {
    username : "Dani",
    age: 23,
    password : "1234",
    comentario: function (){
        return `${this.username} hizo un comentario`
    }
};

module.exports = user
