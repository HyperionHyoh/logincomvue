<template>

  <v-card>
    <v-toolbar
      flat
      color="purple"
      dark>
      <v-toolbar-title>Olá </v-toolbar-title> 

     <div>
     <v-btn
        class="ma-10"
        color="red"
        dark
        @click="login"
      >
        <v-icon dark>
          mdi-logout
        </v-icon>
      </v-btn>
     </div>

    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        Dados pessoais
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        Segurança
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-btn @click="obterUsuarios" size="lg" class="success">Obter Usuários</v-btn>
            <p>

              <v-list          
                subheader
                three-line
              >
                <v-list-item v-for="(usuario, id) in usuarios" :key="id">
                  <v-list-item-content >
                    <strong>Nome: </strong>{{usuario.nome}}<br>
                    <strong>E-mail: </strong>{{usuario.email}}<br>
                    <strong>ID: </strong>{{id}}<br>
                    <v-btn class="warning" size="lg" @click="carregar(id)">Carregar</v-btn>
                    <v-btn class="error" size="lg" @click="excluir(id)" >Excluir</v-btn>
                  </v-list-item-content>
                </v-list-item>

              </v-list>
              
            </p>

            
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      
    </v-tabs>
  </v-card>
</template>

<script>
  export default {
    name:'Logado',
  data(){
    return{
      mensagens: [],
			usuarios:[],
			id: null,
			usuario:{
				nome: '',
				email: ''
			}
    }
  },

  methods: {
	login: function(){
		this.$router.replace("login");
	},


  limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
			this.obterUsuarios()
		},
	carregar(id){
		this.id = id
		this.usuario = {...this.usuarios[id]}
	},
	excluir(id){
		this.$http.delete(`/usuarios/${id}.json`)
		.then(() => this.limpar(), 
			this.mensagens.push({
			texto:'Cadastro Excluído',
			tipo:'warning',
			
		}))
		//this.obterUsuarios()
		/*.catch(err => {
			this.mensagens.push({
				texto: 'Problema ao excluir!',
				tipo: 'danger'
			})
		})*/
			
		},
		obterUsuarios(){
			this.$http.get('usuarios.json').then(res =>{
				this.usuarios=res.data
				
			})
			
		},

  }
}

  
</script>