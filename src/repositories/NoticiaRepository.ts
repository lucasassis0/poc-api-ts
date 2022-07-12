import Noticia, { NoticiaDocument, NoticiaAtributes } from "../model/Noticia";
import { INoticiaRepository, ISalvarNoticiaDTO } from "./INoticiaRepository";

class NoticiaRepository implements INoticiaRepository{
    constructor(){

    }
    async salvar({title, description}: ISalvarNoticiaDTO): Promise<NoticiaDocument>{
        const noticia: NoticiaAtributes = {
            create_at: new Date(),
            description: description,
            title: title,
            update_at: undefined
        }
        return await Noticia.create(noticia);
    }
    async obterTodos(): Promise<NoticiaDocument[]> {
        return await Noticia.find({});
    }
    async obterPorId(id: string): Promise<NoticiaDocument> {
        return await Noticia.findOne({_id:id});
    }
    async obterPorTitulo(title: string): Promise<Boolean> {
        const noticia = await Noticia.findOne({title:title});
        return noticia != null;
    }
    async deletar(id: string): Promise<NoticiaDocument> {
        return await Noticia.findByIdAndDelete(id);
    }
    async alterar(id: string, title: string, description: string): Promise<NoticiaDocument> {
        return await Noticia.findByIdAndUpdate(
            {"_id": id},
            {
                title: title,
                description: description,
                update_at: new Date()
            },
            { new: true}
        );
    }

}

export { NoticiaRepository }