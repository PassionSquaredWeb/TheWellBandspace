document.write('<footer id="main-footer" class="text-center p-2">');
document.write('<div class="container">');
document.write('<div class="row">');
document.write('<div class="col">');
document.write("<p>Copyright &copy; <span id='year'></span> The Well Band Space, Mission B.C.</p>");
document.write('</div>');
document.write('</div>');
document.write('</div>');
document.write('</footer>');

document.write(
  '<script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>'
);

document.write(
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>'
);

document.write(
  '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>'
);

document.write('<script src="https://kit.fontawesome.com/384d2d79c4.js" crossorigin="anonymous"></script>');
document.write('<script src="https://kit.fontawesome.com/90dbe0dd16.js" crossorigin="anonymous"></script>');

document.write(
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js"></script>'
);

document.write('<script>$("#year").text(new Date().getFullYear());</script>');
