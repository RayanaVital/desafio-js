class Contato {
    _nome;
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    _sobrenome;
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(value) {
        this._sobrenome = value;
    }
    _email;
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    _cpf;
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    _telefone;
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
    _contato;
    get contato() {
        return this._contato;
    }
    set contato(value) {
        this._contato = value;
    }


    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this._cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;

    }

    isValid() {
        var nomeInvalido = isNotFilled(this.nome);
        var sobrenomeInvalido = isNotFilled(this.sobrenome);
        var emailInvalido = isNotFilled(this.email);
        var cpfInvalido = isNotFilled(this.cpf);
        var telefoneInvalido = isNotFilled(this.telefone);
        var contatoInvalido = isNotFilled(this.contato);

        var invalidProperties = [
            nomeInvalido,
            sobrenomeInvalido,
            emailInvalido,
            cpfInvalido,
            telefoneInvalido,
            contatoInvalido
        ];

        var hasInvalidProperties = invalidProperties.includes(true);

        return !hasInvalidProperties;

        function isNotFilled(text) {
            return !text || text == ' ';
        }
    }
}

function post(form) {

    let data = new Contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value);

    console.log(data);

    if (data.isValid()) {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    } else {
        alert("Campos incompletos. Por favor complete todos os campos.");
    }


}

