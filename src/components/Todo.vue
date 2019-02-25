<template>
    <div class="card col-md-6 offset-md-3 mb-3">
           <div class="card-body">
           {{ todo | capitalize }}
                <i class="far fa-trash-alt" @click="removeTodo({ value })"></i>
           </div>
    </div>
</template>
<script>

    import { mapMutations } from 'vuex';

    export default {
        name: 'Todo',
        props: {
            todo: String,
            value: Number
        },
        methods: {
            ...mapMutations(['removeTodo'])
        },
        filters: {
            capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>
<style scoped>
    i {
        cursor: pointer;
    }

</style>