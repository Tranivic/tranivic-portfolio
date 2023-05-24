<template>
<ul class="social-media-menu">
    <li v-for="media in this.socialMedias" :key="media.name">
        <a :href="media.link" target="_blank">
            <i :class="media.iconIsBrands? 'fa-brands':'fa', media.iconName" class="interact-cursor"></i>
        </a>
    </li>
</ul>
</template>

<script>
export default {
    computed: {},
    data() {
        return {
            socialMedias: [{
                    name: 'Github',
                    link: 'https://github.com/Tranivic',
                    iconName: 'fa-github',
                    iconIsBrands: true,
                },
                {
                    name: 'Linkedin',
                    link: 'https://www.linkedin.com/in/victor-martins-t/',
                    iconName: 'fa-linkedin',
                    iconIsBrands: true,
                },
                {
                    name: 'Youtube',
                    link: 'https://www.youtube.com/channel/UCL-CI61gBpk5cMbhCZ9iwLw',
                    iconName: 'fa-youtube',
                    iconIsBrands: true,
                },
                {
                    name: 'Instagram',
                    link: 'https://www.instagram.com/victortranii/',
                    iconName: 'fa-instagram',
                    iconIsBrands: true,
                },
                {
                    name: 'Email',
                    link: 'mailto: victor.trani1@gmail.com',
                    iconName: 'fa-envelope',
                    iconIsBrands: false,
                },
                {
                    name: 'Whatsapp',
                    link: 'https://wa.me/5521987638760',
                    iconName: 'fa-whatsapp',
                    iconIsBrands: true,
                },
                {
                    name: 'Hashnode',
                    link: 'https://victortrani.hashnode.dev/',
                    iconName: 'fa-hashnode',
                    iconIsBrands: true,
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'SocialMedia.scss'
</style>
