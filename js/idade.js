function Verificar() {
let form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    let data = new Date()
    let ano = data.getFullYear()
        let nasc = document.querySelector('#anoNasci').value
        let res = document.querySelector('#resposta')
        if (nasc.length == 0 || nasc > ano){
            alert('[ERRO]Verifique os dados e tente novamente!')
        }else {
          let sex = document.getElementsByName('radsex')
           let idade =  ano - nasc
           let genero = '';
           let img = document.createElement('img')
           img.setAttribute('id','foto')
           if (sex[0].checked){
            genero = 'Masculino';
           
            if ( idade >=0  && idade <=10) {
                res.innerHTML = `Criança`
                
                img.setAttribute(`src`, `imgIdade/homem5-8.png`)
            }
            else if (idade >=10 && idade <= 21) {
                res.innerHTML = `Jovem`
                img.setAttribute(`src`,`imgIdade/homem18+.png`)
            }else if (idade <50) {
                res.innerHTML = `Adulto`
                img.setAttribute (`src`,`imgIdade/homem+.png`)
            }else {
                res.innerHTML = `Idoso`
                img.setAttribute( `src`,`imgIdade/homem55+.png`)
            }
            if (idade >=0 && idade <=10) {
                document.body.style.backgroundImage= `url(imgIdade/wallpaper-kids.jpg)`
            }else {
                document.body.style.backgroundImage = 'none'
                document.body.style.backgroundColor= 'blue'
            }
           }
           else {
            genero = 'Mulher'
            if (idade >=0 && idade <=10) {
                document.body.style.backgroundImage= `url(imgIdade/wallpaper-kids.jpg)`
            }else  {
                document.body.style.backgroundImage ='none'
                document.body.style.backgroundColor = '#F07FB6'
            }
            if ( idade >=0  && idade <10) {
                res.innerHTML += `Criança`
                img.setAttribute(`src`, `imgIdade/mulher5-10.png`)
            }
            else if (idade >=10 && idade <= 21) {
                res.innerHTML += `Jovem`
                img.setAttribute(`src`,`imgIdade/mulher10-15.png`)
            }else if (idade < 60) {
                res.innerHTML += `Adulto`
                img.setAttribute(`src`, `imgIdade/mulher40+.png`)
            }else {
                res.innerHTML += `Idoso`
                img.setAttribute(`src`, `imgIdade/mulher60+.png`)
            }
            
           }
           res.style.textAlign = 'center'
           res.style.padding = '1em'
           res.innerHTML = `<p class='resjs'> <strong>Detectamos</strong> <br>${idade} anos <br> ${genero}</p>`
           res.appendChild(img)
        }
        
    }
)
}


Verificar()