import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

// import { FoodContext, FoodCardType } from '../src/components/CardMenu'

// import { useState } from 'react'


export function App() {
  // const [selectedFoodcard, setSelectedFoodcard] = useState<FoodCardType | null>(null)
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        {/* <FoodContext.Provider value={selectedFoodcard}> */}
        <Router />
        {/* <Router updateSelectedFoodcard={updateSelectedFoodcard} /> */}
        {/* </FoodContext.Provider> */}
      </BrowserRouter>
    </ThemeProvider>
  )
}
