let ad = prompt("Adınızı yazın:");
let surname = prompt("Soyadınızı yazın:");
let age = +prompt("Yaşınızı yazın:");

if(age > 18){
    alert(`${ad} ${surname} Qeydiyyatdan keçmək üçün yaşınız çoxdur!`);
} else if (age < 18 ){
    alert(`${ad} ${surname} Qeydiyyatdan keçmək üçün yaşınız azdır!`);
} else if(age === 18){
    alert(`${ad} ${surname} Sizin Qeydiyyat uğurla tamamlandı :)`);
}