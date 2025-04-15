const form=document.querySelector('.add-form');
const liste=document.querySelector('.todos');
const aramaInput=document.querySelector('.search input');
 
aramaInput.addEventListener('keyup',e=>{
    const ifade=aramaInput.value.trim().toLowerCase();//toLowerCase() metodu, stringi küçük harfe çevirir
    //console.log(ifade);
    filtreOlustur(ifade);
    });
const filtreOlustur=(ifade)=>{
   // console.log(Array.from(liste.children));
   Array.from(liste.children).filter((yapilacak)=>{
    return !yapilacak.textContent.toLowerCase().includes(ifade);
 })
}


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
    const yapilacak=form.add.value.trim().toLowerCase;//trim() boşlukları temizler
    //console.log(yapilacak);
    if(yapilacak.length){
        
        temlateOlustur(yapilacak);
        form.reset();
    }



   
});
liste.addEventListener('click',e=>{

    if(e.target.classList.contains('delete')){
        //contains() metodu, classList içinde delete var mı yok mu kontrol eder
        e.target.parentElement.remove();
    }
});
