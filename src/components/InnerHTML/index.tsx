import React from 'react';
import TemplateCom from '@/components/Globol/TemplatCom';

export default (props: any) => {
  return (
    <TemplateCom {...props}>
      <div
        dangerouslySetInnerHTML={{
          __html: ` <div>
                      <p>返回的字段</p>
                    </div>`,
        }}
      />
    </TemplateCom>
  );
};
