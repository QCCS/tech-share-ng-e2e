export class AppService {
   // 排序的方法
  sort(arr) {
    var compare = function (x, y) {
      if (x < y) {
        return -1;
      } else if (x > y) {
        return 1;
      } else {
        return 0;
      }
    }
    return arr.sort(compare);
  }

}
