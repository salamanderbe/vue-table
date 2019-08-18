<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:400,600,700");

body,
html {
    font-family: "Lato", sans-serif;
    background: #f9fafb;
    margin: 0;
}
html {
    box-sizing: border-box;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}
</style>

<template>
    <div id="app" style="padding: 100px;">
        <el-table :rows="rows" :structure="structure"></el-table>
    </div>
</template>

<script>
import ElTable from './components/table.vue'

export default {
    name: 'app',

    components: { ElTable },

    data: () => ({
        rows: [
            { first_name: 'Alexander', last_name: 'Salamander', email: 'alexander@salamander.be', active: true, labels: ['label 1'], registered: '2019-01-08' },
            { first_name: 'Mr.', last_name: 'Salamander', email: 'mr@salamander.be', active: false, labels: ['label 1', 'label 2', 'label 3'], registered: '2019-01-08' },
            { first_name: 'Mr.', last_name: 'Baldwin', email: 'baldwin@salamander.be', active: false, labels: ['label 1', 'label 2'], registered: '2019-01-08' },
        ],
        structure: [
            { visible: true, label: null, type: 'select', sortable: false },
            { visible: true, label: 'User', type: 'user', sortable: true },
            { visible: true, label: 'Email', type: 'text', key: 'email', sortable: true },
            { visible: true, label: 'Active.', type: 'boolean', key: 'active', sortable: true, size: 'xsmall' },
            { visible: true, label: 'Labels.', type: 'labels', key: 'labels', sortable: true, size: 'normal' },
            { visible: true, label: 'Registered', type: 'date', key: 'registered', sortable: true, size: 'small' },
        ]
    })
}
</script>
