function handleCancel(id){
    document.getElementById(id).classList.add('hidden')
}
function handleAddButton(){
    document.getElementById('add-card').classList.remove('hidden')
}

export {handleCancel,handleAddButton}