<template>
<div>
    <v-app-bar  
      color="purple darken-2"
      dark
      hide-on-scroll
      
      scroll-target="#scrolling-techniques-4">
        <div class="d-flex align-center">
            <!--<v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon> -->
            <v-img alt="UNDB" class="shrink mr-2" contain style="filter: brightness(10);"
                src="#"
                transition="scale-transition" width="130" />

            <h2 v-if="!$vuetify.breakpoint.xsOnly">Cadastro de Usuário Web</h2>
        </div>

        <v-spacer></v-spacer>
        <div>
        <!--<div v-if="computedUser && computedUser.username">      -->
            <!--<span>{{computedUser.first_name}}</span>-->
            <v-btn icon text>
                <!--<v-icon>mdi-exit-run</v-icon>-->
            </v-btn>
        </div>
    
    </v-app-bar>

</div>
</template>

<script>
export default {
    name:'navbar',
    data(){
        return{
            sidebar:true
        }
    },
    methods:{
        logout(){
            this.$store.loginStore.commit('encerrar')
            this.$router.history.push({name:'login'})
        }
    },
    computed:{
        computedUser(){
            return this.$store.loginStore.getters.getUserAthenticated
        }
    }

}
</script>