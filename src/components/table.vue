<style lang="scss">
.salamander-table {
    /*
    | TABLE
    | ___________________
    */
    .table-container {
        display: flex;
        flex-wrap: wrap;
        flex-flow: column;
        border: 1px solid #e6eaee;
        overflow: auto;
    }
    .table-filter {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 8px 16px;
        height: 20px;
        overflow-y: hidden;
        overflow: auto;
    }
    .alter-table-columns {
        border-radius: 2px;
        border: 1px solid #e6eaee;
        background-color: #ffffff;
        width: 225px;
        position: absolute;
        right: 0;
        padding: 16px 4px;
        z-index: 1;
        .item {
            padding: 10px 16px;
            color: #0f3261;
            &:hover {
                background-color: rgba(15, 50, 97, 0.05);
            }
        }
    }
    .table-cell {
        &:not(.table-edit) {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        &.type-select {
            flex: 0 0 30px;
        }
        &.type-user {
            flex: 0 0 180px;
        }
        &.type-text,
        &.type-translated,
        &.type-date,
        &.size-text {
            flex: 0 0 165px;
            > div {
                width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        &.size-normal {
            flex: 0 0 150px !important;
        }
        &.size-small {
            flex: 0 0 120px !important;
        }
        &.size-xsmall {
            flex: 0 0 90px !important;
        }
        &:not(:first-child) {
            padding: 0 8px;
        }
        &:not(:first-child) {
            padding: 0 8px;
        }
        &.table-edit {
            user-select: none;
            padding-left: 0;
            padding-right: 0;
            margin-left: auto;
            position: relative;
            text-align: right;
        }
        .change-columns {
            cursor: pointer;
            margin-left: auto;
            margin-right: auto;
            color: var(--salamander-theme-icons);
            font-size: 80%;
        }
        .item {
            display: flex;
            width: 100%;
        }
    }
    .table-header {
        .table-check {
            margin-bottom: auto;
            margin-top: auto;
            margin-right: 0;
        }
    }
    .table-edit {
        .table-check {
            margin-bottom: auto;
            margin-top: auto;
            margin-right: auto;
            width: 100%;
            text-align: left;
        }
    }

    /*
    | HELPERS
    | ___________________
    */
    .small {
        font-size: 80%;
    }
    .c-pointer {
        cursor: pointer;
    }

    /*
    | ICONS
    | ___________________
    */
    .sort-icon {
        height: 8px;
        width: auto;
        margin-left: 8px;

        path {
            fill: var(--salamander-theme-icons);
        }

        .top,
        .bottom {
            opacity: 0.5;
        }
        &.asc {
            .top {
                opacity: 0;
            }
            .bottom {
                opacity: 1;
            }
        }
        &.desc {
            .top {
                opacity: 1;
            }
            .bottom {
                opacity: 0;
            }
        }
    }
    .vue-table-checkmark-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;

        &::after {
            content: "";
            display: block;
            width: 6px;
            height: 11px;
            margin-top: -4px;
            border: solid #fff;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    }
    .boolean-check {
        &.success {
            path {
                fill: var(--salamander-theme-success);
            }
        }
        &.error {
            path {
                fill: var(--salamander-theme-error);
            }
        }
    }

    /*
    | ROWS
    | ___________________
    */
    .table-row {
        width: 100%;
        padding: 0 16px;
        display: flex;
        flex-flow: row;
        &.can-hover {
            cursor: pointer;
            transition: background 0.2s;
            &:hover {
                background: #f4f6f9;
            }
        }
        &:not(:last-child) {
            position: relative;
            &:after {
                content: "";
                width: calc(100% - 32px);
                position: absolute;
                bottom: 0;
                border-bottom: 1px solid #e6eaee;
            }
        }
        .table-cell {
            display: flex;
            padding-top: 16px;
            padding-bottom: 16px;

            .avatar {
                margin: auto 16px auto 0;
            }
            .extra {
                box-shadow: -8px 0 12px rgba(0, 0, 0, 0.06);
                border-radius: 3px;
                background-color: #ffffff;
            }
            .label {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
            }
            .label ~ .extra {
                width: calc(100% - 16px - 50px);
            }

            .p-jelly {
                margin-top: auto;
                margin-bottom: auto;
                margin-right: 0;
            }
            .avatar {
                border-radius: 50%;
                border: 3px solid #fff;
                object-fit: cover;
                height: 24px;
                width: 24px;
                font-size: 8px;
                flex: none;

                &.text-avatar {
                    color: #0f3261;
                    text-align: center;
                    display: flex;
                    background: #e6ebf1;
                    font-weight: 700;
                    span {
                        margin: auto;
                    }
                }
            }
            .boolean-check {
                height: 20px;
                width: auto;
                margin-top: auto;
                margin-bottom: auto;
            }
            .settings-icon {
                height: 14px;
                width: auto;
                margin-top: auto;
                margin-bottom: auto;
                margin-left: auto;
                cursor: pointer;
            }
        }
    }
    .small {
        font-size: 80%;
    }
    .c-pointer {
        cursor: pointer;
    }
    .my-auto {
        margin-top: auto;
        margin-bottom: auto;
    }
    .cell-label {
        padding: 4px 8px;
        color: #e6ebf1;
        background: #0f3261;
        border-radius: 3px;
        font-size: 80%;
    }
    .cell-labels {
        display: flex;
        flex-flow: row;
        .label {
            font-size: 80%;
            margin-top: auto;
            margin-bottom: auto;
            background: var(--salamander-theme-primary);
            color: #e6ebf1;
            padding: 4px 8px;
            border-radius: 3px;
        }
        .label-extra {
            font-size: 80%;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: 16px;
            padding: 4px;
        }
    }
    /*
    | LIBRARIES
    | ___________________
    */
    @import "~pretty-checkbox/src/pretty-checkbox.scss";
    .p-jelly {
        margin-right: 0;
        &.text-wrap {
            .state {
                padding-left: 25px;
                .svg {
                    top: 0;
                }
                label {
                    text-indent: 0;
                    &:before,
                    &:after {
                        top: 0;
                    }
                }
            }
        }
        input:checked ~ .state.p-primary label:after,
        .salamander-table .pretty.p-toggle .state.p-primary label:after {
            background-color: var(--salamander-theme-primary) !important;
        }
    }
}
</style>

<style lang="scss">
:root {
    --salamander-theme-primary: #0f3261;
    --salamander-theme-icons: #0f3261;
    --salamander-theme-success: #95c9a3;
    --salamander-theme-warning: #ff8f00;
    --salamander-theme-error: #ff2d55;
}
</style>


<template>
    <div class="salamander-table">

        <!-- Filter -->
        <div class="table-filter">
            <div v-for="(value, index) in structure.filter((s) => s.visible )" :key="index" class="table-cell table-header" :class="['type-' + value.type, 'size-' + value.size]">
                <p-check v-if="value.type === 'select'" v-model="selected" class="p-curve p-svg p-jelly table-check" color="primary" name="check">
                    <span slot="extra" class="vue-table-checkmark-icon svg svg-icon"></span>
                </p-check>
                <span class="small c-pointer" v-else>
                    <span v-if="value.sortable" @click.prevent="order = { type: value.type , column: value.key, asc: order ? !order.asc : false }">
                        <span class="us-none">{{ value.label }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 8" class="sort-icon" :class="[order && order.column === value.key ? { asc : order.asc, desc : !order.asc } : null]">
                            <g>
                                <path class="top" fill="#0f3261" d="M4.633 5c.391 0 .485.248.207.559L2.752 7.884a.333.333 0 0 1-.505 0L.16 5.56C-.118 5.25-.024 5 .366 5z" />
                            </g>
                            <g>
                                <path class="bottom" fill="#0f3261" d="M4.633 3c.391 0 .485-.248.207-.559L2.752.116a.333.333 0 0 0-.505 0L.16 2.44C-.118 2.75-.024 3 .366 3z" />
                            </g>
                        </svg>
                    </span>
                    <span v-else>
                        {{ value.label }}
                    </span>
                </span>
            </div>
            <div class="table-cell table-edit" v-click-outside="() => { showAlterTableColumns = false  }" @click="showAlterTableColumns = !showAlterTableColumns">
                <span class="change-columns">Change</span>
                <div @click.stop v-if="showAlterTableColumns" class="alter-table-columns">
                    <div class="item" v-for="( item, item_index) in structure.filter((s) => s.label )" :key="item_index">
                        <p-check v-model="item.visible" class="p-curve p-svg p-jelly table-check" color="primary" name="check">
                            <span slot="extra" class="vue-table-checkmark-icon svg svg-icon"></span>
                            {{ item.label }}
                        </p-check>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="table-container" :style="{ height: height }">
            <el-row v-for="(row, index) in filteredRows" :key="`${index}${(row.selected) ? '_selected': ''}`" :data="row" :structure="structure" :class="{ 'can-hover' : detailed }" @click="rowClicked(row.id)" :editable="editable">
                <template v-for="col in structure.filter((c) => c.type === 'slot')" v-slot:[col.key]>
                    <slot :name="col.key" v-bind:row="row"></slot>
                </template>
            </el-row>
        </div>

        <!-- Footer -->
    </div>
</template>

<script>
import ElRow from './row'
import PCheck from 'pretty-checkbox-vue/check'

export default {
    components: { ElRow, PCheck },
    props: {
        rows: {
            type: Array,
            required: true
        },
        height: {
            type: String,
            default: '600px'
        },
        structure: {
            type: Array,
            require: true
        },
        detailed: {
            type: Boolean,
            require: false,
            default: false
        },
        searchable: {
            type: Array,
            require: false,
            default: () => {
                return []
            }
        },
        editable: {
            type: Boolean,
            default: false
        },
        theme: {
            default: () => (
                {
                    primary: '#0f3261',
                    success: 'green',
                    error: '#f72d55',
                    icons: '#0f3261'
                }
            )
        }
    },
    data: () => ({
        selected: false,
        showAlterTableColumns: false,
        order: null,
        localRows: [],
        search: ''
    }),
    mounted() {
        this.localRows = this.rows
        let root = document.documentElement;
        if (this.theme.primary)
            root.style.setProperty('--salamander-theme-primary', this.theme.primary);
        if (this.theme.success)
            root.style.setProperty('--salamander-theme-success', this.theme.success);
        if (this.theme.warning)
            root.style.setProperty('--salamander-theme-warning', this.theme.warning);
        if (this.theme.danger)
            root.style.setProperty('--salamander-theme-danger', this.theme.danger);
        if (this.theme.icons)
            root.style.setProperty('--salamander-theme-icons', this.theme.icons);
    },
    methods: {
        rowClicked(id) {
            if (!this.detailed) return

            this.$emit('row-clicked', id)
        }
    },
    computed: {
        filteredRows() {
            let rows = []
            if (this.searchable.length > 0)
                rows = this.localRows.filter(row => {
                    if (this.searchable.some(key => { return row[key].toLowerCase().includes(this.search.toLowerCase()) })) return row
                })
            else rows = this.localRows


            if (this.order) {
                if (this.order.type === 'text')
                    rows.sort((a, b) => {
                        if (a[this.order.column] && b[this.order.column])
                            return a[this.order.column].localeCompare(b[this.order.column]);
                    })
                if (this.order.type === 'number')
                    rows.sort((a, b) => {
                        return a[this.order.column] - b[this.order.column];
                    })
                if (this.order.type === 'user')
                    rows.sort((a, b) => {
                        if (a.first_name && b.first_name)
                            return a.first_name.localeCompare(b.first_name);
                    })
                if (this.order.type === 'date')
                    rows.sort((a, b) => {
                        return new Date(a[this.order.column]) - new Date(b[this.order.column]);
                    })
                if (this.order.type === 'boolean')
                    rows.sort((a, b) => {
                        return a[this.order.column] - b[this.order.column];
                    })

                if (this.order.asc) rows.reverse()
            }

            return rows
        }
    },
    watch: {
        rows: function () {
            this.localRows = this.rows
        },
        selected: function () {
            let value = this.selected
            this.localRows.forEach(function (row, index) {
                row.selected = value
            })
        }
    },
    directives: {
        'click-outside': {
            bind: function (el, binding) {
                // Define Handler and cache it on the element
                const bubble = binding.modifiers.bubble
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = handler

                // add Event Listeners
                document.getElementById('app').addEventListener('click', handler, true)
            },

            unbind: function (el) {
                // Remove Event Listeners
                document.getElementById('app').removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        },
    },
}
</script>
