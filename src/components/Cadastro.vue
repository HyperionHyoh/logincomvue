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
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="CPF*"
                  hint="Digite seu cpf"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="PIS*"
                  hint="Número PIS de sua carteira de trabalho"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Senha*"
                  type="Senha"
                  hint="Número PIS de sua carteira de trabalho"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Brasil', 'Argentina', 'Paraguai', 'China']"
                  label="Pais*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Maranhão', 'Ceará', 'São Paulo', 'Bahia','Um estado estrangeiro', 'Outro estado estrangeiro']"
                  label="Estado*"
                  required
                ></v-select>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="3"
              >
                <v-text-field
                  label="Cep*"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Rua*"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="2"
              >
                <v-text-field
                  label="Nº"
                  
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="12"
              >
                <v-text-field
                  label="Complemento"
                  
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
            @click="dialog = false"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name:'Cadastro',
    data: () => ({
      dialog: false,
    }),
  }
</script>