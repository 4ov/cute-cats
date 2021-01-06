/**@jsx h */
import {h} from 'preact'

import {useEffect, useState} from 'preact/hooks'

import defaultImg from './load.gif'


async function nextImg(){
    const img = await fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()).then(d=>d[0].url)
    return img    
 }




export default () => {
    const [loading, setLoading] = useState(true)
    const [currImg, setCurrImg] = useState('')
    useEffect(()=>{
        nextImg().then(img=>{
            setCurrImg(img)
        })
    }, [])
    
    
    
    return(<div>
        <img src={defaultImg} style={{
            display : (loading) ?  'unset' : 'none',
            transition : '350ms'
        }} />
        <img src={currImg} style={{
            display : (currImg && !loading) ?  'unset' : 'none',
            transition : '350ms'
        }}
        onLoad={v=>{
            setLoading(false)
        }}
        />
        <span class="next" id="next" 
        onClick={v=>{
            setLoading(true)
            nextImg().then(img=>{
                setCurrImg(img)
            })
        }}>next</span>
      </div>)
}
