<template>
    <div class="card-container">
        <Card class="custom-card" style="width: 50rem;overflow: hidden">
            <template #header>
                <img alt="home" src="../assets/home.jpg" style="width: 50rem;" />
            </template>
            <template #title>Phonebook</template>
            <template #subtitle>Sua Nova Agenda Telefonica</template>
            <template #content>
                <div class="input-row">    
                <InputGroup class="input-group">
                    <InputGroupAddon>
                        <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <InputText v-model="firstName" placeholder="Nome" />
                
                </InputGroup>
                    <InputGroup class="input-group">
                        <InputGroupAddon>
                            <i class="pi pi-user"></i>
                        </InputGroupAddon>
                        <InputText v-model="lastName" placeholder="Sobrenome" />
                    </InputGroup>
                </div>

                <div class="input-row">
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
                </div>
                <InputGroup class="input-group">
                    <RadioButton v-model="gender" inputId="masculino" name="gender" value="Masculino" />
                    <label for="ingredient1">Masculino</label>
                    <RadioButton v-model="gender" inputId="feminino" name="gender" value="Feminino" />
                    <label for="ingredient2">Feminino</label>
                </InputGroup>
            </template>
            <template #footer>
                <Toast />
                <div class="flex gap-4 mt-1">
                    <Button label="Login" severity="secondary" outlined class="w-full" @click="handleLogin" />
                    <Button label="Cadastre-se" class="w-full"  @click="handleSave"/>
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
import RadioButton from 'primevue/radiobutton';
import { createUser } from '../services/api';
import Toast from 'primevue/toast';


export default {
    name: 'TheSingIn',
    components: {
        InputGroup,
        InputGroupAddon,
        InputText,
        Card,
        Button,
        RadioButton,
        Toast
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
        handleLogin() {
            this.$router.push('/login');
        },
        showSuccess() {
            this.$toast.add({ severity: 'success', summary: 'Usuario criado com Sucesso', detail: 'Sucesso' });
        },
        showError() {
            this.$toast.add({ severity: 'error', summary: 'Erro ao criar usuario', detail: 'Tente novamente' });
        },
        handleSave() {
        const userData = {
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            email: this.email,
            password: this.password
        };
        createUser(userData)
            .then(() => {
                this.showSuccess();
                this.$router.push('/login');
            })
            .catch(() => {
                this.showError();
            });
            
        },
        validateFirstName() {
            this.firstNameError = this.firstName ? '' : 'Nome é obrigatório';
        },
        validateLastName() {
            this.lastNameError = this.lastName ? '' : 'Sobrenome é obrigatório';
        },
        validateEmail() {
            this.emailError = this.email ? '' : 'Email é obrigatório';
        },
        validatePassword() {
            this.passwordError = this.password ? '' : 'Password é obrigatório';
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