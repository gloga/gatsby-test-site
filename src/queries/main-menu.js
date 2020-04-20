import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const {
    wp: {
      menus: {
        nodes
      }
    }
  } = useStaticQuery(graphql`
    {
      wp {
        menus(first: 200) {
          nodes {
            id
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
    }
  `)

  return nodes.filter(node => node.id === process.env.GATSBY_MAIN_MENU_ID)[0];
}
