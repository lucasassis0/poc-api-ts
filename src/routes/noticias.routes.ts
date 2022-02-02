import { Router } from "express";
import { NoticiaRepository } from "../repositories/NoticiaRepository";
import { NoticiaService } from "../services/NoticiaService";

const noticiasRoutes = Router();
const noticiaRepository = new NoticiaRepository();


noticiasRoutes.post('/noticias', async (request, response) => {
    const { title, description } = request.body;
    const noticiaService = new NoticiaService(noticiaRepository);
    const noticia = await noticiaService.salvar({ title, description });
    return response.status(201).json({
        message: "Salvo com sucesso!",
        noticia: noticia
    })
});
noticiasRoutes.get('/noticias', async (request, response) => {
    const noticiaService = new NoticiaService(noticiaRepository);
    const listarNoticias = await noticiaService.obterTodos();
    return response.json(listarNoticias);
});
noticiasRoutes.get('/noticias/pesquisa', async (request, response) => {
    const { id } = request.query;
    const noticiaService = new NoticiaService(noticiaRepository);
    const noticia = await noticiaService.obterPorId(id as string);
    return response.json(noticia);
});
noticiasRoutes.delete("/noticias", async (request, response) => {
    const { id } = request.query;
    const noticiaService = new NoticiaService(noticiaRepository);
    const  noticiaDeletada = await noticiaService.deletar(id as string);
    return response.status(200).json({
        message: "Deletado com sucesso!",
        produto: noticiaDeletada
    });
});
noticiasRoutes.put("/noticias", async (request, response) => {
    const { id, title, description } = request.body;
    const noticiaService = new NoticiaService(noticiaRepository);
    const noticiaAtualizada = await noticiaService.alterar({id, title, description});
    return response.status(200).json({
        message: "Atualizado com sucesso!",
        produto: noticiaAtualizada
    });
});

export { noticiasRoutes }