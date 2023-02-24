import { users, aboutList1, aboutList2 } from './JSON-information';

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },

  'GET /api/about/queryUserList1': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: aboutList1 },
      errorCode: 0,
    });
  },

  'GET /api/about/queryUserList2': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: aboutList2 },
      errorCode: 0,
    });
  },
};
