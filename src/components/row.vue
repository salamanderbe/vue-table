<style lang="scss" scoped>
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
</style>
<template>
    <div class="table-row">

        <div class="table-cell" v-for="(value, index) in structure.filter((s) => s.visible )" :key="index" :class="['type-' + value.type, 'size-' + value.size]" @click="handleClick(value.type)">

            <p-check v-if="value.type === 'select'" v-model="data.selected" class="p-curve p-svg p-jelly" color="primary" name="check">
                <span slot="extra" class="vue-table-checkmark-icon svg svg-icon"></span>
            </p-check>

            <template v-if="value.type === 'user'">
                <div class="avatar sm text-avatar">
                    <span>{{ data.first_name.charAt(0) }} {{ data.last_name ? data.last_name.charAt(0) : '' }}</span>
                </div>
                <div class="small my-auto">
                    {{ data.first_name }}
                    {{ data.last_name }}
                </div>
            </template>

            <div v-if="value.type === 'text'" class="small my-auto">
                {{ data[value.key] }}
            </div>

            <div v-if="value.type === 'translated'" class="small my-auto">
                {{ translate(`table.${data[value.key]}`) }}
            </div>

            <div v-if="value.type === 'date'" class="small my-auto">
                {{ displayDate(data[value.key])}}
            </div>

            <svg v-if="value.type === 'boolean' && data[value.key]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="extra" class="boolean-check success">
                <g>
                    <g>
                        <g>
                            <path fill="#c0ae66" d="M16.496 0a.75.75 0 0 0-.516.227l-9.97 9.97-3.97-3.97a.75.75 0 1 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l10.5-10.5A.75.75 0 0 0 16.496 0z" />
                        </g>
                    </g>
                </g>
            </svg>
            <svg v-if="value.type === 'boolean' && !data[value.key]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" slot="extra" class="boolean-check error">
                <g>
                    <g>
                        <g>
                            <path fill="#ff2d55" d="M1.12.368a.75.75 0 0 0-.523 1.287L7.942 9 .597 16.345a.75.75 0 1 0 1.061 1.06l7.345-7.344 7.344 7.345a.75.75 0 1 0 1.061-1.061L10.063 9l7.345-7.345a.75.75 0 1 0-1.06-1.06L9.002 7.94 1.658.595A.75.75 0 0 0 1.12.368z" />
                        </g>
                    </g>
                </g>
            </svg>

            <div v-if="value.type === 'label'" class="small my-auto cell-label">
                {{ data[value.key] }}
            </div>

            <div v-if="value.type === 'labels'" class="cell-labels">
                <div v-if="data[value.key].length > 0" class="label">
                    {{ translate(data[value.key][0]) }}
                </div>
                <div v-if="data[value.key].length - 1 > 0" class="label-extra">
                    +{{ data[value.key].length - 1 }}
                </div>
            </div>

        </div>

        <div v-if="editable" class="table-cell table-edit ml-auto d-flex pr-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 16" @click.stop class="settings-icon">
                <g>
                    <g>
                        <path fill="#1d232d" d="M.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0-6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
                    </g>
                </g>
            </svg>
        </div>

    </div>
</template>

<script>
import PCheck from 'pretty-checkbox-vue/check'

export default {
    components: { PCheck },
    props: {
        data: {
            type: Object,
            required: true
        },
        structure: {
            type: Array,
            required: true
        },
        editable: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        handleClick(type) {
            if (type !== 'select')
                this.$emit('click')
        },
        translate(key) {
            if (typeof this.$t === 'function') {
                return this.$t(key)
            }
            return key;
        },
        displayDate(date) {
            if (typeof this.$moment === 'function') {
                this.$moment(date).format('DD MMM YYYY')
            }
            return date
        }
    }
}
</script>
