<template>
	<div>
		<v-row>
			<v-col cols="12" md="6">
				<v-card color="	#DDA0DD" class="primary--text mx-auto card-login" max-width="400" elevation="0" outlined>
        
					<v-card-title class="text-h5 text-center py-10" >
						<img src="#" alt="" width="100">	
						<v-row dense>
							<v-spacer></v-spacer>
							
							<v-spacer></v-spacer>
						</v-row>
					</v-card-title>

					<v-card-text>
                        <div class=" text-center">
                            Olá Visitante<br>
                           
                        </div>
							<v-row dense>
								<v-col col='12' sm='8' offset-sm='2'>
									<v-text-field label="E-mail" 
										id="input-user"																	
										outlined dense	
										v-model="email"								
										>
										
									</v-text-field>
								</v-col>
							</v-row>
							<v-row dense>
								<v-col col='12' sm='8' offset-sm='2'>
									<v-text-field label="Senha" 
										v-model="senha"
										type='password'  
										outlined dense
										>
										
									</v-text-field>
								</v-col>
							</v-row>
							<v-row dense>
								<v-col col='12' sm='8' offset-sm='2' class="text-center mb-4">
									<v-btn class="purple--text" type="submit" elevation='0' @click="login">Logar</v-btn>
								</v-col>
								
							</v-row>
						
					</v-card-text>
				</v-card>				
			</v-col>

			<v-divider vertical v-if="$vuetify.breakpoint.mdAndUp"></v-divider>

			<v-col cols="12" md="6">
				<v-card elevation='0' >
					<v-card-title class="text-h5">
						Seja bem vindo
					</v-card-title>
					<v-card-text>
						<div> Utilize seu cpf e senha para realizar o login </div>
                        <br>
						<div class="instrucoes-login">
                            <h3>Não tem um cadastro? Clique no botão abaixo e cadastre-se!</h3>
						</div>
                        <br>

                        <div id="cadastro"><Cadastro/></div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>


	</div>
</template>

<script>
import Cadastro from '../components/Cadastro.vue';
import firebase from "firebase"


export default {
	name: 'Login',
    components:{
    Cadastro
        
  },
	data(){
		return {
			nome:"",
			id: null,
			usuario:{
				email:"",
				senha:""
			}
			
			
		}
	},

	methods: {
		logado: function(){
			this.$router.replace("logado");
		},

		login: function(){
			firebase.auth()
			.signInWithEmailAndPassword(this.email, this.senha)
			.then(
				//this.$router.replace("logado"),
				
				user => {
					let id = this.id
					console.log(id)
					console.log(user.data)
					this.logado()
				},
				err => {
					alert(err);
				}
			)
		}
	}
	
	

}
</script>
