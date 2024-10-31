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
          value : '#ffffff'
        }
      },
    },
  },
})



export const system = createSystem(defaultConfig, config);