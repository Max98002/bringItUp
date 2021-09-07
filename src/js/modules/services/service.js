class PostData {
  constructor(url, data) {
    this.url = url;
    this.data = data;
  }

  async init() {
    let res = await fetch(this.url, {
      method: "POST",
      body: this.data
    });

    return await res.text();
  }

}

class CleatInputs {
  constructor(inputs) {
    this.inputs = document.querySelectorAll(inputs);
  }
  init() {
    this.inputs.forEach(input => {
      input.value = '';
    });
  }
}

class CheckTextInput {
  constructor(selector) {
    this.inputs = document.querySelectorAll(selector);
  }

  init() {
    this.inputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }
}

class InitMask {
  constructor(selector) {
    this.inputs = document.querySelectorAll(selector);
  }

  createMask(event) {

    const setCursorPosition = (pos, elem) => {
      elem.focus();
  
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
  
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    let matrix = '+1 (___) ___-____',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  init() {
    this.inputs.forEach(input => {
      input.addEventListener('input', this.createMask);
      input.addEventListener('focus', this.createMask);
      input.addEventListener('blur', this.createMask);
    });
  }
}

export {
  PostData,
  CleatInputs,
  CheckTextInput,
  InitMask
}