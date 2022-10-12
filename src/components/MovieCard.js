import React from 'react'


function MovieCard(props) {
    
    
  return (
    <div className='card-background'>
        <div className='column is-relative is-6'>
            <div className='card'>
                <div className='columns'>
                    <div className='column is-4 ml-5'>
                        <figure className='image is-2by3'>
                            <img src={props.url} alt='' width='160' height='256'></img>
                        </figure>
                        
                        <div className="file">
                            <label className="file-label mx-auto mt-3">
                                <input className="file-input" type="file" name="imageUrl" accept='image/png, image/jpeg, image/jpg' onChange={props.handleImageUpload}/>
                                <span className="file-cta">
                                <span className="file-label">
                                    Upload movie image
                                </span>
                                </span>
                            </label>
                        </div>
                    </div>
                    
                    <div className='column is-6'>
                        <div className="field">
                            <label className="label">Movie title</label>
                            <div className="control">
                                <input className="input" type='text' name='title' placeholder='Movie title' value={props.title} onChange={props.handleTitleChange}/>
                            </div>
                        </div>
                        {/* <input className='input' type='text' name='title' placeholder='Movie title' value={props.title} onChange={props.handleTitleChange}></input> */}
                        <div className='field'>
                            <label className='label'>Genre</label>
                            <div className='control'>
                                <div className='select'>
                                    <select id='select-genre' name='genre' onChange={props.handleGenreChange} value={props.genre}>
                                        {props.movieGenre}
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className="field">
                            <label className="label">Movie description</label>
                            <div className="control">
                                <textarea className="textarea" placeholder='Description' name='description' value={props.description} onChange={props.handleDescriptionChange}></textarea>
                            </div>
                        </div>
                        {/* <textarea className='textarea' placeholder='Description' name='description' value={props.description} onChange={props.handleDescriptionChange}></textarea> */}
                        <div className='field is-grouped'>
                            <div className='control'>
                                <button className='button is-danger' onClick={props.handleDelete}>Delete</button>
                            </div>
                            <div className='control'>
                                <button className='button' onClick={props.handleCancel}>Cancel</button>
                            </div>
                            <div className='control'>
                                <button className='button is-success' onClick={props.handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default MovieCard