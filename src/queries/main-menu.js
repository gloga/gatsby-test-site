import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { 
    wp: { 
      menu: { 
        menuItems
      } 
    } 
  } = useStaticQuery(graphql`
    {
      wp {
        menu(id: "TWVudToxOTM") {
          menuItems {
            nodes {
              url
              label
              menuItemId
            }
          }
        }
      }
    }
  `)
  return menuItems;
}
