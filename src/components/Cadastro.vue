<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Não possuo cadastro
        </v-btn>
      </template>
      <v-card>
        <v-alert
          dismissible
          dense
          text
          type="success"
        >
          I'm a dense alert with the <strong>text</strong> prop and a <strong>type</strong> of success
        </v-alert>
        <v-card-title>
          <span class="text-h5">Formulário de cadastro</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Nome*"
                  
                  v-model="usuario.nome"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="CPF*"
                  v-model="usuario.cpf"
                  hint="Digite seu cpf"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="PIS*"
                  v-model="usuario.pis"
                  hint="Número PIS de sua carteira de trabalho"
                  persistent-hint
                  
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  v-model="usuario.email"
                  
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  
                  label="Senha*"
                  type="Senha"
                  v-model="usuario.senha"
                  hint="Esta será sua senha de acesso"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Brasil', 'Argentina', 'Paraguai', 'China']"
                  label="Pais*"
                  v-model="usuario.pais"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Maranhão', 'Ceará', 'São Paulo', 'Bahia','Um estado estrangeiro', 'Outro estado estrangeiro']"
                  label="Estado*"
                  v-model="usuario.estado"
                  
                ></v-select>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="3"
              >
                <v-text-field
                  label="Cep*"
                  v-model="usuario.cep"
                  
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Rua*"
                  v-model="usuario.rua"
                  
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="2"
              >
                <v-text-field
                  label="Nº"
                  v-model="usuario.numero"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="12"
              >
                <v-text-field
                  label="Complemento"
                  v-model="usuario.complemento"
                  
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
          <small class="red--text">*campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="purple darken-2"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="purple darken-2"
            text
            @click="salvar"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
//import firebase from 'firebase';
  export default {
    name:'Cadastro',
    data: () => ({
      dialog: false,
      mensagens: [],
			usuarios:[],
			id: null,
			usuario:{
				nome: '',
				email: '',
        senha: ''
			}
    }),
    methods:{
    limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},

      salvar(){
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto:'Cadastro realizado com sucesso',
						tipo:'success'
					})
					
				})
			/*this.$http.post('usuarios.json', this.usuario)
				.then(() => this.limpar())*/
		},
    /*logar(){
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.usuario.nome
            })
            .then(()=>{});
        })
        .catch(err=>{
          this.error = err.message;
        })
    }*/
    }
  }
</script>