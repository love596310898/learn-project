
# git commid note

``` javascript
git checkout  -b  branchName   remoteName/branchName // 拉取远程分支并创建本地分支与其建立映射关系
git push remoteName  remoteBranchName // 推送本地分支到远程
git push --set-upstream  remoteName  remoteBranchName // 推送本地分支到远程并关联此分支
git push --delete remoteName  branchName // 删除远程分支
git rm  fileName  // 删除本地文件
git rm --cached  fileName  //取消git对文件的跟踪  本地文件仍然保留
git restore  fileName // 撤销文件在工作区的修改
git restore --worktree // 撤销工作区全部修改
git restore --staged  fileName // 撤销文件暂存
git restore --staged  HEAD~1 fileName  // 文件回退到上一个commit版本
git restore --staged  headId  fileName // 文件回退到指定的commit版本
git branch  branchName // 创建分支
git branch --delete // 删除分支
git branch -a  //查看所有分支
git branch --set-upstream-to=remoteName/remoteBranchName  localBranchName // 本地分支关联一个远程分支
git remote -v  // 查看所有远程库与地址
git remote add  remoteName  remoteUrl  // 添加一个远程仓库
git remote rm remoteName  // 删除一个远程库
git stash // 存入工作区的修改（可多次存入）
git stash pop // 取出存入的修改（可指定取出某一次存入）
git marge  branchName // 合并当前分支与指定分支（pull会执行marge操作）
git rebase  banchName // 当前分支变基到指定分支（类似与marge，当前分支最终生成的结果一致，历史记录不一致）（注意：存在远程分支的情况下切勿操作变基）
git reset HEAD^ // 分支回退到上一次commit版本
git reset headId //  分支回退到指定id的commit版本
```
