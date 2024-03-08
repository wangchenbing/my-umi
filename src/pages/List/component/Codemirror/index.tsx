import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { TemplateCom } from '@/components/Globol';
import styleLess from './index.less'

export default (props: any) => {
  const [htmlCode, setHtmlCode] = useState(`<button id="btn">按钮</button>
<h1>Hello Word</h1>
  `);
  const [cssCode, setCssCode] = useState(`#btn { 
  color: red;
  /* color:green ; */
}`);
  const [jsCode, setJsCode] = useState(`const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
console.log('按钮触发事件')
})
console.log('js输出')
`);
  const [iframeContent, setIframeContent] = useState('');
  const [consoleLogs, setConsoleLogs] = useState([]);

  const runCode = () => {
    const userScript = `
    <script>
      try {
        console.log = (...args) => {
          parent.postMessage({ type: 'log', args: args.map(arg => arg.toString()) }, '*');
        };
        console.error = console.log;
        ${jsCode}
      } catch (error) {
        console.error(error.message);
      }
    </script>
  `;

    //模版代码,将代码集合
    const combinedCode = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        ${userScript}
      </body>
      </html>
    `;

    setIframeContent(combinedCode);
  };

  const clearLogs = () => {
    //清空log日志
    setConsoleLogs([]);
  };

  /**
  * 添加消息事件监听器，用于接收来自其他窗口的消息
  * @returns {function} 用于移除事件监听器的函数
  */
  useEffect(() => {
    // 定义消息处理函数
    const messageHandler = (event) => {
      if (event.data.type === 'log') {
        // 如果消息类型为日志，则将日志内容添加到控制台日志中
        setConsoleLogs((prevLogs) => [...prevLogs, ...event.data.args.map(String)]);
      } else if (event.data.type === 'error') {
        // 如果消息类型为错误，则将错误信息添加到控制台日志中
        setConsoleLogs((prevLogs) => [...prevLogs, 'Error: ' + event.data.args.map(String).join(' ')]);
      }
    };
    // 添加消息事件监听器
    window.addEventListener('message', messageHandler);
    // 返回一个函数，用于在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);


  return (
    <TemplateCom {...props}>
      <div className={styleLess['editors_container']}>
        <div className={styleLess['editor_wrapper']}>
          <span>HTMl</span>
          <CodeMirror
            value={htmlCode}
            // todo 编辑语言格式
            extensions={[html()]}
            // todo 监听文本内容
            onChange={(value) => setHtmlCode(value)}
          />
        </div>
        <div className={styleLess['editor_wrapper']}>
          <span>CSS</span>
          <CodeMirror
            value={cssCode}
            extensions={[css()]}
            onChange={(value) => setCssCode(value)}
          />
        </div>
        <div className={styleLess['editor_wrapper']}>
          <span>Javascript</span>
          <CodeMirror
            value={jsCode}
            extensions={[javascript()]}
            onChange={(value) => setJsCode(value)}
          />
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Button type="primary" onClick={runCode}>
          Run Code
        </Button>
        <Button onClick={clearLogs}>
          Clear Logs
        </Button>
      </div>

      <iframe
        title="preview"
        // todo 填入模版
        srcDoc={iframeContent}
        style={{
          width: '100%',
          height: 'auto',
          border: 'none',
          marginBottom: '20px',
        }}
        sandbox="allow-scripts allow-same-origin"
      />
      <div className="console-logs" style={{ whiteSpace: 'pre-wrap', marginTop: '16px' }}>
        <strong>log 日志:</strong>
        {consoleLogs.map((log, index) => (
          <pre key={index}>{`${index + 1}: ${log}`}</pre>
        ))}
      </div>
    </TemplateCom>
  );
};
