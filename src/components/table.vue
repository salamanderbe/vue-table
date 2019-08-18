<style lang="scss" scoped>
.table-container {
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    border: 1px solid #e6eaee;
}
.table-filter {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 8px 16px;
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
.small {
    font-size: 80%;
}
.c-pointer {
    cursor: pointer;
}
</style>

<style lang="scss">
.salamander-table {
    @import "~pretty-checkbox/src/pretty-checkbox.scss";
    .sort-icon {
        height: 8px;
        width: auto;
        margin-left: 8px;

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
            color: #0f3261;
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
                        <!--                         
                            <i-sort ></i-sort>
                        -->
                    </span>
                    <span v-else>
                        {{ value.label }}
                    </span>
                </span>
            </div>
            <div v-if="editable" class="table-cell table-edit" v-click-outside="() => { showAlterTableColumns = false  }" @click="showAlterTableColumns = !showAlterTableColumns">
                <span class="change-columns">Change</span>
                <div @click.stop v-if="showAlterTableColumns" class="alter-table-columns">
                    <div class="item" v-for="( item, item_index) in structure.filter((s) => s.label )" :key="item_index">
                        <p-check v-model="item.visible" class="p-curve p-svg p-jelly table-check" color="success" name="check">
                            <span slot="extra" class="vue-table-checkmark-icon svg svg-icon"></span>
                            {{ item.label }}
                        </p-check>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="table-container">
            <el-row v-for="(row, index) in filteredRows" :key="index" :data="row" :structure="structure" :class="{ 'can-hover' : detail !== '' }" @click="goToRow(row.id)" :editable="editable"></el-row>
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
        structure: {
            type: Array,
            require: true
        },
        detail: {
            type: String,
            require: false,
            default: ''
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
            default: true
        },
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
    },
    methods: {
        goToRow(id) {
            if (!this.detail) return

            this.$router.push({ name: this.detail, params: { id: id } })
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
                        if (a[this.order.column] < b[this.order.column]) { return -1; }
                        if (a[this.order.column] > b[this.order.column]) { return 1; }
                        return 0;
                    })

                if (this.order.asc) rows.reverse()
            }

            return rows
        }
    },
    watch: {
        rows: function() {
            this.localRows = this.rows
        },
        selected: function() {
            let value = this.selected
            this.localRows.forEach(function(row, index) {
                this[index].selected = value
            }, this.localRows)
        }
    },
    directives: {
        'click-outside': {
            bind: function(el, binding) {
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

            unbind: function(el) {
                // Remove Event Listeners
                document.getElementById('app').removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        },
    },
}
</script>
