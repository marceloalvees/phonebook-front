<template>
    <div class="card-container">
        <Card class="custom-card" style="width: 50rem;overflow: hidden">
            <template #header>
                <img alt="home" src="../assets/home.jpg" style="width: 50rem;" />
            </template>
            <template #title>Phonebook</template>
            <template #subtitle>Sua Nova Agenda Telefonica</template>
            <template #content>
                    <InputGroup class="input-group">
                        <InputGroupAddon>
                            <i class="pi pi-user"></i>
                        </InputGroupAddon>
                        <InputText v-model="email" placeholder="Email" />
                    </InputGroup>
                    <InputGroup class="input-group">
                        <InputGroupAddon>
                            <i class="pi pi-user"></i>
                        </InputGroupAddon>
                        <InputText v-model="password" placeholder="Password" />
                    </InputGroup>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button label="Cadastre-se" severity="secondary" outlined class="w-full" @click="handleSingIn" />
                    <Button label="login-se" class="w-full"  @click="handleLogin"/>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { createUser } from '../services/api';


export default {
    name: 'TheLogin',
    components: {
        InputGroup,
        InputGroupAddon,
        InputText,
        Card,
        Button

    },
    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            gender: ''
        };
    },
    methods: {
        handleSingIn() {
            this.$router.push('/');
        },
        handleLogin() {
        const userData = {
            email: this.email,
            password: this.password
        };
        createUser(userData)
            .then(response => {
            this.$router.push('/list');
            console.log('Usuário criado com sucesso:', response);
            })
            .catch(error => {
            console.error('Erro ao conectar-se à API:', error);
            });
    }
    }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.input-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.custom-card {
  border: 2px solid #ccc;
  background-color: #ddf0e4;
}
.input-group {
  margin-bottom: 1rem;
}
.logo_Login {
    width: 20px;
    height: 10px;
    display: block;
    margin: 0 auto;
}
.login {
    max-width: 300px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login h1 {
    text-align: center;
}

.login div {
    margin-bottom: 1em;
}

.login label {
    display: block;
    margin-bottom: 0.5em;
}

.login input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}

.login button {
    width: 100%;
    padding: 0.7em;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login button:hover {
    background-color: #0056b3;
}
</style>