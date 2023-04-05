var soHang1 = '';
var soHang2 = '';
var opt;
var saveKq = '';

function buttonHandler(btn){
    const valueButton = btn.innerText;
    const resultInput = document.getElementById('resultInput');

    console.log(resultInput)
    console.log(valueButton)
    
    if(isNaN(valueButton))
    {
        if(valueButton == 'C' || valueButton == 'CE')
        {
            soHang1 = '';
            soHang2 = '';
            opt = undefined;
            resultInput.value = '';
            return;
        }
        if(valueButton == '=')
        {
            var result = tinhToan(soHang1,soHang2,opt);
            resultInput.value = result;
            soHang1 = '';
            soHang2 = '';
            opt = undefined;
        }
        else{
            opt = valueButton;
        }
        if(valueButton == '+')
        {
            result.value = '';
        }
    }
    else
    {
        if(opt != undefined)
        {
            soHang2 = soHang2 + valueButton;
            resultInput.value = soHang2; 
        }
        else
        {
            soHang1  = soHang1 + valueButton;
            resultInput.value = soHang1;

        }
    }
    
}

function tinhToan(soHang1,soHang2,opt){
    soHang1 = Number(soHang1);
    soHang2 = Number(soHang2);

    switch(opt)
    {
        case '+':
            return soHang1 + soHang2;
        case '-':
            return soHang1 - soHang2;
        case '*':
            return soHang1 * soHang2;
        case '/':
            if(soHang2 == 0)
            {
                return 'Cannot divide by zero'
            }
            else
            {
                return soHang1 / soHang2;
            }
    }
}