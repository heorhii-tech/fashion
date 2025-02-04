export interface HeaderMenuItem{
    id:string,
    title:string,
    path:string
}
export interface Logo{
    path:string
}

export interface BurgerMenuProps{
    menuItems:HeaderMenuItem[],
    onClose: () => void,
    isOpen: boolean
}