export default [
  {
    name: 'index.tsx',
    url: require('!raw-loader!@/pages/List/component/ReduxCom')
  },
  {
    name: 'store.ts',
    url: require('!raw-loader!@/pages/List/component/ReduxCom/redux/store.ts')
  },
  {
    name: 'reducer.ts',
    url: require('!raw-loader!@/pages/List/component/ReduxCom/redux/count_reducer.ts')
  },
  {
    name: 'action.ts',
    url: require('!raw-loader!@/pages/List/component/ReduxCom/redux/count_action.ts')
  },
]