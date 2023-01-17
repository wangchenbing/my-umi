export const listData = [
  { policyName: '市级类型1', key: 1, areaType: 1, policyType: '类型1' },
  { policyName: '市级类型2', key: 2, areaType: 1, policyType: '类型2' },
  { policyName: '区县类型1', key: 3, areaType: 2, policyType: '类型1' },
  { policyName: '区县类型2', key: 4, areaType: 2, policyType: '类型2' },
  { policyName: '省级类型1', key: 5, areaType: 3, policyType: '类型1' },
]
export const typeList1 = [
  {
    name: '全部',
    key: 0
  },
  {
    name: '市级',
    key: 1
  },
  {
    name: '区县',
    key: 2
  },
]
export const typeList2 = [
  {
    name: '全部',
    key: null
  },
  {
    name: '类型1',
    key: '类型1'
  },
  {
    name: '类型2',
    key: '类型2'
  },
]
export interface ParamsData {
  areaType: number;
  policyType: any;
}
