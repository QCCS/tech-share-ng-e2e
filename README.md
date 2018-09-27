# tech-share-ng-e2e
angular对测试集成比较好，
我这边直接用 ng-cli 演示

环境准备

nvm use 9
npm install -g @angular/cli
ng new tech-share-ng-e2e

环境准备好之后，
先看单元测试

git checkout -b share1

跑几个命令

ng serve
ng test
ng e2e

可以看见脚手架自带的测试

---

然后写两个单元测试
1.组件方法 ：两个数相加
2.组件service :数组排序

git checkout -b share2

ng test

----

然后写几个 e2e 测试
git checkout -b share3
