[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

一个支持多端、多版本数据统计的JavaScript代码覆盖率工具

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

```js
  Islin.reportCoverage({
    dsn:'http://xxx.xxx/api/v1/coverage/client',
    projectConfig:{
        projectName:'myProjectName',
        commitSha:'06e86e732e942c879a80fa8a0c65c156be2c8a21',
        projectId:999,
        coverage: window.__coverage__,
    }
})
```



## ✨特性

- 🌈 支持多端，H5、小程序、RN。
- ⚙️ 支持多版本覆盖率收集。
- 📦 开箱即用，只需要配置项目的基本信息即可。
- 🛡 支持自托管 Islin。

## 快速开始

The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

Install the executable. The executable's major version will match Express's:

## 📦 babel-plugin-istanbul安装


```bash
npm install --save-dev babel-plugin-istanbul
```

这段代码表示env为test时istanbul插件生效:
```json
{
    "env": {
        "test": {
            "plugins": [ "istanbul" ]
        }
    }
}
```
具体请阅读 [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) 文档


## 🔨 示例

根据需要选择 islin 安装位置
```bash
npm install --save-dev islin
```

结合UI自动化测试的例子
```js
// 在UI自动化case项目中编写上报代码
// 需要在每个页面case结束时，获取当前页面的window.__coverage__对象，将覆盖率上报。
Islin.reportCoverage({
    dsn:'http://xxx.xxx/api/v1/coverage/client',
    projectConfig:{
        projectName:'myProjectName',
        commitSha:'06e86e732e942c879a80fa8a0c65c156be2c8a21',
        projectId:999,
        coverage: __coverage__,
    }
})

// 在前端项目内编写上报代码
// 此时UI自动化case中只需要触发该函数即可。
window.postCoverage = function () {
    Islin.reportCoverage({
        dsn:'http://xxx.xxx/api/v1/coverage/client',
        projectConfig:{
            projectName:'myProjectName',
            commitSha:'06e86e732e942c879a80fa8a0c65c156be2c8a21',
            projectId:999,
            coverage: __coverage__,
        }
    })
}
```

亦手工测试(提供 [Chrome Extension](https://www.npmjs.com/package/islin) ，无需安装islin)


## License

[MIT](LICENSE)


[npm-image]: https://img.shields.io/npm/v/islin.svg
[npm-url]: https://www.npmjs.com/package/islin
[downloads-image]: https://img.shields.io/npm/dm/islin.svg
[downloads-url]: https://npmcharts.com/compare/islin?minimal=true