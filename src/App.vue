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
        <el-table :rows="rows" :structure="structure" :detailed="true" @row-clicked="handleRowClicked">
            <template v-slot:link="slotProps">
                <a @click.stop="handleClick" href="#">Click me!</a>
            </template>
        </el-table>
    </div>
</template>

<script>
import ElTable from './components/table.vue'

export default {
    name: 'app',

    components: { ElTable },

    methods: {
        handleClick() {
            alert('Clicked on slot content');
        },
        handleRowClicked(id) {
            alert('Clicked on row with id: ' + id);
        }
    },

    data: () => ({
        rows: [
            { id: 1, first_name: 'Alexander', last_name: 'Salamander', email: 'alexander@salamander.be', active: true, labels: ['label 1'], registered: '2019-01-08' },
            { id: 2, first_name: 'Mr.', last_name: 'Salamander', email: 'mr@salamander.be', active: false, labels: ['label 1', 'label 2', 'label 3'], registered: '2019-01-08' },
            { id: 3, first_name: 'Mr.', last_name: 'Baldwin', email: 'baldwin@salamander.be', active: false, labels: ['label 1', 'label 2'], registered: '2019-01-08' },
            { id: 4, first_name: 'Alexander', last_name: 'Salamander', email: 'alexander@salamander.be', active: true, labels: ['label 1'], registered: '2019-01-08' },
            { id: 5, first_name: 'Mr.', last_name: 'Salamander', email: 'mr@salamander.be', active: false, labels: ['label 1', 'label 2', 'label 3'], registered: '2019-01-08' },
            { id: 6, first_name: 'Mr.', last_name: 'Baldwin', email: 'baldwin@salamander.be', active: false, labels: ['label 1', 'label 2'], registered: '2019-01-08' },
            { id: 7, first_name: 'Alexander', last_name: 'Salamander', email: 'alexander@salamander.be', active: true, labels: ['label 1'], registered: '2019-01-08' },
            { id: 8, first_name: 'Mr.', last_name: 'Salamander', email: 'mr@salamander.be', active: false, labels: ['label 1', 'label 2', 'label 3'], registered: '2019-01-08' },
            { id: 9, first_name: 'Mr.', last_name: 'Baldwin', email: 'baldwin@salamander.be', active: false, labels: ['label 1', 'label 2'], registered: '2019-01-08' },
            { id: 10, first_name: 'Alexander', last_name: 'Salamander', email: 'alexander@salamander.be', active: true, labels: ['label 1'], registered: '2019-01-08' },
            { id: 11, first_name: 'Mr.', last_name: 'Salamander', email: 'mr@salamander.be', active: false, labels: ['label 1', 'label 2', 'label 3'], registered: '2019-01-08' },
            { id: 12, first_name: 'Mr.', last_name: 'Baldwin', email: 'baldwin@salamander.be', active: false, labels: ['label 1', 'label 2'], registered: '2019-01-08' },
        ],
        structure: [
            { visible: true, label: null, type: 'select', sortable: false },
            { visible: true, label: 'User', type: 'user', sortable: true },
            { visible: true, label: 'Email', type: 'text', key: 'email', sortable: true },
            { visible: true, label: 'Active.', type: 'boolean', key: 'active', sortable: true, size: 'xsmall' },
            { visible: true, label: 'Labels.', type: 'labels', key: 'labels', sortable: true, size: 'normal' },
            { visible: true, label: 'Registered', type: 'date', key: 'registered', sortable: true, size: 'small' },
            { visible: true, label: 'Link', type: 'slot', key: 'link', size: 'normal' },
        ]
    })
}
</script>
