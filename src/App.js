import React from 'react'
import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'
import Searchbar from './components/Searchbar'
import { handleAddButton,handleCancel } from './utils'
import {nanoid} from 'nanoid'
import './styles.css'

export default function App() {
  const [list,setList]=React.useState([{id:1,title:'Sinister',genre:'Horror',description:'abc',imageUrl:'./images/sinister.png'},{id:2,title:'Ted',genre:'Comedy',description:'abc',imageUrl:'./images/ted.png'}])
  const [item,setItem]=React.useState({id:0,title:'',    imageUrl:'',    description:'',    genre:''})
  

  function handleSearch(event){
    let searchTitle = event.target.value.toLowerCase();
    let allMovieTitles = list.map(item => item.title.toLowerCase())
    for (let i=0; i<allMovieTitles.length;i++){
        const currentTitle=allMovieTitles[i]
        if(currentTitle.includes(searchTitle)){
            document.getElementById(currentTitle).style.display="block"
        }
        else{
            document.getElementById(currentTitle).style.display="none"
        }
    }
  }

  function handleDescriptionChange(event){
    const {name,value}=event.target
    setItem(prevState=>{
        return {
          ...prevState,
          [name]:value
        }
      })
}
function handleTitleChange(event){
    const {name,value}=event.target
    setItem(prevState=>{
        return {
          ...prevState,
          [name]:value
        }
      })
}

function handleGenreChange(event){
  const {name,value}=event.target
    setItem(prevState=>{
        return {
          ...prevState,
          [name]:value
        }
      })
}

function handleAddMovie(item){
  console.log(item)
  item.id=nanoid()
  let movieExist=false;
  for(const movie of list){
    if(movie.title !== item.title){
      movieExist=true
    }
  }
  if(movieExist){
    setList(prevList => [...prevList,item])
  }
  document.getElementById('add-card').classList.add('hidden')
}

  return (
    <div>
      <Searchbar handleAddButton={handleAddButton} handleSearch={handleSearch}/>
      <MovieList list={list} item={item} setList={setList} setItem={setItem} handleDescriptionChange={handleDescriptionChange} handleTitleChange={handleTitleChange} handleGenreChange={handleGenreChange}/>
      <div id='add-card' className='hidden'>
        <MovieCard handleCancel={()=>handleCancel('add-card')} handleDelete={()=>handleCancel('add-card')} handleGenreChange={handleGenreChange} handleSave={()=>handleAddMovie(item)} handleDescriptionChange={handleDescriptionChange} handleTitleChange={handleTitleChange}/>
      </div>
      
    </div>
  )
}
