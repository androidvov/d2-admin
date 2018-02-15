// 库
import papa from 'papaparse'
export default {
  install (Vue, options) {
    Vue.prototype.$import = {
      // 导入 csv
      csv (file) {
        return new Promise((resolve, reject) => {
          papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results, file) => {
              resolve(results)
            }
          })
        })
      }
    }
  }
}