const calcular =document.getElementById('calcular')
     
     function IMC () {
     const nome =document.getElementById('nome').value;
     const peso =document.getElementById('peso').value;
     const altura =document.getElementById('altura').value;
     const resultado =document.getElementById('resultado')

     if (nome !=='' && altura !=='' && peso !== '') {

        const valorIMC = (peso/(altura * altura)).toFixed(1)
        {resultado.textContent = valorIMC}

        let classificaçao = '';

        if (valorIMC <18.5){ classificaçao = 'abaixo do peso';}

        else if (valorIMC < 25){ classificaçao = 'com peso ideal. Parabéns!!';}

        else if ( valorIMC < 30) { classificaçao = 'levemente acima do peso';}

        else if ( valorIMC < 35) { classificaçao = 'você está com obesidade grau I';}

        else if ( valorIMC <40 ) { classificaçao = 'você está com obesidade grau II';}

        else if ( valorIMC <45 ) { classificaçao = 'você está com obesidade grau III. Cuidado!!';} 

        resultado.textContent= `${nome}, seu IMC é ${valorIMC} e você está ${classificaçao}`
        

     } else { resultado.textContent = 'Preencha todos os campos!'}

    }

     calcular.addEventListener('click', IMC);
    
