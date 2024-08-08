# nvm的安装和使用
## nvm 的安装过程
1. 使用cURL 或者 Wget命令安装
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
如果电脑中未安装过git，mac会提醒你，当前未安装git，跟随提示把git进行安装即可
git 安装后，再次执行cURL 或者 Wget命令即可
2. 添加以下命令添加到 ~/.bash_profile 、 ~/.zshrc文件中
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
```
// 进入.nvm 目录
cd ~/.nvm
// 打开.zshrc文件，如果没有.zshrc文件就touch一个
open  ~/.zshrc
// 然后将下面的命令添加进去
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
// 保存后关闭，然后执行下面命令
source ~/.zshrc
```
针对.bash_profile是同样的操作

以上是我安装的过程，如果有其他问题，可以去这里查看[GitHub-nvm](https://github.com/nvm-sh/nvmm)
## nvm的基本常用命令
|  命令   | 描述  | 命令简写  |
|  ----  | ----  | ----  |
| nvm —version  | 查看 nvm 版本 | nvm -v |
| nvm ls-remote  | 查看可以安装哪些版本（全部） | |
| nvm ls-remote --lts  | 只查看长期支持 LTS 版本 | |
| nvm install < version >  | 安装指定版本 |  |
| nvm uninstall < version >  | 卸载指定版本 |  |
| nvm install --lts  | 安装最新的 node LTS 版本 | |
| nvm list  | 查看已安装的 node | nvm ls |
| nvm current | 查看当前使用的 node 版本 | |
| nvm use < version >  | 指定当前使用某个node 版本 | |
## 常见问题集合
1. 关掉终端，重新打开终端再次执行node -v 会报错找不到，执行nvm current发现返回的是none，因为没有指定默认版本，执行下面的命令  
``` 
nvm alias default v14.16.1 
```
默认使用一个已有的node版本