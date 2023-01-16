/* 
reducer的本质就是一个函数
reducer函数会按照两个参数(preState行为,action动作)
*/
//引入constant.js定义好的常量值

const initState: number = 0
export const countRducer = (preState = initState, action: any) => {
  console.log(preState);
  const { type, data } = action;
  console.log(action)
  switch (type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    default:
      return preState
  }
};
