<template>
    <button :type="getTypeAction" class="btn" :class="getType" @click="disparaAcao()">
        <i class="fas" :class="getIcon" style="margin-right: 5px" v-if="icon"></i>
        <slot></slot>
    </button>    
</template>

<script>
    export default {
        props: ['type', 'icon', 'submit'],
        methods: {
            disparaAcao() {
                if (this.getTypeAction === 'button') {
                    this.$emit('click', {teste: 'Teste'})
                }
            }
        },
        computed: {
            getIcon() {
                switch (this.icon) {
                    case 'save': return 'fa-save'
                    case 'delete': return 'fa-trash'
                    default: return ''
                }
            },
            getType() {
                switch (this.type) {
                    case 'primary': return 'btn-outline-primary'
                    case 'danger': return 'btn-outline-danger'
                    default: return 'btn-outline-dark';
                }
            },
            getTypeAction() {
                if (this.submit) {
                    return 'submit'
                }
                return 'button';
            }
        }
    }
</script>

<style>

</style>