module.exports = function(app){
    app.get("/", function(req, res){
        res.render("homepage",{});
    });

    app.get("/login" , function(req,res){
        res.render("login",{});
    });

};