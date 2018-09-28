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

在页面中添加标签，点击事件
在组件中添加点击处理事件
写用户动作
写 e2e 测试用例
ng e2e

----
以上测试都是在一个路由，因为我们没有添加路由
下面来添加一个路由，
多写一个测试

git checkout -b share4

路由注意添加路由出口
<router-outlet></router-outlet>
这里直接放首页

添加一个 login 组件
当路由为 /login 的时候
页面显示login 组件，
然后获取此组件的内容

测试演示完毕，更多 e2e 操作

http://www.protractortest.org/#/

但是这个时候因为多加了e2e测试，再次跑单元测试，报错
需要在测试用例中添加
```
//这两个必须导入
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from '../login/login.module';
//这个必须导入
import { APP_BASE_HREF } from '@angular/common';
```

```
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [AppRoutingModule,LoginPageModule], // <---
    }).compileComponents();
  }));
```
---

演示完毕

测试框架已经与 ng 脚手架集成，写起来就比较方便

下面从0开始讲测试

