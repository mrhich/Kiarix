const form = document.getElementById('signupForm');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const phone = form.phone.value.trim();
  const pwd = form.password.value;

  if(!phone || pwd.length < 8){
    alert('لطفاً تمام فیلدها را به درستی پر کنید (رمز حداقل ۸ کاراکتر).');
    return;
  }
  alert('ثبت نام با موفقیت انجام شد — خوش آمدید!');
  form.reset();
});

document.getElementById('demoBtn').addEventListener('click', function(){
  alert('باز کردن نسخه نمایشی...');
});
