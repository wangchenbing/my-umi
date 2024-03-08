import { useEffect, useState } from 'react';
import localMsg from '../tagMsg';

const ComA = () => {
  const [payloaddata, setpayloaddata] = useState('');

  useEffect(() => {
    localMsg.listen((type: any, payload: any) => {
      if (type === 'sendMsg_data') {
        console.log(type);
        console.log(payload);
        setpayloaddata(payload);
      }
    });
    return () => {
      localMsg.delete('sendMsg_data');
    };
  }, []);

  return (
    <div>
      <h2>组建A</h2>
      <h3>跨窗口数据:{payloaddata}</h3>
      <h3>
        本地数据:
        {
          JSON.parse(
            localStorage.getItem('sendMsg_data')
              ? localStorage.getItem('sendMsg_data')
              : '',
          )?.payload
        }
      </h3>
    </div>
  );
};

export default ComA;
