import React from 'react'
import MenuCard from '../MenuCard/MenuCard'
function MenuList({
  selectedMenu,
  selectedAllergens,
  menuItemAllergens,
  allergens,
}) {
  return (
    <div
      className='menu-card-class'
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {selectedMenu.map((card, index) => (
        <MenuCard
          key={card.item_id}
          index={index}
          card={card}
          selectedAllergens={selectedAllergens}
          menuItemAllergens={menuItemAllergens}
          allergens={allergens}
        />
      ))}
    </div>
  )
}
export default MenuList
