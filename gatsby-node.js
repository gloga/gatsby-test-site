const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions

    const result = await graphql(`
        {
            wp {
                pages(first: 200) {
                    nodes {
                        slug
                        id
                    }
                }
            }
        }
    `
    )

    result.data.wp.pages.nodes.forEach((node) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/page.js`),
            context: {
                id: node.id,
            },
        })
    })
}
