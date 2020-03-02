<template>
  <div class="container">

    <transition name="swap" mode="out-in" appear>
      <!-- Page d'accueil App non lancer -->
      <div class="elem" v-if="start" key="mainApp">
        <app-home :start="false"></app-home>          
        <button type="button" class="btn btn-outline-success btn-lg" @click="startApp">Let's Go</button>
      </div>

      <!-- Formulaire sur start de l'app -->
      <div class="elem" v-else key="formApp">
        <app-cat></app-cat>
      </div>
    </transition>
  
  </div>
</template>

<script>
import Home from './Home.vue';
import Cat from './components/Cat.vue';

export default {
  data () {
    return {
      start: true
      
    }
  },
  methods: {
    startApp() {
      this.start = false ;
    }
  },
  components: {
    appHome : Home,
    appCat : Cat
  }
 
}
</script>

<style>
body {
  background-color: rgba(0, 0, 0, 0.219);
  font-family: 'Luckiest Guy', cursive;
  font-size: 50px;
}
.elem {
  text-align: center;
  
  
}
button {
    margin-top: 30px;
    width: 300px;
    height: 100px;
    background-color: rgba(4, 160, 4, 0.100);
}

/*Animation du swap Accueil */
.swap-enter-active {
 animation: swap-in 1.2s ease-out forwards;

}
.swap-leave-active {
  animation: swap-out 1.2s ease-out forwards;

}
@keyframes swap-in {
  from {
    transform: translateY(-800px);    
  }
  to {   
    transform: translateY(0px)
  }
}

@keyframes swap-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-800px);
  }
}
/*Animation du swap form to res */

.translate-enter-active {
 animation: rotate-out 1s ease-in forwards;

}
.translate-leave-active {
  animation: rotate-in 1s ease-in forwards;

}

@keyframes rotate-in {
  from {
    transform: rotateY(0deg);    
  }
  to {   
    transform: rotateY(90deg)
  }
}

@keyframes rotate-out {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}


</style>
