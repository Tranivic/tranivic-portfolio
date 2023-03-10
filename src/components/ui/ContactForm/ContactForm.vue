<template>
<form class="contact-form" @submit.prevent="submitMessage">
<input name="name" type="text" placeholder="Name">
<input name="e-mail" type="e-mail" placeholder="Email">
<textarea rows="6" placeholder="What's on your mind?" name="message"></textarea>
<main-button type="submit" color="black">Send</main-button>
</form>
</template>

<script>
export default {
methods: {
    submitMessage() {
        console.log('Teste')
    }
},
}
</script>

<style lang="scss" scoped>
@import 'ContactForm.scss'
</style>
