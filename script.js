function enviardados(){
  
if(document.dados.txt_comp1prof1.value=="")
{
alert( "O campo Profissional Competência 1 não está preenchido!" );
document.dados.txt_comp1prof1.focus();
return false;
}
if(document.dados.txt_comp1gest1.value=="")
{
alert( "O campo Gestor Competência 1 não está preenchido!" );
document.dados.txt_comp1gest1.focus();
return false;
}

if(document.dados.txt_comp2prof2.value=="")
{
alert( "O campo Profissional Competência 2 não está preenchido!" );
document.dados.txt_comp2prof2.focus();
return false;
}
if(document.dados.txt_comp2gest2.value=="")
{
alert( "O campo Gestor Competência 2 não está preenchido!" );
document.dados.txt_comp2gest2.focus();
return false;
}

if(document.dados.txt_comp3prof3.value=="")
{
alert( "O campo Profissional Competência 3 não está preenchido!" );
document.dados.txt_comp3prof3.focus();
return false;
}
if(document.dados.txt_comp3gest3.value=="")
{
alert( "O campo Gestor Competência 3 não está preenchido!" );
document.dados.txt_comp4gest3.focus();
return false;
}

if(document.dados.txt_comp4prof4.value=="")
{
alert( "O campo Profissional Competência 4 não está preenchido!" );
document.dados.txt_comp4prof4.focus();
return false;
}
if(document.dados.txt_comp4gest4.value=="")
{
alert( "O campo Gestor Competência 4 não está preenchido!" );
document.dados.txt_comp4gest4.focus();
return false;
}

if(document.dados.txt_comp5prof5.value=="")
{
alert( "O campo Profissional Competência 5 não está preenchido!" );
document.dados.txt_comp5prof5.focus();
return false;
}
if(document.dados.txt_comp5gest5.value=="")
{
alert( "O campo Gestor Competência 5 não está preenchido!" );
document.dados.txt_comp5gest5.focus();
return false;
}

if(document.dados.txt_comp6prof6.value=="")
{
alert( "O campo Profissional Competência 6 não está preenchido!" );
document.dados.txt_comp6prof6.focus();
return false;
}
if(document.dados.txt_comp6gest6.value=="")
{
alert( "O campo Gestor Competência 6 não está preenchido!" );
document.dados.txt_comp6gest6.focus();
return false;
}

if(document.dados.txt_comp7prof7.value=="")
{
alert( "O campo Profissional Competência 7 não está preenchido!" );
document.dados.txt_comp7prof7.focus();
return false;
}
if(document.dados.txt_comp7gest7.value=="")
{
alert( "O campo Gestor Competência 7 não está preenchido!" );
document.dados.txt_comp7gest7.focus();
return false;
}

if(document.dados.txt_comp8prof8.value=="")
{
alert( "O campo Profissional Competência 8 não está preenchido!" );
document.dados.txt_comp8prof8.focus();
return false;
}
if(document.dados.txt_comp8gest8.value=="")
{
alert( "O campo Gestor Competência 8 não está preenchido!" );
document.dados.txt_comp8gest8.focus();
return false;
}

if(document.dados.txt_comp9prof9.value=="")
{
alert( "O campo Profissional Competência 9 não está preenchido!" );
document.dados.txt_comp9prof9.focus();
return false;
}
if(document.dados.txt_comp9gest9.value=="")
{
alert( "O campo Gestor Competência 9 não está preenchido!" );
document.dados.txt_comp9gest9.focus();
return false;
}

if(document.dados.txt_comp10prof10.value=="")
{
alert( "O campo Profissional Competência 10 não está preenchido!" );
document.dados.txt_comp10prof10.focus();
return false;
}
if(document.dados.txt_comp10gest10.value=="")
{
alert( "O campo Gestor Competência 10 não está preenchido!" );
document.dados.txt_comp10gest10.focus();
return false;
}

if(document.dados.txt_comp11prof11.value=="")
{
alert( "O campo Profissional Competência 11 não está preenchido!" );
document.dados.txt_comp11prof11.focus();
return false;
}
if(document.dados.txt_comp11gest11.value=="")
{
alert( "O campo Gestor Competência 11 não está preenchido!" );
document.dados.txt_comp11gest11.focus();
return false;
}

if(document.dados.txt_comp12prof12.value=="")
{
alert( "O campo Profissional Competência 12 não está preenchido!" );
document.dados.txt_comp12prof12.focus();
return false;
}
if(document.dados.txt_comp12gest12.value=="")
{
alert( "O campo Gestor Competência 12 não está preenchido!" );
document.dados.txt_comp12gest12.focus();
return false;
}

return true;
}

function valida(){
	if(valida_cpf(document.getElementById('cpf').value))
		alert('CPF Válido');
	else
		alert('CPF Inválido');
}
			
function valida_cpf(cpf){
  var numeros, digitos, soma, i, resultado, digitos_iguais;
  digitos_iguais = 1;
  if (cpf.length < 11)
	return false;
	  for (i = 0; i < cpf.length - 1; i++)
	if (cpf.charAt(i) != cpf.charAt(i + 1))
	  {
		  digitos_iguais = 0;
			  break;
	  }
	  if (!digitos_iguais)
			{
			numeros = cpf.substring(0,9);
			digitos = cpf.substring(9);
			soma = 0;
			for (i = 10; i > 1; i--)
		  soma += numeros.charAt(10 - i) * i;
  		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
						if (resultado != digitos.charAt(0))
							  return false;
						numeros = cpf.substring(0,10);
						soma = 0;
						for (i = 11; i > 1; i--)
							  soma += numeros.charAt(11 - i) * i;
						resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
						if (resultado != digitos.charAt(1))
							  return false;
						return true;
						}
				  else
						return false;
			}


