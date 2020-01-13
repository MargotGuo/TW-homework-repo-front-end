# To get access to the Project Manager:

1. clone or download this repository

2. install all dependencies

   ```bash
   npm install
   ```

3. execute mock server

   ```bash
   npm run start
   ```

4. open `index.html` in browser

# User story

- 实时统计模块
  - [x] AC1 - 作为用户，当我打开页面时，我可以看到顶部四个卡片，分别展示相应的「所有任务」「未解决」「处理中」「已解决」，详情信息可见mockup图，效果要求完全和“效果图.png”一样。
  - [x] AC2 - 在完成这张卡的时候，相应卡片中的数据可以写死，在后面的卡片中会把数据改成实时统计的
- 项目列表
  - [x] AC1 - 作为用户，当我打开页面时，我可以在实时卡片下面看到「项目列表」，其中展示「项目名称」「项目描述」「截止时间」「状态」「操作」的相关信息
  - [x] AC2 - 项目描述中要求最多只展示两行内容，多余的用省略号代替，当我的鼠标移上去时可以看到所有内容
  - [x] AC3 - 我看到项目的状态分别有三种状态「ACTIVE」「PENDING」「CLOSED」，不同的状态有不同的颜色
  - [x] AC4 - 数据需要使用 ajax 请求 API 获得，请根据文件中给出的 README.md 中的指示，启动 server,完成相应的数据请求
  - [x] AC5 - 作为用户，当我看到「项目列表」时，『实时统计板块』的任务统计应该是保持和列表同步的。ACTIVE 代表 未解决的、PENDING 代表处理中的、CLOSED 代表已解决的
- 删除项目
  - [x] AC1 - 作为用户，当我点击某一行的删除按钮的时候，会弹出如图所示位于页面正中间的弹窗，弹窗提示我”确认删除该项目吗？“，并且底部可以看到两个按钮「确认」「取消」，右上角有个”X“按钮。
  - [x] AC2 - 作为用户，当我点击”X“ 或者「取消」按钮时，直接关闭弹窗
  - [x] AC3 - 作为用户，当我点击「确认」按钮时，从页面中删除该栏数据和使用AJAX删除db.json中的该条数据，并且关闭弹窗
  - [x] AC4 - 作为用户，当我删除一条数据时，「实时统计板块」的数据应该是同步更新的

### front-end-evaluation

> 此库为非计培训前端测评的 homework, 根据 db.json 中的数据，实现效果图中的效果

#### 测评要求
    - 根据给定的 story 卡的内容和效果图，尽可能100%的还原
    - 尽可能的完成所有的 story 卡，以便获得更高的分数
    - 在线下pair前，提前准备好演示环境， 以便节约你的 pair 时间
    - 因为有删除操作，建议线下编码的过程中，先备份 db.json 中的数据
    - 注意编码规范

#### 项目 Story

[查看story卡](https://trello.com/invite/b/V4iT85Es/f2db24c52497ac0bf90addc758a1601d/%E9%9D%9E%E8%AE%A1%E5%9F%B9%E8%AE%AD%E5%89%8D%E7%AB%AF%E6%B5%8B%E8%AF%84-homework)

> 备注：如果需要做项目管理，请自行复制该看板到自己的trello中

#### 启动 mock-server 服务

1. 安装 [json-server](https://github.com/typicode/json-server)
> npm install -D json-server

1. 执行 mock sever:
> npx json-server --watch db.json
