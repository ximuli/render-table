/**
  *  render table
  *  @tableSource => el-tabel props
  *  @columns => el-table-column props
  *  @pagingConfig => el-pagination props
 */

<script>
export default {
  name: 'RenderTable',
  props: {
    tableSource: {
      type: Object,
      default: () => {}
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    pagingConfig: {
      type: Object
    },
    currentPage: Number,
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  render(h) {
    return h('div', {
      class: {
        'render-table': true
      }
    }, [
      this.renderTable(h),
      this.total ? this.renderPagination(h) : ''
    ])
  },
  methods: {
    renderPagination(h) {
      return h('el-pagination', {
        props: {
          layout: 'total, prev, pager, next, jumper, sizes',
          'page-size': this.pageSize,
          'page-sizes': [10, 20, 30, 40, 50],
          currentPage: this.currentPage,
          total: this.total,
          ...this.pagingConfig
        },
        on: {
          // 需要用到哪些事件就写哪些
          'size-change': val => {
            this.$emit('size-change', val)
          },
          'current-change': val => {
            this.$emit('current-change', val)
          },
          'update:currentPage': val => {
            this.$emit('update:currentPage', val)
          }
        },
        style: {
          whiteSpace: 'unset',
          textAlign: 'right',
          marginTop: '10px'
        }
      })
    },
    renderTable(h) {
      return h(
        'el-table',
        {
          props: {
            ...this.tableSource,
            data: this.data
          },
          on: {
            // 需要用到哪些事件就写哪些
            'selection-change': val => {
              this.$emit('selection-change', val)
            },
            'sort-change': val => {
              this.$emit('sort-change', val)
            }
          }
        },
        [
          ...this.columns.map(column => {
            if (column.hidden) {
              return
            }
            if (column.render) {
              return h('el-table-column', {
                props: {
                  ...column
                },
                scopedSlots: {
                  default: props => {
                    return column.render(h, props)
                  }
                }
              })
            } else {
              return h('el-table-column', {
                props: {
                  ...column
                }
              })
            }
          })
        ]
      )
    }
  }
}
</script>