function iniciarPrograma() {
    let contatos = [{
        nome: "Maxwell Wright",
        telefone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
        nome: "Raja Villarreal",
        telefone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    }, {
        nome: "Helen Richards",
        telefone: "0800 1111",
        email: "libero@convallis.edu"
    }];

    let acao = "";

    while (acao !== "sair") {
        acao = prompt("Digite: primeiro, ultimo, todos, novo, sair");

        if (acao === "primeiro") {
            let c = contatos[0];
            alert(`${c.nome}\n${c.telefone}\n${c.email}`);

        } else if (acao === "ultimo") {
            let c = contatos[contatos.length - 1];
            alert(`${c.nome}\n${c.telefone}\n${c.email}`);

        } else if (acao === "todos") {
            let resultado = "";
            for (let c of contatos) {
                resultado += `${c.nome} - ${c.telefone} - ${c.email}\n\n`;
            }
            alert(resultado);

        } else if (acao === "novo") {
            let nome = prompt("Nome:");
            let telefone = prompt("Telefone:");
            let email = prompt("Email:");

            contatos.push({ nome, telefone, email });
            alert("Contato adicionado!");

        } else if (acao === "sair") {
            alert("Programa encerrado.");

        } else {
            alert("Comando inválido!");
        }
    }
}