// import { PageContainer } from '@ant-design/pro-components';
// import { useAccess } from '@umijs/max';
// import { Button } from 'antd';

const AccessPage: React.FC = () => {
  return (
    <div>
      <div style={{ border: '1px solid black', width: '300px', height: '300px' }}>
        <h2>接口返回html文本前端展示</h2>
        <div dangerouslySetInnerHTML={{
          __html: ' <div><button>lalal</button><p>jajhajaj</p></div>'
        }} />
      </div>
    </div>
  );
};

export default AccessPage;
