import { gql } from "@apollo/client";

export const Sidebar = `
  
categories: categories(where: {hideEmpty: true}) {
      nodes {
        description
        name
    }
  }
   
`
export const GET_SIDEBAR = gql`
query GET_SIDEBAR {
  ${Sidebar}
}
`