<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">Profile</div>

            <div class="card-body">
                Profile Component <span class="badge badge-warning">{{test}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",

        mounted() {
            this.$store.commit('setTest','Vuex State Updated!')
        },

        computed: {
            test() {
                return this.$store.getters.test
            },
        }
    }
</script>

<style scoped>

</style>
