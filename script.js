
function get(){
 fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()).then(res =>{
  document.querySelector('img').src = res[0].url
})
 }
 
 
get()


document.querySelector('#next').addEventListener('click',ev=>{
  alert('oo')
  get()
})


//fetch('https://dog.ceo/api/breeds/image/random').then(res=>res.json()).then(res=>{
 // document.querySelector('img').src = res.message
//})