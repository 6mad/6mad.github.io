---
title: test
date: 2021-04-20 17:40:30
tags:
---
## 记录错误

    ERROR: Permission to 6mad/6mad.github.io.git denied to deploy key
    fatal: Could not read from remote repository.

    Please make sure you have the correct access rights
    and the repository exists.
    FATAL Something's wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
    Error: Spawn failed
        at ChildProcess.<anonymous> (F:\进行中的项目\hexo\ddy_jxfWFI\node_modules\hexo-deployer-git\node_modules\hexo-util\lib\spawn.js:51:21)

        at ChildProcess.emit (events.js:310:20)
        at ChildProcess.cp.emit (F:\进行中的项目\hexo\ddy_jxfWFI\node_modules\cross-spawn\lib\enoent.js:34:29)
        at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)

我他喵。。。现在来看 错误应该是不该用 ssh 也就是git@github.com:6mad/6mad.github.io.git地址  
我换成 <https://github.com/6mad/6mad.github.io.git>立马就行了我吐了
