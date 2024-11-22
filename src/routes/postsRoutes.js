// Importa as dependências necessárias:
// - express: Framework para criar aplicações web
// - multer: Middleware para lidar com uploads de arquivos
// - listarPosts, postarNovoPost, uploadImagem: Funções do controlador de posts para realizar as respectivas operações
import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

// Define a rota base para todas as requisições relacionadas a posts
const nomeRota = "/posts";

// Configura o armazenamento de arquivos enviados (uploads):
// - destination: Define o diretório onde os arquivos serão salvos
// - filename: Define o nome do arquivo salvo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Salva os arquivos na pasta 'uploads'
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Utiliza o nome original do arquivo
  }
});

// Cria uma instância do multer com a configuração de armazenamento definida
const upload = multer({ dest: "./uploads", storage });

// Define as rotas da aplicação:
const routes = (app) => {
  // Habilita o parser JSON para lidar com dados no formato JSON nas requisições
  app.use(express.json());

  app.use(cors(corsOptions));
  
  // Rota para listar todos os posts (método GET)
  app.get(nomeRota, listarPosts);

  // Rota para criar um novo post (método POST)
  app.post(nomeRota, postarNovoPost);

  // Rota para fazer upload de uma imagem (método POST)
  // - upload.single('imagem'): Configura o multer para lidar com um único arquivo com o nome 'imagem'
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost );
};

// Exporta a função das rotas para ser utilizada em outros módulos
export default routes;