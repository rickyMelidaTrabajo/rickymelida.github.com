class App {
    private size: number;
    private title: string;
    private menu: any;

    constructor(size: number, title: string, menu: any) {
        this.size = size;
        this.title = title;
        this.menu = menu;
    }

    setSize(newSize: number) {
        this.size = newSize;
    }

    getSize(): number {
        return this.size;
    }

    setTitle(newTitle: string) {
        this.title = newTitle;
    }

    getTitle(): string {
        return this.title;
    }

    about() {

    }

    portafolio() {

    }
    
    abilities() {

    }

    contacts() {

    }

}



class Menu {
    btnMenu: any;
    statusBtnMenu: boolean;
    menu: any;
    contentMenu: any;
    header: any;
    otherHeader: any;

    constructor(
        btnMenu: any,
        statusBtnMenu: boolean,
        menu: any,
        contentMenu: any,
        header: any,
        otherHeader: any) 
    {
        this.btnMenu = btnMenu;
        this.statusBtnMenu = statusBtnMenu;
        this.menu = menu;
        this.contentMenu = contentMenu;
        this.header = header;
        this.otherHeader = otherHeader;
    }

    setStatusBtnMenu(newStatusBtnMenu: boolean) {
        this.statusBtnMenu = newStatusBtnMenu;
    }

    getStatusBtnMenu(): boolean {
        return this.statusBtnMenu;
    }

    showMenu() {
        this.header.animate({ marginLeft: '80%' });
        this.menu.animate({ marginLeft: '0px' });
        this.contentMenu.addClass('moveContent');
        this.otherHeader.removeAttribute('id');

    }

    hideMenu() {
        this.header.animate({ marginLeft: '0%' });
        this.menu.animate({ marginLeft: '-80%' });
        this.contentMenu.removeClass('moveContent');
        this.otherHeader.setAttribute('id', 'otherHeader');
    }
}


class Movil extends App {

}

class Desktop extends App {

}