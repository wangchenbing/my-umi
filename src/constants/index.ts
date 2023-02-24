import Com from '@/components';
import ReactCom from '@/components/ReactList';

const path = 'components/';
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
    component: Com.GetMd5Module,
  },
  {
    title: '文本拷贝',
    component: Com.CopyModule,
  },
  {
    title: '动态验证码',
    component: Com.VerificationCodeModule,
  },
  {
    title: 'Redux使用',
    component: Com.ReduxComModule,
  },
  {
    title: 'CodeMirror',
    component: Com.CodemirrorModule,
  },
  {
    title: 'Storage',
    component: Com.StorageModule,
  },
  {
    title: '终止promise',
    component: Com.AboutModule,
  },
];

export const REACTHOOKSLIST = [
  {
    title: 'useReducer',
    component: ReactCom.useReducer,
  },
];
