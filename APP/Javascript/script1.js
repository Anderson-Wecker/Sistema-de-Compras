class Produto
{
    constructor()
    {
        this.id = 1;
        this.arrayProduto = [];
    }

    salvar()
    {
        let produto = this.lerDados();
        
        if(this.validaCampos(produto))
        {
           this.adicionar(produto);
        }
        console.log(this.arrayProduto);
    }

    adicionar(produto)
    {
        this.arrayProduto.push(produto);
        this.id++;
    }

    lerDados()
    {
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;
        return produto;
    }

    
    validaCampos(produto)
    {
        let msg = '';
        if(produto.nomeProduto == '')
        {
            msg += 'Informe o produto\n';
        }
        if(produto.valor == '')
            {
                msg += 'Informe o preço\n';
            }
        if(msg != '')
        {
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar()
    {
        
    }
}

var produto = new Produto();