function dados(){
    const ds = [
                 {id:"1",login:"ringo",senha:"1234@"},
                 {id:"2",login:"paul",senha:"12345"},
                 {id:"3",login:"john",senha:"123445"}
               ]
    
    const json = JSON.stringify(ds) //quando precisar passar utilizamos esse stringify 

    localStorage.setItem("banco", json) // set é atribuir ou colocar. local storage é navegador, localstorage nao apaga no navegador

}

function remover(){
    localStorage.removeItem("banco") //
}

function logar() {
    // conversao e promoçao de dados para dados em json para array(vetor)
    const ds = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value
    let ps = document.querySelector("#pass").value

    for(let i=0;i<ds.length;i++) {

    if(lg == ds[i].login && ps == ds[1].senha){
        alert("encontrou")
    }
    
    }

}