#### 1.docker 基本命令

```shell
docker version # 查看docker版本
docker info # 查看docker信息
docker search # 搜索镜像
docker pull # 下载镜像
docker images # 查看本地镜像
docker rmi # 删除镜像
docker run # 运行镜像
docker ps # 查看正在运行的容器
docker stop # 停止容器
docker start # 启动容器
docker restart # 重启容器
docker rm # 删除容器
docker logs # 查看容器日志
docker exec # 在容器中执行命令
docker cp # 在容器和宿主机之间复制文件
docker commit # 提交容器副本使之成为一个新的镜像
docker tag # 标记镜像
docker build # 创建一个新的镜像
docker push # 上传镜像
docker pull # 下载镜像
docker save # 保存镜像为 tar 文件
docker load # 从 tar 文件中加载镜像
docker export # 导出容器为一个 tar 文件
docker import # 从 tar 文件中导入为镜像
docker network # 管理网络
docker volume # 管理数据卷
docker compose # 管理多容器应用
docker swarm # 管理 Docker 集群
docker machine # 管理虚拟机
docker stack # 管理 Docker 堆栈
docker secret # 管理敏感数据
docker service # 管理 Docker 服务
docker system # 管理 Docker 系统
docker trust # 管理镜像签名
docker info # 查看 Docker 信息
docker version # 查看 Docker 版本
docker login # 登录 Docker 仓库
docker logout # 登出 Docker 仓库
```

#### 2.docker compose基本命令 详细参考 https://docs.docker.com/compose/reference/

```shell
docker-compose up # 启动所有服务
docker-compose down # 停止并删除所有服务
docker-compose restart # 重启所有服务
docker-compose build # 构建所有服务
docker-compose pull # 拉取所有服务镜像
docker-compose push # 推送所有服务镜像
docker-compose ps # 查看所有服务状态
docker-compose logs # 查看所有服务日志
docker-compose exec # 在容器中执行命令
docker-compose cp # 在容器和宿主机之间复制文件   
docker-compose config # 验证和查看 compose 文件
docker-compose create # 创建所有服务容器
docker-compose start # 启动所有服务
docker-compose stop # 停止所有服务
docker-compose restart # 重启所有服务
docker-compose rm # 删除所有服务容器
docker-compose pause # 暂停所有服务
docker-compose unpause # 恢复所有服务
```

#### 3.docker的Dockerfile 详细参考 https://docs.docker.com/engine/reference/builder/

```shell
FROM # 基础镜像
MAINTAINER # 镜像维护者
RUN # 容器构建时执行的命令
COPY # 将宿主机文件复制到镜像中
ADD # 将宿主机文件复制到镜像中
WORKDIR # 设置工作目录
VOLUME # 设置数据卷
EXPOSE # 暴露端口
CMD # 容器启动时执行的命令
ENTRYPOINT # 容器启动时执行的命令
ENV # 设置环境变量
```