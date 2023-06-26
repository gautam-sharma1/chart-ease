// import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';

// import React from 'react'
// const MENU_ID = 'blahblah';

// export default function ContextMenu() {
//     const { show } = useContextMenu({
//         id: MENU_ID,
//       });
    
//       function handleContextMenu(event){
//           show({
//             event,
//             props: {
//                 key: 'value'
//             }
//           })
//       }
    
//       // I'm using a single event handler for all items
//       // but you don't have too :)
//       const handleItemClick = ({ id, event, props }) => {
//         switch (id) {
//           case "copy":
//             console.log(event, props)
//             break;
//           case "cut":
//             console.log(event, props);
//             break;
//           //etc...
//         }
//       }
    
//       return (
//         <div>
//         <p onContextMenu={handleContextMenu}>lorem ipsum blabladhasi blaghs blah</p>  
//         <Menu id={MENU_ID}>
//           <Item id="copy" onClick={handleItemClick}>Copy</Item>
//           <Item id="cut" onClick={handleItemClick}>Cut</Item>
//           <Separator />
//           <Item disabled>Disabled</Item>
//           <Separator />
//           <Submenu label="Foobar">
//             <Item id="reload" onClick={handleItemClick}>Reload</Item>
//             <Item id="something" onClick={handleItemClick}>Do something else</Item>
//           </Submenu>
//         </Menu>
//         </div>
//       );
//   )
// }
