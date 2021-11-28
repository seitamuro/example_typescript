# chakra-ui と framer-motion

chakra-uiとframer-motionは組み合わせて利用することができる｡
使用したいchakra-uiのコンポーネントを`motion`関数で囲むことで､framer-motionの機能が使用可能｡

```javascript
import { Box, Center } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

function App() {
  return (
    <Center>
      <MotionBox
        height="40px"
        width="40px"
        bg="red.300"
        drag="x"
        dragConstraints={{left: -100, right: 100}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </Center>
  );
}
```

# 基本的な概念

framer-motionでは､アニメーションやUIなどのエフェクトを自動的に生成するために様々な機能および概念を利用している｡

## motion components

`motion components`はframer-motionが提供するコンポーネント郡のこと｡
HTML要素とSVG要素がすべて提供されており､対応する要素と同様の動作をすることに加え､framer-motion用のプロパティが追加されている｡

`motion`関数はchakra-uiのコンポーネントを`motion component`に変換する｡

```jsx
const MotionBox = motion(Box)
```
## Animation

`motion components`は`animate prop`を通じてアニメーションを行う｡
アニメーションの動作の設定は`variant label`やその他のpropを参照して行う｡

```jsx
export const Animation = () => (
    <MotionBox
        animate={{ scale: 0.5 }}
        bg="yellow.300"
        height="40px"
        width="40px"
    />
)
```

## Gestures

`motion components`はホバー､タップ､ドラッグなどの動作(gesture)を検知することができる｡
検知したタイミングで指定された動作をする｡

```jsx
export const Gestures = () => (
    <MotionBox
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        bg="blue.300"
        height="40px"
        width="40px"
    />
)
```

## MotionValue

`MotionValue`はstateやアニメーションの速度､reactのrenderのlifecycleなどを追跡します｡
基本的に`motion components`が自動的にこれを生成し､使用しますが､明示的にこれを生成し､`motion components`のpropsにわたすこともできます｡

```jsx
const x = useMotionValue(0)
const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
export const  MotionValue = () => (
    <MotionBox
        drag="x"
        bg="blue.300"
        style={{ x, opacity }}
        height="40px"
        width="40px"
    />
)
```