
# git commid note

``` javascript
git commit --amend //追加至上次提交
git checkout branchName //切换分支
git checkout remoteBranchname // 在本地创建同名分支并切换到该分支，同时与其建立追踪关系
git checkout  -b  branchName   remoteName/branchName // 创建本地分支并切换到该分支，同时设置远程的追踪分支
git push remoteName  remoteBranchName // 推送本地分支到远程
git push --set-upstream  remoteName  remoteBranchName // 推送本地分支到远程并关联此分支
git push --delete remoteName  branchName // 删除远程分支
git rm  fileName  // 删除本地文件
git rm --cached  fileName  //取消git对文件的跟踪  本地文件仍然保留
git mv oldFileName newFileName // git对大小写不敏感 修改名称时如果只是大小写变化，使用此命令（其利用临时文件来完成重命名）
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
git reset HEAD^ // 分支回退到上一次commit版本
git reset headId //  分支回退到指定id的commit版本
git marge  branchName // 合并当前分支与指定分支（pull会执行marge操作）
git rebase  banchName
/**
 * 将当前分支变基到指定分支（ pull --rebase会执行变基操作）
 * 变基操作相当于丢弃当前分支的提交，将其合并到指定分支生成新的提交记录，并将其设置为当前分支的基础
 * 指定分支在执行marge命令，快进到变基产生的提交记录，至此两个分支完全相同
 * ！！！切记（永远不要在存在副本的分支执行变基操作）
 */
git rebase --onto targetBranch baseBranch sourceBranch // 将源分支与基础分支之间的校验和提交到目标分支
```
