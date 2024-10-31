import { createSystem,defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { 
          main : {
            value: "#FFBF1F" , 
          },
        },
        white: {
          value : '#fefefe'
        },
        grey : {
          100 : {
            value:'#f3f4f6'
          },
          200 : {
            value : '#b0b9c2'
          },
          300 : {
            value : '#3d4450'
          }
        },
        blacked : {
          100 : {
            value : '#18171c'
          },
          200 : {
            value : '#101012'
          }
        }
      },
    },
    semanticTokens: {
      colors : {
        bg : {
          light : {
            value : "{colors.grey.100}"
          },
          dark : {
            value : '{colors.blacked.200}'
          }
        },
        card : {
          light : {
            value : "{colors.white}"
          },
          dark : {
            value : '{colors.blacked.100}'
          }
        },
        text: {
          light : {
            value : "{colors.grey.300}"
          },
          dark : {
            value : "{colors.white}"
          }
        }
      }
 
    }
  },
})



export const system = createSystem(defaultConfig, config);