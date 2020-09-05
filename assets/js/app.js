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
var App = /** @class */ (function () {
    function App(size, title, menu) {
        this.size = size;
        this.title = title;
        this.menu = menu;
    }
    App.prototype.setSize = function (newSize) {
        this.size = newSize;
    };
    App.prototype.getSize = function () {
        return this.size;
    };
    App.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    App.prototype.getTitle = function () {
        return this.title;
    };
    App.prototype.about = function () {
    };
    App.prototype.portafolio = function () {
    };
    App.prototype.abilities = function () {
    };
    App.prototype.contacts = function () {
    };
    return App;
}());
var Menu = /** @class */ (function () {
    function Menu(btnMenu, statusBtnMenu, menu, contentMenu, header, otherHeader) {
        this.btnMenu = btnMenu;
        this.statusBtnMenu = statusBtnMenu;
        this.menu = menu;
        this.contentMenu = contentMenu;
        this.header = header;
        this.otherHeader = otherHeader;
    }
    Menu.prototype.setStatusBtnMenu = function (newStatusBtnMenu) {
        this.statusBtnMenu = newStatusBtnMenu;
    };
    Menu.prototype.getStatusBtnMenu = function () {
        return this.statusBtnMenu;
    };
    Menu.prototype.showMenu = function () {
        this.header.animate({ marginLeft: '80%' });
        this.menu.animate({ marginLeft: '0px' });
        this.contentMenu.addClass('moveContent');
        this.otherHeader.removeAttribute('id');
    };
    Menu.prototype.hideMenu = function () {
        this.header.animate({ marginLeft: '0%' });
        this.menu.animate({ marginLeft: '-80%' });
        this.contentMenu.removeClass('moveContent');
        this.otherHeader.setAttribute('id', 'otherHeader');
    };
    return Menu;
}());
var Movil = /** @class */ (function (_super) {
    __extends(Movil, _super);
    function Movil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Movil;
}(App));
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Desktop;
}(App));
