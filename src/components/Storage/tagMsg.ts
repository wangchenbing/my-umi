
//函数式
/* 
  export const sendMsg = (type, payload) => {
    localStorage.setItem(type, JSON.stringify({
      payload,
      temp: Date.now()
    }));
  };

  export const listenMsg = handler => {
    const storageHandler = e => {
      const { payload } = JSON.parse(e.newValue);
      handler(e.key, payload)
    };
    window.addEventListener('storage', storageHandler);
    return () => {
      window.removeEventListener('storage', storageHandler);
    };
  };
 */


class localMsg {
  static send(type: string, payload: any) {
    localStorage.setItem(type, JSON.stringify({
      payload,
      temp: Date.now()
    }));
  }

  static listen(handler: any) {
    const storageHandler = (e: any) => {
      const value = localStorage.getItem(e.key)
      try {
        const jsonValue = value == null ? null : JSON.parse(e.newValue);
        if (!jsonValue) return
        const { payload } = jsonValue;
        handler(e.key, payload)
      } catch {
        return undefined;
      }
    };
    window.addEventListener('storage', storageHandler);
    return () => {
      window.removeEventListener('storage', storageHandler);
    };
  }

  static delete(type: string) {
    localStorage.removeItem(type)
  }

  static clear() {
    localStorage.clear()
  }
}
export default localMsg