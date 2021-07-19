
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