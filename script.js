/**@jsx h */
import "babel-core/register"
import "babel-polyfill"
import {h, render} from 'preact' 
import App from './App'


render(<App />, document.body)





 
 
// get()


// document.querySelector('#next').addEventListener('click',ev=>{
//   get()
// })


// fetch('https://dog.ceo/api/breeds/image/random').then(res=>res.json()).then(res=>{
//  document.querySelector('img').src = res.message
// })