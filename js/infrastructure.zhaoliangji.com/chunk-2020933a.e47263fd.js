(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2020933a"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "i", (function() {
                return s
            })), r.d(e, "m", (function() {
                return u
            })), r.d(e, "b", (function() {
                return i
            })), r.d(e, "g", (function() {
                return l
            })), r.d(e, "k", (function() {
                return c
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "h", (function() {
                return p
            })), r.d(e, "n", (function() {
                return _
            })), r.d(e, "a", (function() {
                return f
            })), r.d(e, "l", (function() {
                return m
            })), r.d(e, "q", (function() {
                return v
            })), r.d(e, "f", (function() {
                return g
            })), r.d(e, "o", (function() {
                return b
            })), r.d(e, "c", (function() {
                return h
            })), r.d(e, "e", (function() {
                return y
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "92ee": function(t, e, r) {},
        a1d5: function(t, e, r) {
            "use strict";
            r("92ee")
        },
        b21d: function(t, e, r) {
            "use strict";
            r.d(e, "d", (function() {
                return a
            })), r.d(e, "c", (function() {
                return o
            })), r.d(e, "b", (function() {
                return s
            })), r.d(e, "e", (function() {
                return u
            })), r.d(e, "a", (function() {
                return i
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/receive/transfer_orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/receive/show_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/receive/destroy_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/receive/print_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/receive/assign_transfer_order",
                    method: "get",
                    params: t
                })
            }
        },
        d9b0: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("div", {
                        staticClass: "detail-table body-list"
                    }, [r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("流转单号：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.transfer_order_no))]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品总数量：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.total_num))]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品总金额：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.total_cost))])], 1), t._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("分配人：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t.order.assign_user ? r("span", [t._v(t._s(t.order.assign_user.department_name) + "--" + t._s(t.order.assign_user.real_name))]) : t._e()]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("分配至：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t.order.by_assign_user ? r("span", [t._v(t._s(t.order.by_assign_user.department_name) + "--" + t._s(t.order.by_assign_user.real_name))]) : t._e()]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("分配时间：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.assign_at))])], 1), t._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("流转状态：")]), t._v(" "), r("el-col", {
                        class: {
                            "color-warning": 0 == t.order.receive_status, "color-success": 1 == t.order.receive_status, "color-danger": -1 == t.order.receive_status
                        },
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.receive_status_description))]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("流转步骤：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t.order.source_node ? r("span", [t._v(t._s(t.order.source_node.name) + " ---\x3e " + t._s(t.order.to_node.name))]) : t._e()]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("接收时间：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.receive_at))])], 1)], 1), t._v(" "), r("el-tabs", {
                        staticClass: "body-list",
                        model: {
                            value: t.activeTab,
                            callback: function(e) {
                                t.activeTab = e
                            },
                            expression: "activeTab"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "商品明细",
                            name: "0"
                        }
                    }, [r("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.details,
                            "show-summary": "",
                            "summary-method": t.getSummaries
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.type.name) + " " + t._s(e.row.brand.name))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "350"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(n, a) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != n.pn_id && 5 != n.pn_id,
                                            expression: "item.pn_id != 12 && item.pn_id != 5"
                                        }],
                                        key: a
                                    }, [t._v(t._s(n.pv_name) + t._s(a == e.row.sales_properties.length - 1 ? "" : "，"))])
                                }))
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "cost",
                            label: "成色",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(e, n) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == e.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: n
                                    }, [t._v(t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "实收数量",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.num ? e.row.num : 1))]
                            }
                        }])
                    })], 1)], 1), t._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "操作日志",
                            name: "1",
                            lazy: !0
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.logs.loading,
                            expression: "logs.loading"
                        }],
                        staticStyle: {
                            width: "100%",
                            "margin-bottom": "10px"
                        },
                        attrs: {
                            data: t.logData
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "操作时间",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "real_name",
                            label: "操作人",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.operate_user.department_name) + " - " + t._s(e.row.operate_user.real_name))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "content",
                            label: "内容",
                            align: "center"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: t.logs.total,
                            "current-page": t.logs.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(e) {
                                return t.$set(t.logs, "page", e)
                            },
                            "update:current-page": function(e) {
                                return t.$set(t.logs, "page", e)
                            },
                            "current-change": function(e) {
                                return t.getLogs()
                            }
                        }
                    })], 1)], 1)], 1), t._v(" "), r("div", {
                        staticClass: "flex-center"
                    }, [r("el-button", {
                        attrs: {
                            type: "success"
                        },
                        on: {
                            click: function(e) {
                                t.$router.push({
                                    name: "distribution-flow-flowOrder",
                                    query: {
                                        id: [t.$route.query.id].join(",")
                                    }
                                })
                            }
                        }
                    }, [t._v("打印流转单")])], 1)], 1)
                },
                a = [],
                o = r("4838"),
                s = r.n(o),
                u = r("b21d"),
                i = r("2934");

            function l(t, e) {
                var r;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (r = c(t)) || e && t && "number" === typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0,
                    u = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        u = !0, o = t
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                if (t) {
                    if ("string" === typeof t) return d(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(t, e) : void 0
                }
            }

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function p(t, e, r, n, a, o, s) {
                try {
                    var u = t[o](s),
                        i = u.value
                } catch (l) {
                    return void r(l)
                }
                u.done ? e(i) : Promise.resolve(i).then(n, a)
            }

            function _(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = t.apply(e, r);

                        function s(t) {
                            p(o, n, a, s, u, "next", t)
                        }

                        function u(t) {
                            p(o, n, a, s, u, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var f = {
                    name: "DistributionReceptDetail",
                    data: function() {
                        return {
                            activeTab: 0,
                            info: {},
                            logs: {
                                page: 1,
                                total: 0,
                                loading: !1
                            },
                            logData: [],
                            saveLoading: !1,
                            order: {},
                            details: []
                        }
                    },
                    mounted: function() {
                        this.getDetail(), this.getLogs()
                    },
                    methods: {
                        getDetail: function() {
                            var t = _(s.a.mark((function t() {
                                var e, r, n;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".app-container"
                                            }), t.next = 3, Object(u["c"])({
                                                transfer_order_id: this.$route.query.id
                                            });
                                        case 3:
                                            for (n in r = t.sent, this.order = r.data.transfer_order, r.data.products) this.details.push(r.data.products[n]);
                                            e.close();
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getSummaries: function(t) {
                            var e = t.columns,
                                r = t.data,
                                n = [];
                            return e.forEach((function(t, e) {
                                if (0 !== e) {
                                    if ("product_cost.cost" == t.property) {
                                        var a, o = 0,
                                            s = l(r);
                                        try {
                                            for (s.s(); !(a = s.n()).done;) {
                                                var u = a.value;
                                                u.product_cost && (o += Number(u.product_cost.cost) * Number(u.num ? u.num : 1))
                                            }
                                        } catch (_) {
                                            s.e(_)
                                        } finally {
                                            s.f()
                                        }
                                        n[e] = o
                                    }
                                    if ("num" == t.property) {
                                        var i, c = 0,
                                            d = l(r);
                                        try {
                                            for (d.s(); !(i = d.n()).done;) {
                                                var p = i.value;
                                                c += Number(p.num ? p.num : 1)
                                            }
                                        } catch (_) {
                                            d.e(_)
                                        } finally {
                                            d.f()
                                        }
                                        n[e] = c
                                    }
                                } else n[e] = "合计"
                            })), n
                        },
                        getLogs: function() {
                            var t = _(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.logs.loading = !0, t.next = 3, Object(i["k"])({
                                                upstream_order_id: this.$route.query.id,
                                                upstream_order_type: "transfer_orders",
                                                page: this.logs.page
                                            });
                                        case 3:
                                            e = t.sent, this.logData = e.data.data, this.logs.total = e.data.total, this.logs.loading = !1;
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                m = f,
                v = (r("a1d5"), r("5d22")),
                g = Object(v["a"])(m, n, a, !1, null, "0124ee62", null);
            e["default"] = g.exports
        }
    }
]);