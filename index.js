const API='https://api.adviceslip.com/advice'
const btn = document.querySelector('.btn')
const idTitle = document.querySelector('.id')
const adviceDesc = document.querySelector('.advice')

let isFetching = false

async function fetchData(urlApi){
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

async function calls(urlApi){
    let informacion = await fetchData(`${urlApi}`)

    let advice = informacion.slip.advice
    let id = informacion.slip.id

    adviceDesc.innerHTML= advice
    idTitle.innerHTML=id

}
function useInfo(){
    if(!isFetching){
        isFetching=true
        btn.disabled=true
        calls(API)
        setTimeout(()=>{
            isFetching=false
            btn.disabled=false
        }, 1000)
    }
}
btn.addEventListener('click', useInfo)
window.addEventListener('load', useInfo)

