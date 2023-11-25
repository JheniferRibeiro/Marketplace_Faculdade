let search = document.querySelector('.search-box');
let usuarios = [];
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    
}

let navbar = document.querySelector('.itens-nav');

document.querySelector('#menu-hamburguer').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}



let nav = document.querySelector('nav');

window.addEventListener('scroll' , () => {
    nav.classList.toggle('shadow', window.scrollY > 0);
});


let form_seller = document.querySelector('.div_seller');

document.querySelector('#new_seller').onclick = () => {
    console.log("a")
    form_seller.classList.toggle('active');
}




// Função para adicionar um usuário
function adicionarUsuario() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    // Validar se todos os campos foram preenchidos
    if (nome && cpf && email && senha) {
        // Criar um objeto usuário
        const usuario = {
            id: gerarId(),
            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha
        };

        // Adicionar usuário ao array
        usuarios.push(usuario);

        // Limpar os campos do formulário
        limparCampos();

        // Atualizar a lista de usuários na interface
        atualizarListaUsuarios();
    } else {
        alert('Preencha todos os campos.');
    }
}


// Função para limpar os campos do formulário
function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}

// Função para atualizar a tabela de usuários na interface
function atualizarListaUsuarios() {
    const tabelaUsuarios = document.querySelector('.tabela_usuarios tbody');
    tabelaUsuarios.innerHTML = '';

    if (usuarios.length > 0) {
        usuarios.forEach((usuario, index) => {
            const linha = document.createElement('tr');
            linha.innerHTML = `<td>${usuario.id}</td>
                               <td>${usuario.nome}</td>
                               <td>${usuario.cpf}</td>
                               <td>${usuario.email}</td>
                               <td>${'*'.repeat(usuario.senha.length)}</td>
                               <td><button class="editar" onclick="editarUsuario(${index})">Editar</button></td>
                               <td><button class="excluir" onclick="excluirUsuario(${index})">Excluir</button></td>`;
            tabelaUsuarios.appendChild(linha);
        });
    } else {
        tabelaUsuarios.innerHTML = '<tr><td colspan="7">Nenhum usuário cadastrado.</td></tr>';
    }
}




// Função para excluir um usuário
// Função para excluir um usuário
function excluirUsuario(index) {
    usuarios.splice(index, 1);
    atualizarListaUsuarios();
}


// ... (código anterior)

// Função para editar um usuário
function editarUsuario(index) {
    const usuario = usuarios[index];

    // Preencher o formulário com os detalhes do usuário
    document.getElementById('nome').value = usuario.nome;
    document.getElementById('cpf').value = usuario.cpf;
    document.getElementById('email').value = usuario.email;
    document.getElementById('senha').value = usuario.senha;

    // Remover o usuário da lista
    usuarios.splice(index, 1);

    // Atualizar a lista de usuários na interface
    atualizarListaUsuarios();
}
function gerarId() {
    // Gera um ID aleatório simples para fins de exemplo
    return Math.random().toString(36).substr(2, 9);
}
