(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-13e6380b"], {
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return n
            })), r.d(t, "d", (function() {
                return s
            })), r.d(t, "i", (function() {
                return i
            })), r.d(t, "m", (function() {
                return o
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "g", (function() {
                return u
            })), r.d(t, "k", (function() {
                return l
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "h", (function() {
                return p
            })), r.d(t, "n", (function() {
                return _
            })), r.d(t, "a", (function() {
                return h
            })), r.d(t, "l", (function() {
                return f
            })), r.d(t, "q", (function() {
                return m
            })), r.d(t, "f", (function() {
                return v
            })), r.d(t, "o", (function() {
                return g
            })), r.d(t, "c", (function() {
                return b
            })), r.d(t, "e", (function() {
                return y
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(a["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
                return Object(a["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function v(e) {
                return Object(a["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(a["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        4352: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-tabs", {
                        model: {
                            value: e.activeName,
                            callback: function(t) {
                                e.activeName = t
                            },
                            expression: "activeName"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "全部",
                            name: "all"
                        }
                    }, [r("ListComponent")], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            name: "0"
                        }
                    }, [r("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        待查收\n        "), r("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.listTotal[0]))])]), e._v(" "), r("ListComponent", {
                        attrs: {
                            "receive-status": "0",
                            "header-total": e.listTotal[0]
                        },
                        on: {
                            "update:headerTotal": function(t) {
                                return e.$set(e.listTotal, 0, t)
                            },
                            "update:header-total": function(t) {
                                return e.$set(e.listTotal, 0, t)
                            }
                        }
                    })], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            name: "1"
                        }
                    }, [r("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        已查收\n        "), r("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.listTotal[1]))])]), e._v(" "), r("ListComponent", {
                        attrs: {
                            "receive-status": "1",
                            "header-total": e.listTotal[1]
                        },
                        on: {
                            "update:headerTotal": function(t) {
                                return e.$set(e.listTotal, 1, t)
                            },
                            "update:header-total": function(t) {
                                return e.$set(e.listTotal, 1, t)
                            }
                        }
                    })], 1)], 1)], 1)
                },
                n = [],
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "list-component"
                    }, [r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", {
                        staticClass: "wrap",
                        attrs: {
                            span: 21
                        }
                    }, [r("div", {
                        staticClass: "same-width"
                    }, [r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "分配时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.assign_at,
                            callback: function(t) {
                                e.$set(e.search, "assign_at", t)
                            },
                            expression: "search.assign_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "查收时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.receive_at,
                            callback: function(t) {
                                e.$set(e.search, "receive_at", t)
                            },
                            expression: "search.receive_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        ref: "transfer_order_no",
                        attrs: {
                            placeholder: "流转单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.transfer_order_no,
                            callback: function(t) {
                                e.$set(e.search, "transfer_order_no", t)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "流转步骤"
                        },
                        model: {
                            value: e.search.to_node_id,
                            callback: function(t) {
                                e.$set(e.search, "to_node_id", t)
                            },
                            expression: "search.to_node_id"
                        }
                    }, e._l(e.dict.nodes, (function(e) {
                        return r("el-option", {
                            key: e.id,
                            attrs: {
                                label: "录入--\x3e" + e.name,
                                value: e.id
                            }
                        })
                    })), 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "分配状态"
                        },
                        model: {
                            value: e.search.assign_status,
                            callback: function(t) {
                                e.$set(e.search, "assign_status", t)
                            },
                            expression: "search.assign_status"
                        }
                    }, [r("el-option", {
                        attrs: {
                            value: "",
                            label: "全部"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "-1",
                            label: "已作废"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "0",
                            label: "未分配"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "1",
                            label: "已分配"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "创建人"
                        },
                        model: {
                            value: e.search.create_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "create_user_ids", t)
                            },
                            expression: "search.create_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "分配人"
                        },
                        model: {
                            value: e.search.assign_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "assign_user_ids", t)
                            },
                            expression: "search.assign_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "分配至"
                        },
                        model: {
                            value: e.search.by_assign_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "by_assign_user_ids", t)
                            },
                            expression: "search.by_assign_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "采购单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.purchase_order_no,
                            callback: function(t) {
                                e.$set(e.search, "purchase_order_no", t)
                            },
                            expression: "search.purchase_order_no"
                        }
                    })], 1)])]), e._v(" "), r("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [r("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(t) {
                                return e.getList(1)
                            }
                        }
                    }, [e._v("查询")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(t) {
                                return e.resetSearch()
                            }
                        }
                    }, [e._v("重置")])], 1)], 1), e._v(" "), r("div", {
                        staticClass: "header-tools"
                    }, [r("div", [r("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#barcode-container",
                            expression: "'#barcode-container'"
                        }],
                        ref: "printOrder",
                        attrs: {
                            type: "primary",
                            disabled: e.is_disabled
                        },
                        on: {
                            click: function(t) {
                                return e.printOrder()
                            }
                        }
                    }, [e._v("打印流转单")]), e._v(" "), r("el-button", {
                        attrs: {
                            loading: e.printLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.print()
                            }
                        }
                    }, [e._v("导出报表")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: 0 == e.selectRows.length
                        },
                        on: {
                            click: function(t) {
                                return e.getProductByImei()
                            }
                        }
                    }, [e._v("打印IMEI标签")]), e._v(" "), r("el-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }, {
                            name: "print",
                            rawName: "v-print",
                            value: "#barcode-container",
                            expression: "'#barcode-container'"
                        }],
                        ref: "printBarcode",
                        attrs: {
                            type: "primary"
                        }
                    }, [e._v("打印标签")])], 1), e._v(" "), r("div", [r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("已勾选：" + e._s(e.selectNum))]), e._v(" "), r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("总数量：" + e._s(e.total_goods_num))])], 1)]), e._v(" "), r("el-row", {
                        staticClass: "body-list"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        ref: "tableData",
                        attrs: {
                            data: e.tableData,
                            border: "",
                            "max-height": e.getClientHeight(380)
                        },
                        on: {
                            "selection-change": e.handleSelectChange
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "transfer_order_no",
                            label: "流转单号",
                            align: "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "type-in-flow-detail",
                                            query: {
                                                id: t.row.id
                                            }
                                        }
                                    }
                                }, [r("span", {
                                    staticClass: "view"
                                }, [e._v(e._s(t.row.transfer_order_no))])])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "total_num",
                            label: "商品总数量",
                            width: "100",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "total_cost",
                            label: "商品总金额",
                            width: "100",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "流转步骤",
                            width: "130",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(t.row.source_node.name) + " ---\x3e " + e._s(t.row.to_node.name))]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "分配状态",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", {
                                    class: {
                                        "color-success": 1 == t.row.assign_status, "color-danger": 1 != t.row.assign_status
                                    }
                                }, [e._v(e._s(t.row.assign_status_description))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "接收状态",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", {
                                    class: {
                                        "color-success": 1 == t.row.receive_status, "color-danger": 1 != t.row.receive_status
                                    }
                                }, [e._v(e._s(t.row.receive_status_description))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作人",
                            "header-align": "center",
                            width: "220"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.create_user ? r("div", [e._v("创建：" + e._s(t.row.create_user.department_name) + " --- " + e._s(t.row.create_user.real_name))]) : e._e(), e._v(" "), t.row.by_assign_user ? r("div", [e._v("分配至：" + e._s(t.row.by_assign_user.department_name) + " --- " + e._s(t.row.by_assign_user.real_name))]) : e._e(), e._v(" "), t.row.receive_user ? r("div", [e._v("查收：" + e._s(t.row.receive_user.department_name) + " --- " + e._s(t.row.receive_user.real_name))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "时间",
                            "header-align": "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.created_at ? r("div", [e._v("创建：" + e._s(t.row.created_at))]) : e._e(), e._v(" "), t.row.assign_at ? r("div", [e._v("分配：" + e._s(t.row.assign_at))]) : e._e(), e._v(" "), t.row.receive_at ? r("div", [e._v("查收：" + e._s(t.row.receive_at))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            "header-align": "center",
                            width: "250"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "type-in-flow-detail",
                                            query: {
                                                id: t.row.id
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    }
                                }, [e._v("查看")])], 1), e._v(" "), 0 == t.row.receive_status && -1 != t.row.assign_status ? r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.destroyOrder(t.row.id, t.row.transfer_order_no)
                                        }
                                    }
                                }, [e._v("作废")]) : e._e()]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: e.total,
                            "current-page": e.search.page,
                            "page-size": e.search.page_size
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:pageSize": function(t) {
                                return e.$set(e.search, "page_size", t)
                            },
                            "update:page-size": function(t) {
                                return e.$set(e.search, "page_size", t)
                            },
                            "current-change": function(t) {
                                return e.getList()
                            }
                        }
                    })], 1), e._v(" "), r("AssignDialog", {
                        attrs: {
                            "show-dialog": e.showAssignDialog
                        },
                        on: {
                            "update:showDialog": function(t) {
                                e.showAssignDialog = t
                            },
                            "update:show-dialog": function(t) {
                                e.showAssignDialog = t
                            },
                            done: e.handleAssingDone
                        },
                        model: {
                            value: e.assignForm,
                            callback: function(t) {
                                e.assignForm = t
                            },
                            expression: "assignForm"
                        }
                    }), e._v(" "), r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: e.barcodeInfo,
                            line: 4
                        }
                    })], 1)
                },
                i = [],
                o = r("4838"),
                c = r.n(o),
                u = r("5925"),
                l = r("2934"),
                d = r("c35b"),
                p = r("b7b8"),
                _ = r("6d8f"),
                h = r("7774");

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        v(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e, t, r, a, n, s, i) {
                try {
                    var o = e[s](i),
                        c = o.value
                } catch (u) {
                    return void r(u)
                }
                o.done ? t(c) : Promise.resolve(c).then(a, n)
            }

            function b(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var s = e.apply(t, r);

                        function i(e) {
                            g(s, a, n, i, o, "next", e)
                        }

                        function o(e) {
                            g(s, a, n, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function y(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = w(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var a = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, i = !0,
                    o = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        o = !0, s = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
            }

            function w(e, t) {
                if (e) {
                    if ("string" === typeof e) return O(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? O(e, t) : void 0
                }
            }

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }
            var k = {
                    name: "DistributionFlowListComponent",
                    components: {
                        UserList: d["a"],
                        AssignDialog: p["a"],
                        Barcode: _["a"]
                    },
                    props: {
                        receiveStatus: [String],
                        headerTotal: [Number]
                    },
                    data: function() {
                        return {
                            activeName: "0",
                            tableData: [],
                            search: {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: this.$route.query.order_no,
                                assign_status: null,
                                receive_status: this.receiveStatus,
                                status: null,
                                create_user_ids: [],
                                assign_user_ids: [],
                                by_assign_user_ids: [],
                                purchase_order_no: null,
                                page: 1
                            },
                            total: 0,
                            total_goods_num: 0,
                            dict: {
                                nodes: []
                            },
                            loading: !1,
                            assignForm: {
                                to_node_id: 3
                            },
                            showAssignDialog: !1,
                            orderId: [],
                            printLoading: !1,
                            selectData: [],
                            is_disabled: !0,
                            selectRows: [],
                            barcodeInfo: [],
                            oldSearch: {
                                transfer_order_no: null
                            }
                        }
                    },
                    computed: {
                        selectNum: function() {
                            var e, t = 0,
                                r = y(this.selectRows);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var a = e.value;
                                    t += a.total_num
                                }
                            } catch (n) {
                                r.e(n)
                            } finally {
                                r.f()
                            }
                            return t
                        }
                    },
                    mounted: function() {
                        this.$refs["transfer_order_no"].focus(), this.search.transfer_order_no = this.$route.query.order_no, this.getList(), this.getNodes()
                    },
                    methods: {
                        print: function() {
                            var e = b(c.a.mark((function e() {
                                var t, r;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = m(m({}, this.search), {}, {
                                                is_export: 1
                                            }, this.oldSearch), this.printLoading = !0, e.next = 5, Object(u["c"])(t);
                                        case 5:
                                            r = e.sent, this.printLoading = !1, window.open(r.data.download_url, "blank"), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), this.printLoading = !1;
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getList: function() {
                            var e = b(c.a.mark((function e(t) {
                                var r, a = this;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t && (this.search.page = 1), this.loading = !0, e.next = 4, Object(u["c"])(this.search);
                                        case 4:
                                            r = e.sent, this.loading = !1, this.tableData = r.data.data, this.total = r.data.total, this.total_goods_num = r.data.total_goods_num, this.$emit("update:headerTotal", this.total), this.oldSearch.transfer_order_no = m({}, this.search).transfer_order_no, this.search.transfer_order_no = null, this.$route.query.order_no && !this.receiveStatus && (this.$refs["tableData"].toggleAllSelection(), this.printOrder(this.tableData), setTimeout((function() {
                                                a.$refs["printOrder"].$el.click()
                                            }), 500));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getNodes: function() {
                            var e = b(c.a.mark((function e() {
                                var t;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["j"])();
                                        case 2:
                                            t = e.sent, this.dict.nodes = t.data;
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetSearch: function() {
                            this.search = {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: null,
                                assign_status: null,
                                receive_status: null,
                                status: null,
                                create_user_ids: [],
                                assign_user_ids: [],
                                by_assign_user_ids: [],
                                purchase_order_no: null,
                                page: 1
                            }, this.getList()
                        },
                        openAssign: function(e) {
                            this.orderId = e, this.showAssignDialog = !0
                        },
                        handleAssingDone: function() {
                            var e = b(c.a.mark((function e() {
                                var t;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = {
                                                transfer_order_id: this.orderId,
                                                by_assign_user_id: this.assignForm.by_assign_user_id,
                                                to_node_id: this.assignForm.to_node_id
                                            }, this.loading = !0, e.next = 5, Object(u["a"])(t);
                                        case 5:
                                            this.loading = !1, this.$message.success("分配成功！"), this.getList(), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), this.loading = !1;
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleSelectChange: function(e) {
                            e.length > 0 ? this.is_disabled = !1 : this.is_disabled = !0, this.selectData = [];
                            var t, r = y(e);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var a = t.value;
                                    this.selectData.push(a.id)
                                }
                            } catch (n) {
                                r.e(n)
                            } finally {
                                r.f()
                            }
                            this.selectRows = e
                        },
                        destroyOrder: function() {
                            var e = b(c.a.mark((function e(t, r) {
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$confirm("确定作废【".concat(r, "】？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, e.next = 6, Object(u["b"])({
                                                transfer_order_id: t
                                            });
                                        case 6:
                                            this.loading = !1, this.getList(), this.$message.success("作废成功！"), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](0), this.loading = !1;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 11]
                                ])
                            })));

                            function t(t, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getProductByImei: function() {
                            var e = b(c.a.mark((function e() {
                                var t, r, a, n, s, i = this;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t = {
                                                transferOrderNos: [],
                                                per_page: 1e3
                                            }, r = y(this.selectRows);
                                            try {
                                                for (r.s(); !(a = r.n()).done;) n = a.value, t.transferOrderNos.push(n.transfer_order_no)
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            return e.next = 5, Object(h["c"])(t);
                                        case 5:
                                            s = e.sent, this.printRows = s.data.data, this.printImei(), setTimeout((function() {
                                                i.$nextTick((function() {
                                                    i.$refs["printBarcode"].$el.click()
                                                }))
                                            }), 500);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        printImei: function() {
                            this.barcodeInfo = [];
                            var e, t = y(this.printRows);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var r = e.value,
                                        a = this.getPrintTitle(r.extend),
                                        n = {
                                            title: a,
                                            code: r.extend.imei
                                        };
                                    this.barcodeInfo.push(n)
                                }
                            } catch (s) {
                                t.e(s)
                            } finally {
                                t.f()
                            }
                        },
                        printOrder: function(e) {
                            var t = this.selectRows;
                            e && (t = e), this.barcodeInfo = [];
                            var r, a = y(t);
                            try {
                                for (a.s(); !(r = a.n()).done;) {
                                    var n = r.value;
                                    this.barcodeInfo.push({
                                        num: n.sort_no,
                                        code: n.transfer_order_no,
                                        title: n.source_node.name + "---\x3e" + n.to_node.name + "（" + n.area_name.area_name + n.total_num + "台）<br/>" + (new Date).toLocaleString()
                                    })
                                }
                            } catch (s) {
                                a.e(s)
                            } finally {
                                a.f()
                            }
                        }
                    }
                },
                j = k,
                x = r("5d22"),
                $ = Object(x["a"])(j, s, i, !1, null, "35cc2f72", null),
                C = $.exports,
                S = {
                    components: {
                        ListComponent: C
                    },
                    data: function() {
                        return {
                            activeName: "all",
                            listTotal: [0, 0]
                        }
                    },
                    mounted: function() {},
                    methods: {}
                },
                D = S,
                L = Object(x["a"])(D, a, n, !1, null, "1cfca017", null);
            t["default"] = L.exports
        },
        5925: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "a", (function() {
                return s
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "d", (function() {
                return o
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/input/transfer_orders",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/input/assign_transfer_order",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/input/destroy_transfer_order",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/input/print_transfer_order",
                    method: "get",
                    params: e
                })
            }
        },
        7774: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "e", (function() {
                return s
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "f", (function() {
                return c
            })), r.d(t, "a", (function() {
                return u
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/input/get_edit_params",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/input/submit_edit_params",
                    method: "post",
                    data: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/input/get_edit_params_all",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/input/submit_edit_params_all",
                    method: "post",
                    data: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/input/transfer_store",
                    method: "post",
                    data: e
                })
            }
        }
    }
]);