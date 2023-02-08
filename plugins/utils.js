export default (context, inject) => {
  const utils = {
    ucFirst (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    formatDate (row, column, cellValue, index) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(cellValue).toLocaleString('en-US', options)
    },
    formatDateTime (row, column, cellValue, index) {
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
      return new Date(cellValue).toLocaleString('en-US', options)
    },
    formattedDate (date, withTime = false) {
      const options = withTime ? { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' } : { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleString('en-US', options)
    },
    formattedTime (date, withSeconds = true) {
      const options = withSeconds ? { hour: 'numeric', minute: 'numeric', second: 'numeric' } : { hour: 'numeric', minute: 'numeric' }
      return new Date(date).toLocaleString('en-US', options)
    },
    formattedCurrency (fare) {
      return `${process.env.currency} ${fare.toFixed(2)}`
    },
    logger (log, variable = null) {
      if (process.env.debug === true) {
        if (variable === null) {
          console.log(log)
        } else {
          console.log(log + ' : ' + variable)
        }
      }
    },
    getMonthName (month) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return monthNames[month - 1]
    },
    getDayName (day) {
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return dayNames[day - 1]
    },
    formatMonthName (row, column, cellValue, index) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return monthNames[cellValue - 1]
    },
    formatDayName (row, column, cellValue, index) {
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return dayNames[cellValue - 1]
    }
  }

  // Inject $auth in Vue, context and store.
  inject('utils', utils)
  // For Nuxt <= 2.12, also add 👇
  context.$utils = utils
}
