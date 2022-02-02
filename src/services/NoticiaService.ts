import { AppError } from "../errors/AppError";
import { NoticiaDocument } from "../model/Noticia";
import { INoticiaRepository } from "../repositories/INoticiaRepository";


interface IRequest{
    id?: string;
    title: string;
    description: string;
}

class NoticiaService {
    constructor(private noticiaRepository:INoticiaRepository){ }
    async salvar({title, description}: IRequest): Promise<NoticiaDocument> {
        const noticiaExiste = await this.noticiaRepository.obterPorTitulo(title);
        if(noticiaExiste){
            throw new AppError("Noticia já existe!");
        }
        return await this.noticiaRepository.salvar({title, description});
    }
    async obterTodos(): Promise<NoticiaDocument[]> {
        return await this.noticiaRepository.obterTodos();
    }
    async obterPorId(id: string): Promise<NoticiaDocument> {
        return await this.noticiaRepository.obterPorId(id);
    }
    async deletar(id: string): Promise<NoticiaDocument>{
        const noticiaDeletado = await this.noticiaRepository.deletar(id);
        if(!noticiaDeletado){
            throw new AppError("Noticia não encontrada !");
        }
        return noticiaDeletado;
    }
    async alterar({ id, title, description }: IRequest): Promise<NoticiaDocument> {
        return await this.noticiaRepository.alterar(id, title, description);
    }
}

export { NoticiaService }