let btnEnvoyerFormulaire = document.querySelector('button')



btnEnvoyerFormulaire.addEventListener('click', (e)=>{

    let nom = document.querySelector('#nom').value
    let prenom = document.querySelector('#prenom').value
    let textFormulaire = document.querySelector('#textFormulaire').value

    let leNom = document.querySelector('#leNom')
    let lePrenom = document.querySelector('#lePrenom')
    let leTextFormulaire = document.querySelector('#leTextFormulaire')

    let genre = document.querySelectorAll("input[name = 'genre']")
    let leGenre = document.querySelector('#leGenre')

    for(let i = 0; i<genre.length; i++){

        console.log(genre[i].value)
        if(genre[i].checked === true){
            var typeSexe = genre[i].value
        }
    }
    
    // Stocket dans localStorage
    localStorage.setItem("Nom", nom)
    localStorage.setItem("Prenom", prenom)
    localStorage.setItem("Commentaire", textFormulaire)
    localStorage.setItem("Genre", typeSexe)

    leNom.textContent = localStorage.getItem('Nom')
    lePrenom.textContent = localStorage.getItem('Prenom')
    leTextFormulaire.textContent = localStorage.getItem('Commentaire')
    leGenre.textContent = localStorage.getItem('Genre')

    console.log(leNom.textContent)
    console.log(lePrenom.textContent)
    console.log(leTextFormulaire.textContent)
    
})