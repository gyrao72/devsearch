
const searchForm=document.getElementById('searchForm');
const pageLinks=document.getElementsByClassName('page-link')

if(searchForm){
    for(let i=0;i<pageLinks.length;i++){
        pageLinks[i].addEventListener('click',function(e){
            e.preventDefault()
            const page=this.dataset.page;
            
            searchForm.innerHTML+=`<input value=${page} name="page" hidden>`
            searchForm.submit()
        })
    }
}




let tags=document.getElementsByClassName('project-tag');
for(let i=0;i<tags.length;i++){
    tags[i].addEventListener('click',(e)=>{
        console.log(`${i} Clicked`)
        let tagId=e.target.dataset.tag;
        let projectId=e.target.dataset.project;

        fetch('http://localhost:3000/api/remove-tag/',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'tag':tagId,'project':projectId})
        })
        .then(response =>{
            response.json()
        })
        .then(data =>{
            e.target.remove()
        })
    })
}