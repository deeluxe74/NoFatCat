<template>
    <div>
         <div class="align">
                <br>
                <h1>{{objCat.name}}</h1>
                <hr>

                <div class="alert alert-success">{{ objCat.Qcroquette }} Gr / Jour 
                    <br>
                    <p>{{ Math.round(objCat.Qcroquette / calcMeal()) }} gr/ Portion(x{{objCat.numMeal}})</p>
                  <span class="badge badge-info">Info</span>
                <br>
                
                <div class="alert alert-info">Certains chats ne savent pas se rationner, 
                  il est donc important de diviser ca ration journalière au minimun /3. 
                  Afin de mieux le rationner sur toute la journée. 
                </div>   
                </div>      
            </div>            
        
        
        <transition name="comingUp" appear>
                  
          <div class="alert alert-danger" role="alert" v-if="on">
            Il faut donc réduire la quantité, pour votre chat la quantité journalière est donc :<br> <span style="color:rgba(167, 33, 100, 0.932);">{{ Math.round(objCat.steriCroquette) }}
            /Gr par Jour !</span>
          </div>
        </transition>
        <button class="btn btn-danger" @click="calcSteri">Mon Chat est stérilisée</button>
        <br>
        
    </div>
</template>

<script>

export default {
    data(){
       return{
        on: false
       }
  },
  methods: {
    calcSteri() {
      let steriCroquette = this.objCat.Qcroquette;
      if (this.objCat.inOut == 'inside'){
       steriCroquette = steriCroquette / 1.2;
      }
      else {
        steriCroquette = steriCroquette / 1.4;
      }
      this.objCat.steriCroquette = steriCroquette;
      this.on = !this.on;
    },
    calcMeal(){
      if (this.objCat.numMeal <= 6){

        return this.objCat.numMeal;
      }else {    
        
        return this.objCat.numMeal = 1;
      }
    }
  },
  props: ['objCat']
}
</script>

<style scoped>
.btn-danger {
  box-shadow: 2px 5px 3px rgba(88, 88, 88, 0.719);
  margin-bottom: 10px;
  margin-top: 0;
  color: rgba(255, 255, 255, 0.87);
  position: relative;
  left: -29%;
  width: auto;
  font-family: 'CarterOne' ,cursive;
  font-size: 20px;
  font-weight: 800;

}

h1 {
    font-size: 110px;
    color: rgba(167, 33, 100, 0.932);
    letter-spacing: 9px;
    text-shadow: 6px 4px 3px rgba(0,0,0,0.75);
    
}
hr {
  border:none;
  height: 10px;
 	width: 90%;
	height: 20px;
	margin-top: 0;
	border-bottom: 0px solid #1f1209;
	
}

.alert-success {  
    padding: 3% 0;
    width: 80%;
    margin: 0 10%;
    background-color: rgb(226, 226, 226);
    color: rgba(163, 44, 103, 0.911);
    border: 0px;
}
.alert-info {
    background-color: rgba(23, 163, 184, 0.377);
    border: 0;
    width: 80%;
    margin: 0 10%;
    font-size: 30px;
    color:black;
    font-family: 'CarterOne' ,cursive;
    font-weight: 900;
    
}

.alert-danger {
  font-size: 30px;
  color: black;
  margin-top: 1%;
}
p {
    font-size: 35px;
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
}


/* Animation page Swap */
.translate-enter-active {
 animation: rotate-in 1s ease-in forwards;

}
.translate-leave-active {
  animation: rotate-out 1s ease-in forwards;

}
@keyframes rotate-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@keyframes rotate-out {
  from {
    transform: rotateY(90deg);    
  }
  to {   
    transform: rotateY(0deg)
  }
}

/* Animation de l'info stérilisé */
.comingUp-enter-active {
 animation: comingIn  1s ease-in forwards;

}
.comingUp-leave-active {
  animation: comingOut 1s ease-out forwards;

}
@keyframes comingIn {
  from {
    transform: translateY(80px);
    opacity: 0;
  }
  to {
   
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes comingOut {
  from {
    transform: translateY(0);   
    opacity: 1; 
  }
  to {   
    transform: translateY(80px);
    opacity: 0;
  }
}


</style>