import { createSystem,defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { 
          main : {
            value: "#1E2938" , 

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