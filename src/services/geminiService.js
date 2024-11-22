import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Importa a classe GoogleGenerativeAI do pacote @google/generative-ai. 
// Essa classe é essencial para interagir com a API do Google Generative AI.

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 2. Cria uma nova instância da classe GoogleGenerativeAI, fornecendo a chave de API 
// do Gemini como argumento. Essa chave é necessária para autenticar as requisições.

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 3. Obtém o modelo generativo Gemini 1.5-Flash. Esse modelo é especializado em gerar 
// texto a partir de diferentes tipos de entrada, incluindo imagens.

export default async function gerarDescricaoComGemini(imageBuffer) {
    // 4. Define uma função assíncrona que recebe um buffer de imagem como entrada.
    // Essa função será responsável por gerar a descrição da imagem.

    const prompt =
        "Gere uma descrição em português do brasil para a seguinte imagem";

    // 5. Define o prompt para o modelo. O prompt instrui o modelo a gerar uma descrição 
    // em português brasileiro da imagem fornecida.

    try {
        // 6. Inicia um bloco try-catch para lidar com possíveis erros durante a geração da descrição.

        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"), // 7. Converte o buffer da imagem para uma string base64.
                mimeType: "image/png", // 8. Define o tipo MIME da imagem como PNG.
            },
        };

        const res = await model.generateContent([prompt, image]);

        // 9. Chama o método generateContent do modelo, passando o prompt e a imagem como entrada. 
        // A função aguarda a resposta do modelo e armazena o resultado em res.

        return res.response.text() || "Alt-text não disponível.";

        // 10. Retorna o texto da resposta do modelo ou a string "Alt-text não disponível." 
        // caso ocorra algum erro.

    } catch (erro) {
        // 11. Caso ocorra algum erro, ele é capturado e registrado no console.
        // Em seguida, é lançada uma nova exceção com uma mensagem mais genérica.
        console.error("Erro ao obter alt-text:", erro.message, erro);
        throw new Error("Erro ao obter o alt-text do Gemini.");
    }
}