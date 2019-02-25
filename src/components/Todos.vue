<template>
    <div class="row">
        <Todo v-for="(todo, index) in todos" :key="index" :value="index" :todo="todo"/>
    </div>
</template>
<script>
    import Todo from './Todo.vue';
    import { mapState } from 'vuex';

    export default {
        name: "Todos",
        computed: mapState(['todos']),
        props: {
        },
        components: {
            Todo
        }
    }
</script>