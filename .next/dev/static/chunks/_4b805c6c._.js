(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PrivateRoute.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivateRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PrivateRoute({ children, allowedRoles }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrivateRoute.useEffect": ()=>{
            if (!user) {
                router.push("/login");
            } else if (!allowedRoles.includes(user.role)) {
                router.push("/unauthorized");
            }
        }
    }["PrivateRoute.useEffect"], [
        user
    ]);
    if (!user || !allowedRoles.includes(user.role)) return null;
    return children;
}
_s(PrivateRoute, "VvmgW5gML8gtJ8g+p6fOEJP2gYk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PrivateRoute;
var _c;
__turbopack_context__.k.register(_c, "PrivateRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/superadmin/_styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "superUI",
    ()=>superUI
]);
const superUI = {
    page: {
        minHeight: "100vh",
        background: "#f8fafc"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb"
    },
    nav: {
        display: "flex",
        gap: "10px"
    },
    button: {
        padding: "8px 14px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
    },
    buttonSecondary: {
        padding: "8px 14px",
        background: "#ffffff",
        color: "#2563eb",
        border: "1px solid #2563eb",
        borderRadius: "6px",
        cursor: "pointer"
    },
    card: {
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "24px",
        background: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "20px"
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        marginTop: "20px"
    },
    statBox: {
        padding: "16px",
        background: "#f1f5f9",
        borderRadius: "6px",
        textAlign: "center"
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px"
    },
    th: {
        padding: "12px",
        borderBottom: "2px solid #e5e7eb",
        fontWeight: "600",
        color: "#111827",
        textAlign: "left"
    },
    thCenter: {
        textAlign: "center"
    },
    td: {
        padding: "12px",
        borderBottom: "1px solid #e5e7eb",
        color: "#374151",
        fontSize: "14px",
        textAlign: "left"
    },
    tdCenter: {
        textAlign: "center"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/superadmin/user-logs/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PrivateRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PrivateRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/superadmin/_styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function UserLogs() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserLogs.useEffect": ()=>{
            const storedLogs = JSON.parse(localStorage.getItem("userLogs")) || [];
            setLogs(storedLogs.reverse()); // latest first
        }
    }["UserLogs.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PrivateRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        allowedRoles: [
            "superadmin"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].nav,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].buttonSecondary,
                                    onClick: ()=>router.push("/superadmin/dashboard"),
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].buttonSecondary,
                                    onClick: ()=>router.push("/superadmin/user-management"),
                                    children: "User Management"
                                }, void 0, false, {
                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].button,
                                    children: "User Logs"
                                }, void 0, false, {
                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].buttonSecondary,
                                    onClick: ()=>router.push("/superadmin/reports"),
                                    children: "Reports"
                                }, void 0, false, {
                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/superadmin/user-logs/page.js",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: logout,
                            style: {
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].button,
                                background: "#ef4444"
                            },
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/app/superadmin/user-logs/page.js",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/superadmin/user-logs/page.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "User Login Logs"
                        }, void 0, false, {
                            fileName: "[project]/app/superadmin/user-logs/page.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No logs found."
                        }, void 0, false, {
                            fileName: "[project]/app/superadmin/user-logs/page.js",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].th,
                                                    textAlign: "left"
                                                },
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/superadmin/user-logs/page.js",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].th,
                                                    textAlign: "center"
                                                },
                                                children: "Role"
                                            }, void 0, false, {
                                                fileName: "[project]/app/superadmin/user-logs/page.js",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].th,
                                                    textAlign: "right"
                                                },
                                                children: "Time"
                                            }, void 0, false, {
                                                fileName: "[project]/app/superadmin/user-logs/page.js",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/superadmin/user-logs/page.js",
                                        lineNumber: 65,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: logs.map((log, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].td,
                                                        textAlign: "left"
                                                    },
                                                    children: log.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                                    lineNumber: 75,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].td,
                                                        textAlign: "center"
                                                    },
                                                    children: log.role
                                                }, void 0, false, {
                                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                                    lineNumber: 78,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$superadmin$2f$_styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superUI"].td,
                                                        textAlign: "right"
                                                    },
                                                    children: log.time
                                                }, void 0, false, {
                                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                                    lineNumber: 81,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app/superadmin/user-logs/page.js",
                                            lineNumber: 74,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/superadmin/user-logs/page.js",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/superadmin/user-logs/page.js",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/superadmin/user-logs/page.js",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/superadmin/user-logs/page.js",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/superadmin/user-logs/page.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(UserLogs, "SUnSN/eAVRSIifKXoKOUqIyyhgI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = UserLogs;
var _c;
__turbopack_context__.k.register(_c, "UserLogs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4b805c6c._.js.map