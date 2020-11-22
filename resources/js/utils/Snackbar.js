import store from "@/store"

export class Snackbar {
  static close() {
    store.commit('SET_SNACKBAR', {
      text: '',
      show: false,
      color: undefined
    })
  }

  /**
   * Open snackbar
   *
   * @param {string} text
   * @param {string} color
   */
  static open(text, color) {
    store.commit('SET_SNACKBAR', {
      text,
      color,
      show: true
    })
  }

  /**
   * open success snackbar
   *
   * @param {string} text
   */
  static success(text) {
    Snackbar.open(text, 'success')
  }

  /**
   * open error snackbar
   *
   * @param {string} text
   */
  static error(text) {
    Snackbar.open(text, 'error')
  }
}
