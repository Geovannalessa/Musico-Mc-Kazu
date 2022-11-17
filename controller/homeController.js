const homeController = {
    mostraHome:(req,res)=>{
        res.render('home.ejs')
    },
    //telas de login
    mostraApelido:(req, res)=>{
        res.render("login.ejs")
    },
    mostraCadastro:(req,res)=>{
        res.render("cadastro.ejs")
    },
    mostraEntrar:(req,res)=>{
        res.render("entrar.ejs")
    }
}

module.exports = homeController;