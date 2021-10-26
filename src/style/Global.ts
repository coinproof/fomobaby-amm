import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('https://res.cloudinary.com/ontraveldiary/image/upload/v1633352992/FOMOBABY/background1_oo36u2.png');
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
