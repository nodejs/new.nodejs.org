---
layout: about.hbs
title: 工作组
---
# 核心工作组
<!-- Information here should mostly mirror: https://github.com/nodejs/node/blob/master/WORKING_GROUPS.md -->

核心工作组由 [ 技术指导委员会(TSC)](https://github.com/nodejs/TSC/blob/master/TSC-Charter.md) 创建。

## 现有工作组

* [Website](#website)
* [Streams](#streams)
* [Build](#build)
* [Diagnostics](#diagnostics)
* [i18n](#i18n)
* [Evangelism](#evangelism)
* [Docker](#docker)
* [Addon API](#addon-api)
* [Benchmarking](#benchmarking)
* [Post-mortem](#post-mortem)
* [Release](#release)

### [Website](https://github.com/nodejs/nodejs.org)

WebSite 工作小组的目的旨在构建和维护一个 Node.js 项目的公共网站。

承担职责：
* 为 nodejs.org 开发以及维护一个构建以及自动化系统。
* 确保网站随着 Node.js 的一些更改而定期更新，诸如新发布和新特性。
* 培养和扶持译者群体。

### [Streams](https://github.com/nodejs/readable-stream)

流工作组致力于支持和改进 Node.js 中使用的流 API 和 npm 生态系统。我们寻求创建一个可组合的 API，解决了在一段时间内以人性化、低开销的方式表示多个事件发生的问题。对 API 的改善将由生态系统的需要所驱动；与其它解决方案和以前版本的互操作性和向后兼容性至关重要。

承担职责：
* 解决在 Node.js 问题列表上的流问题。
* 在 Node.js 项目中创作和编辑流文档。
* 审阅 Node.js 中关于流的子类的更改。
* 将对流的更改重定向从 Node.js 的项目到本项目中。
* 在 Node.js 中协助实现流的提供。
* 推荐在 Node.js 中包含 `readable-stream` 不同版本。
* 及时向社区发声，告知流的未来发展。

### [Build](https://github.com/nodejs/build)

建立工作组的目的是创建和维护分布式自动化基础结构。

承担职责：
* 为所有目标平台生成包。
* 运行测试。
* 运行性能测试以及比较。
* 创建且管理编译环境。

### [Diagnostics](https://github.com/nodejs/diagnostics)

诊断工作组的目的是提供一组全面的、文档化的和可扩展的诊断接口，供 Node.js 和 JavaScript 的虚拟机使用。

承担职责：
* 与 V8 协作，集成 `v8_inspector` 入 Node.js 中。
* 与 V8 协作，集成 `trace_event` 入 Node.js 中。
* 与 Nodejs 核心协作，完善 `async_wrap` 与 `async_hooks`。
* 维护与提升、跟踪系统集成（如：ETW, LTTNG, dtrace）。
* 在 Node.js 及其组件中记录诊断功能和 API。
* 探索机会和差距并讨论功能请求，解决 Node.js 中的冲突。
* 培养 Node.js 的诊断工具生态系统。

### i18n

i18n 工作组处理的不仅仅是翻译。他们是社区成员，用他们各自的语音与他们各自的小组成员交流。

每一个团队都围绕着一个共同的口语组织。然后，每个语言社区可能会为各种项目资源生成多个定位。

承担职责：
* 翻译任何他们认为与他们的社区相关的 Node.js 材料。
* 审查保持翻译的最新和高质量的过程。
* 管理和监控他们语言中的社交媒体频道。
* 促进 Node.js 发声，并为用他们的语言进行会议。

每个语言社区都维护自己的成员资格。

* [nodejs-ar - Arabic (العَرَبِيَّة)](https://github.com/nodejs/nodejs-ar)
* [nodejs-bg - Bulgarian (български)](https://github.com/nodejs/nodejs-bg)
* [nodejs-bn - Bengali (বাংলা)](https://github.com/nodejs/nodejs-bn)
* [nodejs-zh-CN - Chinese (中文)](https://github.com/nodejs/nodejs-zh-CN)
* [nodejs-cs - Czech (Čeština)](https://github.com/nodejs/nodejs-cs)
* [nodejs-da - Danish (Dansk)](https://github.com/nodejs/nodejs-da)
* [nodejs-de - German (Deutsch)](https://github.com/nodejs/nodejs-de)
* [nodejs-el - Greek (Ελληνικά)](https://github.com/nodejs/nodejs-el)
* [nodejs-es - Spanish (Español)](https://github.com/nodejs/nodejs-es)
* [nodejs-fa - Persian (فارسی)](https://github.com/nodejs/nodejs-fa)
* [nodejs-fi - Finnish (Suomi)](https://github.com/nodejs/nodejs-fi)
* [nodejs-fr - French (Français)](https://github.com/nodejs/nodejs-fr)
* [nodejs-he - Hebrew (עברית)](https://github.com/nodejs/nodejs-he)
* [nodejs-hi - Hindi (हिन्दी)](https://github.com/nodejs/nodejs-hi)
* [nodejs-hu - Hungarian (Magyar)](https://github.com/nodejs/nodejs-hu)
* [nodejs-id - Indonesian (Bahasa Indonesia)](https://github.com/nodejs/nodejs-id)
* [nodejs-it - Italian (Italiano)](https://github.com/nodejs/nodejs-it)
* [nodejs-ja - Japanese (日本語)](https://github.com/nodejs/nodejs-ja)
* [nodejs-ka - Georgian (ქართული)](https://github.com/nodejs/nodejs-ka)
* [nodejs-ko - Korean (한국어)](https://github.com/nodejs/nodejs-ko)
* [nodejs-mk - Macedonian (Македонски)](https://github.com/nodejs/nodejs-mk)
* [nodejs-ms - Malay (بهاس ملايو‎)](https://github.com/nodejs/nodejs-ms)
* [nodejs-nl - Dutch (Nederlands)](https://github.com/nodejs/nodejs-nl)
* [nodejs-no - Norwegian (Norsk)](https://github.com/nodejs/nodejs-no)
* [nodejs-pl - Polish (Język Polski)](https://github.com/nodejs/nodejs-pl)
* [nodejs-pt - Portuguese (Português)](https://github.com/nodejs/nodejs-pt)
* [nodejs-ro - Romanian (Română)](https://github.com/nodejs/nodejs-ro)
* [nodejs-ru - Russian (Русский)](https://github.com/nodejs/nodejs-ru)
* [nodejs-sv - Swedish (Svenska)](https://github.com/nodejs/nodejs-sv)
* [nodejs-ta - Tamil (தமிழ்)](https://github.com/nodejs/nodejs-ta)
* [nodejs-tr - Turkish (Türkçe)](https://github.com/nodejs/nodejs-tr)
* [nodejs-zh-TW - Taiwanese (國語)](https://github.com/nodejs/nodejs-zh-TW)
* [nodejs-uk - Ukrainian (Українська)](https://github.com/nodejs/nodejs-uk)
* [nodejs-vi - Vietnamese (Tiếng Việt)](https://github.com/nodejs/nodejs-vi)

### [Evangelism](https://github.com/nodejs/evangelism)

布道工作小组促进 Node.js 的成就，让社区知道他们如何参与。

承担职责：
* 促进项目消息传递。
* 管理官方项目社会媒体。
* 处理并促进会议的发言者。
* 处理社区事件。
* 发布定期更新摘要和其它促销内容。

### [Docker](https://github.com/nodejs/docker-node)

Docker 工作组的目的是为节点建立、维护和改进官方的 Docker 镜像。

承担职责：
* 保持官方 Docker 镜像与新 Node.js 版本的更新一致。
* 决定以及实现新镜像的实现（修复）。
* 维护与更新镜像的相关文档。

### [Addon API](https://github.com/nodejs/nan)

插件 API 工作组负责在 npm 中维护 NAN 项目和相应的 _nan_ 包。NAN 项目为 Node.js 的本机加载项作者提供了一个抽象层，协助编写与许多活跃使用的 Node.js，V8 和 libuv 版本兼容的代码。

承担职责：
* 维护 [NAN](https://github.com/nodejs/nan) Git 仓库，包含代码、议题以及文档。
* 维护 [addon-examples](https://github.com/nodejs/node-addon-examples) Git 仓库，包含代码、议题以及文档。
* 维护在 Node.js 项目中从属于 Node.js TSC 的 C++ 插件。
* 维护在 Node.js 项目中从属于 Node.js TSC 的 文档。
* 维护 npm 中的 _nan_ 包，在合适的时候发布新版本。
* 传递有关 Node.js 和 NAN 接口的未来消息，给社区提前通知变更。

目前成员列表可以在 [README](https://github.com/nodejs/nan#collaborators) 中找到。

### [Benchmarking](https://github.com/nodejs/benchmarking)

基准工作组的目的是取得共识商定的基准，这些基准可用于：

* 在不同 Node.js 版本中跟踪和传播主要的性能等福音。
* 避免版本之间的性能回归。

承担职责：
* 确定反映客户使用情况的1个或多个基准。可能需要多于一个来覆盖典型 Node.js 用例，包括低滞后和高并发性。
* 在选定的名单上努力获得社区共识。
* 将所选基准的常规执行添加到 Node.js 构建。
* 跟踪 / 宣传生成 / 发布之间的性能。

### [Post-mortem](https://github.com/nodejs/post-mortem)

善后工作组致力于支持和改进 Node.js 的事后调试。它旨在提升对节点的事后调试的作用，协助技术和工具的开发，并使技术和工具已知并可用于 Node.js 用户。

承担职责：
* 定义和添加接口（API），以允许在需要时生成转储。
* 为生成的转储定义和添加公共结构，为了支持那些想内省转储的工具。

### [Release](https://github.com/nodejs/LTS)
发布工作小组管理 Node.js 的发布工作。

承担职责：
* 定义发布流程。
* 定义发布内容。
* 生成创建发布包。
* 对于发布的测试。
* 管理长期支持和现有分支，包括反向移植对这些分支的更改。
* 定义用于释放流的 backported 的策略。
