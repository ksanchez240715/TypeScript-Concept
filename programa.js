var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var EditorSoftware = /** @class */ (function (_super) {
    __extends(EditorSoftware, _super);
    function EditorSoftware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorSoftware.prototype.getTimeLife = function () {
        return this.timeLife;
    };
    EditorSoftware.prototype.setTimeLife = function (timeLife) {
        this.timeLife = timeLife;
    };
    EditorSoftware.prototype.getAllData = function () {
        return this.nombre + " - " + this.version + " - " + this.timeLife;
    };
    return EditorSoftware;
}(Programa));
var software = new EditorSoftware();
software.setNombre("Php Storm");
software.setVersion(1);
software.setTimeLife(4);
console.log(software.getAllData());
