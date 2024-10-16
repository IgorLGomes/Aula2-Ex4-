import express from "express";
const app = express();

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))

app.get("/",(req, res)=>{
    res.render("index");
})

app.get("/clientes",(req, res)=>{
    const clientesLista = [
      { 
        nome: "Igor Leite Gomes", 
        cpf: "123.456.789-10", 
        endereco: "Registro-SP" 
     },
      {
        nome: "Fernanda Ferreira Leite Gomes",
        cpf: "123.456.789-11", 
        endereco: "Registro-SP",
      },
      {
        nome: "Prof Diego",
        cpf: "123.456.789-12", 
        endereco: "Registro-SP" 
      },
      {
        nome: "Arthur Fudali",
        cpf: "123.456.789-13", 
        endereco: "Conchal-Pariquera",
      },
    ];
    res.render("clientes", {
      clientesLista: clientesLista,
    });
  });

  app.get("/produtos", (req, res) => {
    const produtosLista = [
        { 
          nome: "Crochet Jacket",
          preço: 2000.00,
          categoria: "Blusa",
          img:"jaco1.webp",
          hover:"jaco2.webp"
        },
        { 
          nome: "Worker Trousers",
          preço: 800.00,
          categoria: "Calça",
          img:"calça1.webp",
          hover:"calça2.webp"
        },
        { 
          nome: "Trashed Shorts",
          preço: 400.00,
          categoria: "Bermuda",
          img:"berma1.webp",
          hover:"berma2.webp"
        },
        { 
          nome: "Sports Archive",
          preço: 259.00,
          categoria: "Camiseta",
          img:"peita1.webp",
          hover:"peita2.webp"
        },
        { 
          nome: "Gray Armour Jacket",
          preço: 580.00,
          categoria: "Blusa",
          img:"blusa1.webp",
          hover:"blusa2.webp"
        }
      ];
      res.render("produtos", {
        produtosLista: produtosLista,
      });
    });

    app.get("/pedidos",(req,res) =>{
      const pedidosLista=[
        {
          id: 1,
          valor:820.42
        },
        {
          id: 2,
          valor:815.32
        },
        {
          id: 3,
          valor:815.32
        },
        {
          id: 4,
          valor:418.92
        },
        {
          id: 5,
          valor:2000.00
        },
        {
          id: 6,
          valor:409.52
        },
      ];
      res.render("pedidos", {
        pedidosLista: pedidosLista,
      });
    })

const port = 8080
app.listen(port,(error)=>{
    if(error){
        console.log(`Erro ao iniciar ${error}`)
    }else{
        console.log(`Servidor iniciado`)
    }
})