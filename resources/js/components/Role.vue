<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">Role Management</div>

            <div class="card-body">
                Role Component <span class="badge badge-warning">{{test}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Role",

        computed: {
            test() {
                return this.$store.getters.test
            },
        }
    }

</script>

<style scoped>

</style>
