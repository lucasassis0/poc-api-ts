import { NoticiaDocument } from "../model/Noticia";

interface ISalvarNoticiaDTO {
    title: string;
    description: string;
}

interface INoticiaRepository {
    salvar({ title, description }: ISalvarNoticiaDTO): Promise<NoticiaDocument>;
    obterTodos(): Promise<NoticiaDocument[]>;
    obterPorId(id: string): Promise<NoticiaDocument>;
    obterPorTitulo(title: string): Promise<Boolean>;
    deletar(id: string): Promise<NoticiaDocument>;
    alterar(id: string, title: string, description: string): Promise<NoticiaDocument>;
}

export { INoticiaRepository, ISalvarNoticiaDTO }