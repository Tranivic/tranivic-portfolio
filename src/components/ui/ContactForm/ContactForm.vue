<template>
<transition name="fade">
    <form v-if="!postResponse" class="contact-form" @submit.prevent="submitMessage">
        <input @keypress="preventInputInvalid($event)" @focus="cleanError" :class="{ error: !!name.err }" v-model.trim="name.val" name="name" type="text" placeholder="Name" />
        <label v-if="!!name.err" for="name">{{ name.err }}</label>
        <input @focus="cleanError" :class="{ error: !!email.err }" v-model.trim="email.val" name="email" placeholder="Email" />
        <label v-if="!!email.err" for="email">{{ email.err }}</label>
        <textarea @keypress="preventInputInvalid($event)" @focus="cleanError" :class="{ error: !!message.err }" v-model.trim="message.val" rows="6" placeholder="What's on your mind?" name="message"></textarea>
        <label v-if="!!message.err" for="message">{{ message.err }}</label>
        <main-button type="submit" color="black">Send</main-button>
    </form>
    <div v-else class="response-container">
        <h1>{{ postResponse }} </h1>
    </div>
</transition>
</template>

<script>
export default {
    data() {
        return {
            formIsValid: false,
            postResponse: null,
            name: {
                val: '',
                err: '',
            },
            email: {
                val: '',
                err: '',
            },
            message: {
                val: '',
                err: '',
            },
        };
    },
    methods: {
        async submitMessage() {
            this.checkValidity();
            if (this.formIsValid) {
                const newMessage = {
                    name: this.name.val,
                    email: this.email.val,
                    message: this.message.val,
                };
                this.postResponse = await this.$store.dispatch(
                    'postMessage',
                    newMessage
                );
                this.name.val = ''
                this.email.val = ''
                this.message.val = ''
            }
        },
        checkValidity() {
            let isValid = true;
            if (!this.name.val) {
                this.name.err = 'Name is required';
                isValid = false;
            } else {
                this.name.err = '';
            }
            if (!this.email.val) {
                this.email.err = 'Email is required';
                isValid = false;
            } else if (
                !this.email.val.includes('@') ||
                !this.email.val.includes('.')
            ) {
                this.email.err = 'Email is invalid';
                isValid = false;
            } else {
                this.email.err = '';
            }
            if (!this.message.val) {
                this.message.err = 'Message is required';
                isValid = false;
            } else {
                this.message.err = '';
            }
            this.formIsValid = isValid;
        },
        cleanError(e) {
            this.$data[e.target.name].err = '';
        },
        preventInputInvalid(e) {
            var regex = /^[a-zA-Z ]*$/;
            const inputIsValide = regex.test(e.key)
            if (!inputIsValide) {
                e.preventDefault();
            }
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'ContactForm.scss';
</style>
