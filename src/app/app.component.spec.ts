import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
//这两个必须导入
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from '../login/login.module';
//这个必须导入
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [AppRoutingModule,LoginPageModule], // <---
    }).compileComponents();
  }));
  it('期待数组等于排序后的数组', async(() => {
    const appService = new AppService();
    expect(appService.sort([3, 9, 1, 0])).toEqual([0, 1, 3, 9]);
  }));
  it('期待函数等于3', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.add(1, 2)).toEqual(3);
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'my-ng6-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-ng6-app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-ng6-app!');
  }));
});
