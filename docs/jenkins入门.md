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

