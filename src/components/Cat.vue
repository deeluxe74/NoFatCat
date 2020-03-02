<template>
    <div>
        <span :class="[show ? headerPink : headerBlue]" >NoFatCat</span>
        <transition name="fade" mode="out-in">
        <div class="whitePage" v-if="show" key="zer">
                <form>
                    <legend class="formTitle">Do you want a Happy Cat ?</legend>

                    <label for="name">Name </label>
                    <input type="text" v-model="Cat.name">
                    <br>
                    
                    
                    <label for="Age">Age</label>                  
                    <input type="text" v-model="Cat.age">
                    <strong @click="smallCat = !smallCat" class="explainSmall">!</strong>
                    <transition name="top" type="animation">
                        <div class="alert alert-info" v-if="smallCat">Chaton de 4 mois = 0.4</div>
                    </transition>
                    <label for="Weight">Weight</label>
                    <input type="text" v-model="Cat.weight">
                    <br>

                    <fieldset>  
                        <input class="test" type="radio" value="inside" v-model="Cat.inOut">
                        <label class="radioColor" for="inside">Inside</label>

                        <input type="radio" checked="check" value="outside" v-model="Cat.inOut">
                        <label class="radioColor" for="outside">Outside</label>
                    </fieldset>                
                    
                    <div class="numMeals"><p>Number of meals per day ?</p></div>
                    
                    <select name="numberEat" v-model="Cat.numMeal" >
                        <option value="1">1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>All Time</option>
                    </select>
                    
                    <br><br>
                   
                </form>
        </div>
        
            <div v-else key="aze">
                
                <app-render :objCat="Cat"></app-render>
                 
            </div>     
        </transition>
        <button class="editBtn btn btn-primary" @click="submit" v-if="show">Let's Go</button>
    </div>
</template>

<script>
import Render from './Render.vue';


export default {
    data() {
        return {
            Cat: {
                name:'',
                age:1,
                weight:2,
                numMeal:'1',
                inOut:'outside'
            },
            smallCat: false,
            show: true,
            headerPink:'badge badge-danger headerApp',
            headerBlue:'badge badge-danger headerAppBlue'
        }
    },
    methods: {
        submit() { 
            this.calcCroquette()
            this.show = !this.show;  
        },
        calcCroquette() {
            // Base de calcul chat Actif
            const poid = this.Cat.weight
            let Qcroquette = 0;
            //Calcul en fonction du poid seulement
            switch(parseInt(poid)){
                case 1:
                    Qcroquette = 33;
                    break
                case 2 :
                    Qcroquette = 40;
                    break
                case 3 :
                    Qcroquette = 55;
                    break
                case 4 :
                    Qcroquette = 70;
                    break
                case 5 :
                    Qcroquette = 80;
                    break
                default :
                Qcroquette = 90;
            }
            this.calcAge(Qcroquette, parseFloat(this.Cat.age))          
            },

            calcAge(Qcroquette, age){
                //Si plus de 1 an
                if (age >= 1){
                    // Entre 1 an et 6 ans
                    if (age < 6){
                        Qcroquette;                        
                    }
                    // Plus de 6 ans
                    else {
                        Qcroquette = Qcroquette / 1.10;
                    }
                }
                //Moin de un an
                else {
                    console.log(age);
                    
                    if(age > 0.3 && age <= 0.5){
                        console.log('chaton de moin de 5mois');
                        
                        Qcroquette += 27;
                    }
                    else if(age > 0.5 && age < 1){
                        console.log('plus de 5 mois');
                        
                        Qcroquette += 37;
                    }
                    // Moin de 3 mois
                    else{
                        alert("Encore besoin d'être sevrer");
                        this.show = false;
                    }
                }
                this.inOrOut(Qcroquette)
            },

            inOrOut(Qcroquette) {
                // Que dedans
                if (this.Cat.inOut == 'inside'){
                    Qcroquette = Qcroquette / 1.1;
                }
                // Dehors
                else {
                    Qcroquette
                }
                //Retourne la quantité au rendu arrondie a l'entier
                this.Cat.Qcroquette = Math.round(Qcroquette);
                this.Cat.numMeal = parseInt(this.Cat.numMeal);
                
            }
    },
    components: {
        appRender: Render
    }
}
</script>

<style scoped>
.explainSmall{
    cursor: pointer;
    font-size: 40px;
    font-weight: 800;
    color: rgb(212, 22, 22);
    position: relative;
    margin-left: -27px;
    
}
.alert-info {
    top:42%;
    left:40%;
    position: absolute;
    font-size: 20px;
    font-family: 'arial', monospace;
    color: rgba(156, 6, 6, 0.644);
}
.top-enter-active {
  animation: topIn 500ms forwards ease-in;
}
.top-leave-active {
  animation: topOut 400ms forwards ease-in;
}
@keyframes topIn {
  from {
    opacity: 0;    
  }
  to {   
    opacity: 0.8;
  }
}
@keyframes topOut {
  from {
    opacity: 1;
  }
  to {  
    opacity: 0; 
  }
}

.fade-enter-active {
  animation: rotateIn 1s forwards ease-in;
}
.fade-leave-active {
  animation: rotateOut 1s forwards ease-in;
}
@keyframes rotateIn {
  from {
    transform: translateX(1200px);    
  }
  to {   
    transform: translateX(0px)
  }
}
@keyframes rotateOut {
  from {
    transform: translateX(0px);    
  }
  to {   
    transform: translateX(-1600px)
  }
}

.headerApp {
    background-color: rgb(8, 32, 36);
    color: rgba(170, 8, 89, 0.932);
}
.headerAppBlue {
    background-color: rgb(8, 32, 36);
    color: #07c6e4da;
}
span {
    margin-top: 10px;
    font-family: 'Luckiest Guy', cursive;
    font-size: 73px;
    display: flex;
    border-radius: 30px;
}
.whitePage {
    margin: 0 3%;
    margin-bottom: 50px;
    height: 1100px;
    width: 1050px;
    background-color: rgba(255, 255, 255, 0.932);
    
}
.formTitle {
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 50px;
    color: rgba(170, 8, 89, 0.932);
}
input {
    text-align: center;
    color:rgba(61, 61, 61, 0.781);
    margin-right: 20px;
    padding-top: 33px;
    font-size: 35px;
    height: 60px;
    max-width: 300px;
    background-color: inherit;
    border: 0px;
    border-bottom: 4px rgba(170, 8, 89, 0.932) dashed;
}

label {
    margin-right: 15px;
    margin-bottom: 80px;
    font-size: 40px;
}
[type="radio"]:not(:checked) {
    width: 30px;
}
[type="radio"]:checked {
    width: 40px; 
}

option {
    font-size: 35px;
}

.numMeals {
    color: rgba(170, 8, 89, 0.932);
    background-color: rgba(0, 0, 0, 0.911);
    margin-bottom: 50px;
}

.editBtn{
    position: relative;
    top: -230px;
    background-color: rgb(0, 0, 0);
    color: white;
    font-size: 50px;
}

.editBtn:hover{
    background-color: rgba(170, 8, 89, 0.932);
    font-size: 60px;
    
}

</style>