
$(document).ready(function () {
    $('.btn__add').click(function () {
        var input = $('.input__add').val();
        if (input != '') {
            $('.todolist__content ul').append('<li><input type="checkbox" name="" id="" class="input__checkbox">' + input + '<span class="btn_edit"><i class="bi bi-pencil-square"></i></span><span class="btn_delete"><i class="bi bi-trash"></i></span></li>');
            $('.input__add').val('');
        }
    });
    $(document).keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $('.btn__add').click();
        }
    })
    $('ul').on('click', '.input__checkbox', function (e) {
        $(this).parent().toggleClass('label-line-through');
    });
    $('ul').on('click', '.btn_delete', function (e) {
        $(this).parent().remove();
    });
});