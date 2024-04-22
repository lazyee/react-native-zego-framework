import accounting from 'accounting';

//判断字符串是否为空
const isEmpty=(str)=> {
  if (str === null || typeof str !== 'string' || str.length === 0) {
    return true;
  }
  return str.replace(/\s*/g, '').length === 0;
}

//格式化字符串 把 Difference {0} discount {1} 中 {0},{1} 替换成指定字符串
const formatString=(string, args)=> {
  if (!isEmpty(string)) {
    let result = string;
    if (args !== null && args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        if (args[i] !== undefined) {
          let reg = new RegExp('({)' + i + '(})', 'g');
          result = result.replace(reg, args[i]);
        }
      }
    }

    return result;
  }
  return '';
}

/**
 * 格式化钱，增加千分位,保留两位小数
 * @param money
 */
const formatMoney=(money)=> {
  let newMoney = String(money);
  return accounting.formatMoney(newMoney, 'Ks ', 0, ',', '.');
}


const StringUtil={
  isEmpty,
  formatMoney,
  formatString,
};

module.exports = StringUtil;

