### yarn

### yarn start

### yarn add styled-components 样式组件

#### createGlobalStyle 全局样式
1. 创建style.js
2. 引入 import { createGlobalStyle } from 'styled-components'
3. createGlobalStyle`` 全局样式放在createGlobalStyle里面
```
style.js
export const GolbalStyle = createGlobalStyle``

App.js
import { GolbalStyle } from './style'
<GolbalStyle/>
```

### 图标文件
1. @font-face 加相对路径，前面带data不用加
2. iconfont.css改成iconfont.js

### yarn add react-transition-group 动画

### yarn add redux  全局状态管理

### yarn add react-redux    react和redux进行连接

### yarn add redux-thunk   action和store中间件，进行异步操作

### yarn add immutable  最流行的不可变数据结构的实现之一   
1. 生成一个immutable对象
2. 返回一个全新的对象


### yarn add redux-immutable   整个reducer的store作为不可变数据     


### yarn add react-router-dom

### yarn add react-loadable 代码分割

### 打包完后index.html的路径问题
打包前在package.json文件里添加一个配置："homepage":".",，打包之后资源文件路径前面都会加上一个点，然后在执行yarn build

```
{
  "name": "xxx",
  "version": "0.1.0",
  "private": true,
  "homepage":".",
  "dependencies": { ....
  }
```

