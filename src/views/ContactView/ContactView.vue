<template>
<section class="contact-page">
    <animated-title firstLine="Contact"></animated-title>
    <contact-form></contact-form>
</section>
</template>

<script>
import ContactForm from '@/components/ui/ContactForm/ContactForm.vue';

export default {
    components: {
        ContactForm
    }
}
</script>

<style lang="scss" scoped>
@import 'ContactView.scss'
</style>
