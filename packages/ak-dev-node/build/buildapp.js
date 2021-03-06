"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileutil_1 = require("./../util/fileutil");
const appcontext = require("./appcontext");
const path = require("path");
exports.getApps = () => {
    const _strs = fileutil_1.getFilesByDir(path.resolve(appcontext.getBasePath, ".."));
    // var _package = require("./../../package.json"); var name = _package.name; var
    // version = _package.version; console.log(name + "   "+ version);
    return _strs.concat(fileutil_1.getFilesByDir(path.resolve(appcontext.getBasePath, "..", "apps", "arwen"))).filter((str) => {
        if (str.toUpperCase().indexOf("AK-APP") == 0) {
            return true;
        }
    });
};
