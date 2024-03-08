import Com from '@/pages/List/component';
import reduxFils from '@/pages/List/component/ReduxCom/enumer'

const path = 'pages/List/component/';
export const DEFAULT_NAME = [
  {
    title: '获取html文本',
    FileName: `${path}InnerHTML`,
    component: Com.InnerHTMLModule,
  },
  {
    title: '纯前端筛选',
    FileName: `${path}ScreenModule`,
    component: Com.ScreenModule,
  },
  {
    title: '获取文件的MD5值',
    FileName: `${path}GetMd5`,
    btnList: [
      {
        name: 'index.tsx',
        url: require('!raw-loader!@/pages/List/component/GetMd5')
      },
      {
        name: 'utils.ts',
        url: require('!raw-loader!@/pages/List/component/GetMd5/utils.ts')
      }
    ],
    component: Com.GetMd5Module,
  },
  {
    title: '文本拷贝',
    FileName: `${path}Copy`,
    component: Com.CopyModule,
  },
  {
    title: '动态验证码',
    FileName: `${path}VerificationCode`,
    component: Com.VerificationCodeModule,
  },
  {
    title: 'Redux使用',
    FileName: `${path}ReduxCom`,
    component: Com.ReduxComModule,
    btnList: reduxFils
  },
  {
    title: 'CodeMirror',
    FileName: `${path}Codemirror`,
    component: Com.CodemirrorModule,
  },
  {
    title: 'Storage',
    FileName: `${path}Storage`,
    component: Com.StorageModule,
  },
  {
    title: '终止promise',
    FileName: `${path}AboutController`,
    component: Com.AboutModule,
    warningList: '注意，请使用低速3G测试，并查看网络请求状态！',
  },
];

