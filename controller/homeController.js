const homeController = {
    mostraHome:(req,res)=>{
        res.render('home.ejs')
    },
    mostraApelido:(req, res)=>{
        res.render("login.ejs")
    }
}

module.exports = homeController;