<template>
  <div class="align">
      <h1 class="appTitle"><p>Welcom in</p>
          
          <span class="badge badge-danger">NoFatCat</span></h1>
    
        <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>  
        <br>

       

  </div>
</template>

<script>

export default {
   props: ['start'],
   
   
}
</script>

<style scoped>
.appTitle {
    font-family: 'Carter One', cursive;
    font-size: 75px;
    word-spacing: 15px;
    letter-spacing: 7px;
}

span {
    font-family: 'Luckiest Guy', cursive;
    font-size: 83px;
    letter-spacing: inherit;
    word-spacing: inherit;
}
p {
    margin-bottom: 30px;
}
.align{
  margin-top: 260px;
}


</style>