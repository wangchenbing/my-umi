export const btnList = [
  {
    name: 'index.tsx',
    url: require('!raw-loader!@/components/ReduxCom')
  },
  {
    name: 'store.ts',
    url: require('!raw-loader!@/components/ReduxCom/redux/store.ts')
  },
  {
    name: 'reducer.ts',
    url: require('!raw-loader!@/components/ReduxCom/redux/count_reducer.ts')
  },
  {
    name: 'action.ts',
    url: require('!raw-loader!@/components/ReduxCom/redux/count_action.ts')
  },
]