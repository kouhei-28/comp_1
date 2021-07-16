'use strict' ;

{
  const button = document.querySelector('.toggle_btn');
  const aside = document.querySelector('aside');
  const links = document.querySelectorAll('.sp-ul > li > a')


  button.addEventListener('click',() => {
    aside.classList.toggle('open');
    button.classList.toggle('close');
  });

  links.forEach((link) => {
    link.addEventListener('click',() => {
      aside.classList.toggle('open');
      button.classList.toggle('close');
    });
  });
}