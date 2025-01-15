export interface HeaderMenuItem{
    id:string,
    title:string,
    path:string
}
export interface Logo{
    path:string
}
export interface HeaderProps{
    menuItems:HeaderMenuItem[],
    
}
export interface BurgerMenuProps{
    menuItems:HeaderMenuItem[],
    onClose: () => void,
    isOpen: boolean
}