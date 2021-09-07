import {
  PostData,
  CleatInputs
} from "./services/service";

export default class Forms {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
    };
    this.path = 'assets/question.php';
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('button');
        let oldTextBtn = btn.textContent;

        btn.textContent = this.message.loading;

        const formData = new FormData(form);

        new PostData(this.path, formData).init()
          .then((res) => {
            console.log(res);
            btn.textContent = this.message.success;
          })
          .catch((err) => {
            console.log(err);
            btn.textContent = this.message.failure;
          })
          .finally(() => {
            new CleatInputs('input').init();
            setTimeout(() => {
              btn.textContent = oldTextBtn;
            }, 3000);
          });


      });
    });
  }
}