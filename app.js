const form=document.querySelector('.add-form');
const liste=document.querySelector('.todos');
function temlateOlustur(yapilacak){
    let html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${yapilacak}</span>
                <i class="far fa-trash-alt delete"></i>
            
            </li>`;
            liste.innerHTML+=html;
}
form.addEventListener('submit',e=>{
    e.preventDefault();
    const yapilacak=form.add.value.trim();//trim() boşlukları temizler
    //console.log(yapilacak);
    if(yapilacak.length){
        form.reset();
        temlateOlustur(yapilacak);
    }



   
})
