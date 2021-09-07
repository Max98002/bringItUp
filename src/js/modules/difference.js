export default class Difference {
  constructor(oldOfficer, newOfficer, items) {
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
    } catch (error) {

    }
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  bindTriggers(officer, items, count) {
    officer.querySelector('.plus').addEventListener('click', () => {
      if (count !== items.length - 2) {
        items[count].style.cssText = `display: flex;`;
        count++;
      } else {
        items[count].style.cssText = `display: flex;`;
        items[items.length - 1].remove();
      }
    });
  }

  hideItems(items) {
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.cssText = `display: none;`;
      }
    });
  }

  init() {
    try {
      this.hideItems(this.newItems);
      this.hideItems(this.oldItems);
      this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
      this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    } catch (error) {

    }
  }
}