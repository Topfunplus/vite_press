# jenkins入门



#### 1.首先 去官网下载war包

```shell
https://www.jenkins.io/download/

wget https://get.jenkins.io/war-stable/2.462.1/jenkins.war
```

#### 2.下载好了war包后，跑起来

```shell
tar -xszf jenkins.war.bin.zip #随便打的 按照下载的文件名来解压
java -jar jenkins.war  
```

#### 3.在8080端口进行配置

```shell
首先 Manage Jenkis 中 下载 maven集成插件 直接搜索maven
然后配置一下maven  记一下maven的路径
```

#### 4.新建item

````shell
【尚硅谷】Jenkins教程（从配置到实战）
````

#### 5.如果推送出问题，那么就多推送几次


```js
git push
```


#### 6.jenkins配置node

```shell
1.首先 去官网下载node的插件
2.然后 指定node的包,包去node的官网下载源码即可
3.然后 配置一下node的路径
4.选择自由项目,配置gitHooks
5.构建步骤就填写正常的打包node项目和跑node项目的流程就可以
```

#### 7. 另外 关于jenkins的路径

```shell
1.jenkins的路径是 /software/jenkins.war 启动这个war包就行
2.所有的项目都放在了/projects下
3.所有的构建项目都放在了/jenkins_build下
4.所有下载的软件都放在了/software下
5.jenkins的工程路径 /root/.jenkins/workspace/

以下ai生成
6.jenkins的配置文件路径 /root/.jenkins/config.xml
7.jenkins的日志路径 /root/.jenkins/logs/
8.jenkins的插件路径 /root/.jenkins/plugins/
9.jenkins的插件下载路径 /root/.jenkins/updates/
10.jenkins的插件备份路径 /root/.jenkins/updates/backup/
11.jenkins的插件缓存路径 /root/.jenkins/updates/cache/
```


## jenkins一个可行的运行步骤

1.首先官网下载war包，解压放在自己的目录下
2.java -jar 跑起来
3.配置一下maven,指定maven的路径
4.新建item,配置一下gitHooks
