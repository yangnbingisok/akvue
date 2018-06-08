import { IApp } from "./iapp";
import { IMenu } from "./imenu";
import { ioc, vue } from "ak-lib-sys";
export declare abstract class BaseApp implements IApp {
    Name: string;
    Title: string;
    Doc: string;
    Icon: string;
    protected MenuList: IMenu[];
    protected PlugDict: ioc.IClassList;
    Order: number;
    RootRoute: vue.IRouteConfig[];
    MainRoute: vue.IRouteConfig[];
    getMenus(): IMenu[];
    getPlugs(): ioc.IClassList;
}
