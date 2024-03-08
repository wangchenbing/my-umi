import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { getFileMd5 } from './utils'
import TemplateCom from '@/components/Globol/TemplatCom';

export default (props: any) => {
  const [md5data, setmd5data] = useState<string>('');

  const uploadData = {
    beforeUpload: async (file: any) => {
      let md5: any = await getFileMd5(file);
      setmd5data(md5);
    },
    onRemove: () => {
      setmd5data('');
    },
  };

  return (
    <div>
      <TemplateCom {...props}>
        <Upload {...uploadData}>
          <Button>请选择文件</Button>
        </Upload>
        <p>MD5:{md5data}</p>
      </TemplateCom>
    </div>
  );
};
