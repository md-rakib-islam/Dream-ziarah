import getAllMenuItem from '@/services/menuService';

const MenuList = async() => {
    const menuItems = await getAllMenuItem();
    console.log("n", menuItems);
  return (
    <div>MenuList</div>
  )
}

export default MenuList;