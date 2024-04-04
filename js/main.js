$('#telefone').mask('(00) 00000-0000')
$('#cpf').mask('000.000.000-00')
$('#cep').mask('00000-000')
$('form').validate({
    rules: {
    nome:{
        required: true


    },
    email:{
        required: true,
        email:true
    },
    telefone:{
        required: true
    },
    endereço:{
        required:true
    },
    cep: {
        required:true
    }
    },
    messages:{
        nome:'Favor inserir seu nome completo',
        email:'Favor inserir um email válido',
        telefone:'Favor inserir seu telefone com DDD',
        end:'Favor inserir seu endereço completo',
        cep: 'Favor inserir um CEP válido'

        
    }
})

$('form').on('submit', function(e){
    if ( !$('#end').val().includes(' ') ){
        e.preventDefault()
        alert('Endereço Inválido')
    }
})

$('form').on('submit', function(e){
    if ( !$('#nome').val().includes(' ') ){
        e.preventDefault()
        alert('Nome Inválido')
    }
})




