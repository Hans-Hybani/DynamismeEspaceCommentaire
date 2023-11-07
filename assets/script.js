let form = document.getElementById('formId')

function block(event){
        event.preventDefault()
}
form.addEventListener('submit',block)

function addComment(){

        let divPrincipale = document.createElement('div')
        divPrincipale.className = "flex space-x-4 text-sm text-gray-500"

        let divSecondaire = document.createElement('div')
        let titreTrois = document.createElement('h3')
        let divTertiaire = document.createElement('div')
        let paragraph = document.createElement('p')

        let liste = document.getElementById('comment-list')
        let prenom = document.getElementById('first-name')
        let nom = document.getElementById('last-name')
        let textArea = document.getElementById('message') 

        let prenomText = document.createTextNode(prenom.value)
        let espace = document.createTextNode(" ")
        let nomText = document.createTextNode(nom.value)
        let areaText = document.createTextNode(textArea.value)

        divPrincipale.setAttribute('class', "flex space-x-4 text-sm text-gray-500")
        divSecondaire.setAttribute('class',"flex-1 py-10 border-t border-gray-200")
        titreTrois.setAttribute('class',"font-medium text-gray-900")
        divTertiaire.setAttribute('class',"prose prose-sm mt-4 max-w-none text-gray-500")

        liste.appendChild(divPrincipale)
        divPrincipale.appendChild(divSecondaire)
        divSecondaire.appendChild(titreTrois)
        divSecondaire.appendChild(divTertiaire)
        divSecondaire.appendChild(paragraph)

        titreTrois.appendChild(prenomText)
        titreTrois.appendChild(espace)
        titreTrois.appendChild(nomText)
        paragraph.appendChild(areaText)
}

function DeleteFroms() {
        document.getElementById('first-name').value = ""
        document.getElementById('last-name').value = ""
        document.getElementById('message').value = "" 
}

function Run(){
        block(event)
        addComment()
        DeleteFroms()
}