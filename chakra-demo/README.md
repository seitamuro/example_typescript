# インストール

chakra-uiをインストールする｡npmを使って以下のモジュールをインストールする｡

```
npm install --save @chakra-ui/core@10.0.0 @emotion/core@10.0.0 @emotion/styled@10.0.0 emotion-theming
```

emotionの最新版にReactが対応していないので､バージョンを10.0.0に指定している｡

# 初期化

はじめに､`/api/_app.js`のを以下のように編集する｡

```
import '../styles/globals.css'
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
)}

export default MyApp
```

`ThemeProvider`コンポーネントを使い､chakra-uiが提供するテーマを利用するようにしている｡`CSSRset`コンポーネントを使い､はじめに使われていたCSSをリセットしている｡