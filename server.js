import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
routes(app);


const port = 3000;

// Array de posts de exemplo (será substituído pelos dados do banco de dados)
const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gato curioso olhando pela janela",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        descricao: "Gatinho dormindo em uma caixa",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 4,
        descricao: "Gatos brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 5,
        descricao: "Um gato preto elegante",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 6,
        descricao: "Gato ronronando no colo",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 7,
        descricao: "Gato explorando a natureza",
        imagem: "https://placecats.com/millie/300/150",
    }
];

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(port, () => {
  console.log("Servidor escutando...");
});

// function BuscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }

// app.get("/posts/:id", (req, res) => {
//     const index = BuscarPostPorID(req.params.id);
//     res.status(200).json(posts[index]);
// });