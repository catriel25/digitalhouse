const admin = ["Ada", "Greta", "Vim", "Tim"];

function adminMiddleware( req, res, next){
    for(let i = 0; i < admin.length; i++){
        if (req.query.user = admin [i]){
            res.send(`Hola Admin: ${req.query.user}`);
        }
        else{
            res.send()
        }
    }
};


module.exports = adminMiddleware;