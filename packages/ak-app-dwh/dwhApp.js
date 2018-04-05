var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseApp } from "ak-lib-web/app/BaseApp";
import { ioc } from "ak-lib-sys";
var dwhApp = /** @class */ (function (_super) {
    __extends(dwhApp, _super);
    function dwhApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MenuList = _menus;
        _this.Name = "dwh";
        _this.Title = "数仓管理";
        _this.Doc = "数据仓库管理系统";
        _this.Icon = "cube";
        return _this;
    }
    dwhApp = __decorate([
        ioc.PlugIn({ RegName: "dwhApp", BaseType: "IApp", Doc: "数据仓库管理系统应用插件" })
    ], dwhApp);
    return dwhApp;
}(BaseApp));
export { dwhApp };
var _menus = [
    {
        text: '数据管理',
        name: 'ttt',
        icon: 'fa-database',
        children: [
            // { name: 'dwh.table.search', text: '查找数据',icon:'search' },
            ///dwh/table/search
            { name: '/web/listpage/dwh_search_tables_source', text: '查找数据', icon: 'table' },
            { name: '/web/listpage/dwh_tabless_source', text: '数据表管理', icon: 'table' },
            { name: '/web/listpage/dwh_permissionsource', text: '订阅权限管理' },
            { name: '/web/listpage/dwh_task_subscriptions', text: '订阅任务管理' },
            { name: '/dwh/table/manage', text: '数据表管理_old', icon: 'table' },
            { name: '/dwh/sub/permission/manage', text: '订阅权限管理_old' },
            { name: '/dwh/sub/task/manage', text: '订阅任务管理_old' },
        ]
    },
    {
        text: '数据集成',
        name: 'dwh.data.integration',
        icon: 'fa-plug',
        children: [
            { name: '/web/listpage/dwh_source', text: '数据源管理' },
            { name: '/dwh/task/edit', text: '编辑任务' },
            { name: '/web/listpage/dwh_task', text: '调度任务' },
            { name: '/dwh/source/manage', text: '数据源管理_old' },
            { name: '/dwh/task/schedule', text: '调度任务_old' }
        ]
    },
    {
        text: '运维中心',
        name: 'dwh.operation',
        icon: 'fa-cog',
        children: [
            { name: '/web/listpage/dwh_HostComputer', text: '主机管理' },
            { name: '/dwh/clusters', text: '集群管理' }
        ]
    },
    {
        text: '数据开发',
        name: 'dwh.data.dev',
        icon: 'fa-server',
        children: [
            { name: '#', text: 'TODO' }
        ]
    }
];