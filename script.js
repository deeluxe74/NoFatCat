// Tout les Elements

const submit = document.getElementById('submit');
const weight = document.getElementById('poid');
const years = document.getElementById('age');
const inCat = document.getElementById('Intérieur');
const outCat = document.getElementById('Libre');
const catResult = document.getElementById('catResult');
const txtResult = document.getElementById('txtResult');
const happyCat = document.getElementById('happyCat');
const happyImg = document.getElementById('happyImg');


// Récuperation de donner
submit.addEventListener('click', e => {
// Si une lettre et entrer seul ou avec chiffre  
if (isNaN(weight.value) || isNaN(years.value)){
    alert("Vous avez entrer autre chose qu'un chiffre")
    
// si la chaine n'est que des chiffres  
}else {
if (inCat.checked == true && outCat.checked == false || inCat.checked == false && outCat.checked == true) {
    // Calcul du nombre de calorie par Kilos
    calcKlc();
    const currKlc = calcKlc()*weight.value;

    // Vérification si le chat et sénior et ajustement
    if (years.value >= 10) {
      // si le chat et en dessus de 10 ans
      const grDay = seniorCat(currKlc)
      console.log(`Le nombre de gramme (senior) et : ${(grDay/300)*100}`);
      catResult.innerHTML=`${Math.round((grDay/300)*100)} /Gr Par Jour`
        
    }else {
      // si le chat et en dessous de 10 ans
      console.log(`Le nombre de gramme (junior) et : ${Math.round((currKlc/300)*100)}`);
      catResult.innerHTML=`${Math.round((currKlc/300)*100)} /Gr <br> Par Jour`
    }
    
    // Si réussite des résultats
     // Clear de la page
     document.getElementById('allData').innerHTML="";
     document.getElementById('sub').innerHTML="";
     
     
     // Remonter en haut de page
     window.scrollTo(0, 0);
     // Afficher nouvelle donnés
     catResult.style.display='block';
     happyCat.style.display='block';
     txtResult.style.display='block';
     happyImg.style.display='block';
     
     // Remplacement fake par les réels
     

}else {
   // Mauvais check des cases (peut importe le choix : reset-auto)
   outCat.checked =false;
   inCat.checked =false;
   alert('Vous avez mal cocher les cases')
} 

}
})



// Fonction calcul klc par rapport au poid et l'age

const calcKlc = () => {
    let klc;
    if (inCat.checked == true && outCat.checked == false) {
        klc = 50;
     
    }else if (outCat.checked == true && inCat.checked == false) { 
        klc = 55;

    }return klc;
};


const seniorCat = (currKlc) => {
    if (years.value >= 10){ 
        // Obtien 10% de la quantité
        const res = currKlc*0.10;
        // Je retire 10% de sa nourriture
        const croquetteGr = (currKlc-res)

        // Retourne Nombre de calorie
        return croquetteGr;
    }
};












