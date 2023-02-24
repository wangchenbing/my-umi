export default (oldstate: any, typedata: any) => {
  //不能直接修改外部状态的值,需要进行复制
  const DATA = { ...oldstate };
  console.log(oldstate);
  switch (typedata.type) {
    case 'minus':
      DATA.count--;
      return DATA;
    case 'add':
      DATA.count++;
      return DATA;
    default:
      return oldstate;
  }
};
