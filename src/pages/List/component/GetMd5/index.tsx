import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import SparkMD5 from 'spark-md5';
import { CodeMirrorModul } from '@/components/Globol';

export default (props: any) => {
  const [md5data, setmd5data] = useState<string>('');
  const { isModalOpen, setIsModalOpen, title } = props;
  // 获取文件的md5值
  const getFileMd5 = (file: { size: number; name: string }) => {
    return new Promise((resolve) => {
      let tmp_md5;
      let blobSlice =
        File.prototype.slice ||
        File.prototype.mozSlice ||
        File.prototype.webkitSlice,
        // file = this.files[0],
        chunkSize = 8097152, // Read in chunks of 2MB
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();
      const loadNext = () => {
        let start = currentChunk * chunkSize,
          end = start + chunkSize >= file.size ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      };
      fileReader.onload = function (e: any) {
        spark.append(e.target.result); // Append array buffer
        currentChunk++;
        let md5_progress = Math.floor((currentChunk / chunks) * 100);
        console.log(
          file.name + '  正在处理，请稍等,' + '已完成' + md5_progress + '%',
        );
        if (currentChunk < chunks) {
          loadNext();
        } else {
          tmp_md5 = spark.end();
          console.log(file.name + '的MD5值是：' + tmp_md5);
          resolve(tmp_md5);
        }
      };
      fileReader.onerror = function () {
        console.warn('oops, something went wrong.');
      };

      loadNext();
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const uploadData = {
    beforeUpload: async (file: any) => {
      let md5: any = await getFileMd5(file);
      setmd5data(md5);
    },
    onRemove: () => {
      setmd5data('');
    },
  };
  const propsList = {
    title: title,
    btnList: require('!raw-loader!@/pages/List/component/GetMd5'),
    open: isModalOpen,
    onCancel: handleCancel,
  };

  return (
    <div>
      <CodeMirrorModul {...propsList}>
        <Upload {...uploadData}>
          <Button>请选择文件</Button>
        </Upload>
        <p>MD5:{md5data}</p>
      </CodeMirrorModul>
    </div>
  );
};
