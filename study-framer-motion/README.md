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

# Animation

アニメーションに関わるプロパティの詳細について述べる｡

## animation

単純にどのような形状､どの位置に表示するかなどを指定する｡

```jsx
export const Animation = () => (
    <MotionBox
        animation={{
            x:100
        }}
    />
)
```

このとき､パラメータの指定にはkeyframeを利用することもできる｡

```jsx
export const Animation = () => (
    <MotionBox
        animation={{
            x: [0, 100, 0]
        }}
    />
)
```

keyframeに`null`を利用するとデフォルトで指定された位置の値が代入される｡このとき､デフォルトの値は`{}`で囲み､数値であることを明示的に示す必要がある｡

```jsx
export const KeyFrames = () => (
    <MotionSquareBox
        x={500}
        animate={{ x: [null, 100]}}
    />
)
```

keyframeの各キーを行う時間を指定することができる｡時間は各

```jsx
export const KeyFrames = () => (
    <MotionSquareBox
        x={500}
        animate={{ x: [null, 100, 200]}}
        transition={{ duration: 3, times: [0, 0.2, 1] }}
    />
)
```

## transition

`animation`で指定した形状にどのように変化させるかを指定する｡

```jsx
export const Transition = () => (
    <MotionSquareBox
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
    />
)
```

## Variantsの利用

使用したいanimationをvariantsという機能を利用することで､省略して利用することができる｡

```jsx
const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

export const Animation = () => {
    initial="hidden"
    animate="visible"
    variants={variants}
}
```

## propagation

`motion component`のプロパティは子要素にも引き継がれる｡これらは､子要素で再度プロパティが指定されなければ親のプロパティと同じ要素が引き継がれる｡
このとき､variantsも引き継がれる｡

```jsx
const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

export const Propagation = () => (
    <MotionList
        initial="hidden"
        animate="visible"
        variants={list}
    >
        <MotionListItem variants={item}>
            1
        </MotionListItem>
        <MotionListItem variants={item}>
            2
        </MotionListItem>
        <MotionListItem variants={item}>
            3
        </MotionListItem>
    </MotionList>
)
```

## Orchestration

`motion components`のアニメーションの実行は非同期的に行われる｡
しかし､`when`プロップに`delayChildren`や`staggerChildren`などを指定することで､アニメーションの実行タイミングを指定することができる｡

```jsx
const delayList = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren"
        }
    }
}
```

## Dynamic variants

variantsの値は`custom`プロップを利用することで指定することができる｡

```jsx
const variants = {
    visible: i => ({
        opacity: 1,
        transition: {
            delay: i * 0.3,
        },
    }),
    hidden: { opacity: 0 },
}
```

## Component animation controls

`useAnimation`を利用してアニメーションを定義することができる｡
`useAnimation`が返す値は`start`関数と`stop`関数を持ち､
この値は`motion components`の`animation`プロップにわたすことができる｡

```jsx
export const AnimationControl = () => {
    const controls = useAnimation()

    controls.start({
        x: "100%",
        backgroundColor: "#f00",
        transition: { duration: 3 },
    })

    controls.stop({
        x: "50%",
        backgroundColor: "#0f0",
        transition: { duration: 0 }
    })

    return (
        <MotionSquareBox animate={controls} />
    )
}
```

`start`関数は`Promise`を返す｡これを操作することで､`motion components`に値を渡すよりも細かくアニメーションを制御することができる｡

```jsx
const sequence = async () => {
    await menuControls.start({ x: 0})
    return await itemControls.start({ opacity: 1 })
}
```

コントロールは動的に値を決定することができる｡動的なvariantと同様に`custom`プロップを通じて値を渡すことができる｡

```jsx
const controls = useAnimation()

listControls.start(i => ({
    opacity: 0,
    x: 100,
    transition: { delay: i * 0.3},
}))

<MotionList>
    <MotionListItem custom={0} animate={listControls}>
        1
    </MotionListItem>
    <MotionListItem custom={1} animate={listControls}>
        2
    </MotionListItem>
    <MotionListItem custom={2} animate={listControls}>
        3
    </MotionListItem>
</MotionList>
```