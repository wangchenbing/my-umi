import React, { useRef, useState, useEffect } from 'react'
import { Input, Tooltip, message, Spin, Form, Button } from 'antd';
import { CodeMirrorModul } from '@/components/Globol'


//设置画板大小
const canvasWidth = 100;
const canvasHeight = 27;
const codeEnums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//加工数据，生成4位随机数
const getRandomCodes = () => new Array(4).fill(1).map(() => codeEnums[Math.floor(Math.random() * codeEnums.length)]);;

interface OnFinish {
  username: string;
  password: string;
  canvas: string;

}
export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [canvasShow, setcanvasShow] = useState(true)
  //或如目标的dom结构
  const canvasRef = useRef();
  const [codes, setCodes] = useState(() => getRandomCodes());

  //获取验证码，触发getRandomCodes函数
  const fetchCode = () => {
    setCodes(() => getRandomCodes());
  };

  const renderCode = () => {
    const getRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const canvasDom: any = canvasRef.current;
    if (canvasDom) {
      canvasDom.width = canvasWidth;
      canvasDom.height = canvasHeight;
      const context = canvasDom.getContext('2d');
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.font = '20px bold Arial';
      context.textAlign = 'center';
      context.textBaseLine = 'middle';
      // 绘制code图形
      for (let i = 0; i < codes.length; i++) {
        const code = codes[i];
        // 0-20随机弧度
        const deg = (Math.random() * 20 * Math.PI) / 180;
        const x = 10 + i * 20;
        const y = Math.floor(15 + Math.random() * 20);
        context.translate(x, y);
        context.rotate(deg);
        context.fillStyle = getRandomColor();
        context.fillText(code, 0, 0);
        context.rotate(-deg);
        context.translate(-x, -y);
      }
      // 绘制背景线条
      for (let j = 0; j < 5; j++) {
        context.strokeStyle = getRandomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvasWidth, Math.random() * canvasHeight);
        context.lineTo(Math.random() * canvasWidth, Math.random() * canvasHeight);
        context.stroke();
      }
      // 绘制背景噪点
      for (let k = 0; k < 30; k++) {
        context.strokeStyle = getRandomColor();
        context.beginPath();
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
      }
    }
  };
  useEffect(renderCode, [codes]);
  //表单
  const onFinish = (values: OnFinish) => {
    console.log('Success:', values);
    const { username, password, canvas } = values

    if (username === 'admin') {
      if (password === 'admin123') {
        if (canvas.toUpperCase() === codes.join('').toUpperCase()) {
          message.success('提交成功');
        } else {
          message.warning('请输入正确的校验码');
        }
      } else {
        message.warning('请输入正确的密码');
      }
    } else {
      message.warning('请输入正确的账号');
    }
  };
  const propsList = {
    title: title,
    btnList: require('!raw-loader!@/components/VerificationCode'),
    open: isModalOpen,
    onCancel: handleCancel
  }
  return (
    <CodeMirrorModul {...propsList} >
      <div style={{
        marginTop: '50px'
      }}>
        <Form
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 10,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入账号!',
              },
            ]}
          >
            <Input placeholder="admin" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password placeholder="admin123" />
          </Form.Item>
          <Form.Item
            label="验证码"
            name="canvas"
            rules={[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]}
          >
            <div style={{ display: 'flex' }}>
              {
                canvasShow ?
                  <Button size="small" type="primary" onClick={() => {
                    setcanvasShow(false)
                    fetchCode();
                  }} >
                    点击获取验证码
                  </Button> :
                  <>
                    <Input />
                    <Spin spinning={false} style={{ lineHeight: '100%' }}>
                      <Tooltip title={'点击刷新图形验证码'} >
                        <canvas
                          ref={canvasRef}
                          onClick={() => {
                            fetchCode();
                          }}
                        />
                      </Tooltip>
                    </Spin>
                  </>
              }
            </div>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" style={{}}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CodeMirrorModul>
  )
}
