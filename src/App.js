import React from 'react'
import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'
import Searchbar from './components/Searchbar'
import { movieData, genreArr } from './data'
import {handleCancel } from './utils'
import {nanoid} from 'nanoid'
import './styles.css'

export default function App() {
  const [list,setList]=React.useState(movieData)
  const [item,setItem]=React.useState({id:0,title:'',    imageUrl:'',    description:'',    genre:''})
  const [search,setSearch] = React.useState({title:'',genre:'All genres'})
  const [movieGenre,setMovieGenre] = React.useState(genreArr.map(item=>{
    return <option value={item} id={item} key={item}>{item}</option>
  }))
  
  function handleAddButton(){
    setItem({id:0,title:'',    imageUrl:'',    description:'',    genre:''})
    document.getElementById('add-card').classList.remove('hidden')
 }

  function handleTitleSearch(event){
    setSearch(prevSearch=>{
      return {...prevSearch,title:event.target.value}
    })
    let searchTitle = event.target.value.toLowerCase();
    let allMovies= list.map(item => {
      return {title:item.title.toLowerCase(),
              genre:item.genre        
      }
    })
    for (let i=0; i<allMovies.length;i++){
      if(allMovies[i].genre===search.genre || search.genre==='All genres'){
        const currentTitle=allMovies[i].title
        if(currentTitle.includes(searchTitle)){
            document.getElementById(currentTitle).style.display="block"
        }
        else{
            document.getElementById(currentTitle).style.display="none"
        }
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

function handleGenreSearch(event){
  setSearch(prevSearch => {
    return {...prevSearch,genre:event.target.value}
  })
  let searchGenre=event.target.value
  let allMovies= list.map(item => {
    return {title:item.title.toLowerCase(),
            genre:item.genre        
    }
  })
  
  for (let i=0; i<allMovies.length;i++){
    if(allMovies[i].title.includes(search.title)){
      const currentTitle=allMovies[i].title
      if(searchGenre !== 'All genres'){
        if(allMovies[i].genre===searchGenre){
          document.getElementById(currentTitle).style.display="block"
        }
        else{
          document.getElementById(currentTitle).style.display="none"
        }
      } else {
        document.getElementById(currentTitle).style.display="block"
      }
      
    }
    
  }
}

function handleImageUpload(event){
  
  const {name}=event.target
  const url = URL.createObjectURL(event.target.files[0])
  
  setItem(prevState=>{
    return {
      ...prevState,
      [name]:url
    }
  })
    
}

function handleAddMovie(item){
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
    <div className='container'>
      <Searchbar handleAddButton={handleAddButton} handleTitleSearch={handleTitleSearch} handleGenreSearch={handleGenreSearch} movieGenre={movieGenre}/>
      
      <MovieList list={list} item={item} movieGenre={movieGenre} setList={setList} setItem={setItem} handleDescriptionChange={handleDescriptionChange} handleTitleChange={handleTitleChange} handleGenreChange={handleGenreChange} handleImageUpload={handleImageUpload}/>
      
      
      <div id='add-card' className='hidden'>
        <MovieCard url={item.imageUrl} movieGenre={movieGenre} handleCancel={()=>handleCancel('add-card')} handleDelete={()=>handleCancel('add-card')} handleGenreChange={handleGenreChange} handleSave={()=>handleAddMovie(item)} handleDescriptionChange={handleDescriptionChange} handleTitleChange={handleTitleChange} handleImageUpload={handleImageUpload}/>
      </div>
      
    </div>
  )
}
