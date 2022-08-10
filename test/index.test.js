import readFile from '../index.js'

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('should be a function', () => {
        expect(typeof readFile).toBe("function")
    });
    it('should return an array with results', async () => {
        const result = await readFile('C:\\Sistemas - Localhosts\\alura-node-criando-sua-biblioteca\\test\\arquivos\\texto1.md');

        expect(result).toEqual(arrayResult)
    });
    it('should return message "no links"', async () => {
        const result = await readFile('C:\\Sistemas - Localhosts\\alura-node-criando-sua-biblioteca\\test\\arquivos\\texto1_nolinks.md');
        expect(result).toBe('no links');
    });
    it('should throw an error when it is a directory', async () => {
        await expect(readFile('C:\\Sistemas - Localhosts\\alura-node-criando-sua-biblioteca\\test\\arquivos')).rejects.toThrow(/EISDIR/);
    });
    it('should throw an error when the file is not found', async () => {
        await expect(readFile('C:\\Sistemas - Localhosts\\alura-node-criando-sua-biblioteca\\test\\arquivos\\text1.md')).rejects.toThrow(/ENOENT/);
    });
    it('should not throw an error when the file is found', async () => {
        await expect(readFile('C:\\Sistemas - Localhosts\\alura-node-criando-sua-biblioteca\\test\\arquivos\\texto1.md')).resolves.not.toThrow(/ENOENT/)
    });
});