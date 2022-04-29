<template>
  <v-app>
    <navbar/>
      <v-main class="main">
          <router-link to="/login">Login</router-link> |
          <router-link to="/logado">logado</router-link> 
        <v-container>
          
         
          <router-view/>
        </v-container>
      </v-main>
    <rodape/>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';
import rodape from './components/rodape.vue'
//import Login from './views/Login.vue'
export default {
  name: 'App',
  components:{
    rodape,
    navbar,
    //Login
  },
  data: () => ({
    //
  }),
};
</script>
