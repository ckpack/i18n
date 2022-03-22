export interface Params {
  [template: string]: any;
  [template: number]: any;
}

/**
 * 格式化
 * @param message - 格式化前语言对应的内容
 * @param params - 格式化message的参数
 * @returns - 格式化后语言对应的内容
 */
function formatMessage(message: string, params?: Params) {
  if (!message || typeof message !== 'string' || !params) return message;
  const messageArr = message.split(/[{}]/);

  let messageFormat = '';
  for (let index = 0; index < messageArr.length; index += 1) {
    const item = messageArr[index];
    if (!item) continue;
    if (index % 2 !== 0) {
      if (item in params || Array.isArray(params)) {
        messageFormat += params[item];
      } else {
        throw new Error(`${item} not in params`);
      }
    } else {
      messageFormat += item;
    }
  }
  return messageFormat;
}

export {
  formatMessage,
};
