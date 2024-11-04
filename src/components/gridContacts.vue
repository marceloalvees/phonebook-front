<template>
    <div>
        <div class="input-container">
            <FloatLabel>
                <InputText id="over_label" v-model="newContact.name" />
                <label for="over_label">Nome</label>
            </FloatLabel>

            <FloatLabel variant="in">
                <InputText id="in_label" v-model="newContact.phone" variant="filled" />
                <label for="in_label">Telefone</label>
            </FloatLabel>

            <FloatLabel variant="on">
                <InputText id="on_label" v-model="newContact.email" />
                <label for="on_label">Email</label>
            </FloatLabel>
            <Button icon="pi pi-plus" class="mr-2" severity="secondary" text @click="addContact" />
            <Button label="Save" icon="pi pi-check" iconPos="right" @click="saveContacts" />
        </div>

        <DataTable :value="contacts" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="phone" header="Phone" style="width: 25%"></Column>
            <Column field="email" header="Email" style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script>
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import { createContact } from '../services/api';

export default {
    name: 'GridContacts',
    components: {
        Button,
        DataTable,
        Column,
        FloatLabel,
        InputText
    },
    data() {
        return {
            newContact: {
                name: '',
                phone: '',
                email: ''
            },
            contacts: []
        };
    },
    methods: {
        showSuccess() {
            this.$toast.add({ severity: 'success', summary: 'Contatos Salvos', detail: 'Sucesso' });
        },
        showError() {
            this.$toast.add({ severity: 'error', summary: 'Erro ao salvar contatos', detail: 'Tente novamente' });
        },
        addContact() {
            if (this.newContact.name && this.newContact.phone && this.newContact.email) {
                this.contacts.push({ ...this.newContact });
                this.newContact.name = '';
                this.newContact.phone = '';
                this.newContact.email = '';
            } else {
                alert('Todos os campos são obrigatórios');
            }
        },
        saveContacts() {
            let contactData = [];
            this.contacts.forEach(contact => {
                contactData.push({
                    userId: 2,
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email
                });
            });
            createContact(contactData)
                .then(() => {
                    this.showSuccess();
                })
                .catch(() => {
                    this.showError();
                });
        }
    }
};
</script>

<style scoped>
.input-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
}

.input-container > * {
    flex: 1 1 calc(33.333% - 1rem);
    min-width: 200px;
}

.button-container {
    display: flex;
    gap: 1rem;
}
</style>