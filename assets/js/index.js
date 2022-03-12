function tela(){
    const tela = $(".tela")
    const overlay = $(".overlay")
    const hamburger = $(".cabecalho__hamburger")
    if(!tela.hasClass("appearOpacity1")){
        hamburger.addClass("hamburger__x")
        tela.removeClass("disappearOpacity0")
        overlay.removeClass("disappearOpacity0")
        tela.addClass("appearOpacity1")
        overlay.addClass("appearOpacity1")
        

    }
    else{
        hamburger.removeClass("hamburger__x")
        overlay.removeClass("appearOpacity1")
        tela.removeClass("appearOpacity1")
        tela.addClass("disappearOpacity0")
        overlay.addClass("disappearOpacity0")

    }
    
    

}