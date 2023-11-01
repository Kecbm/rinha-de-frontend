import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

describe('Testando a renderização dos elementos na tela', () => {
    it('Select de idiomas', () => {
        render(<App />);

        const select = screen.getByLabelText('Idiomas disponíveis na aplicação');

        expect(select).toBeInTheDocument();
    });

    it('É possível selecionar o idioma "English"', () => {
        render(<App />);
    
        const select = screen.getByLabelText('Idiomas disponíveis na aplicação');
    
        expect(select).toBeInTheDocument();
    
        fireEvent.change(select, { target: { value: 'en' } });
    
        expect(screen.getByText('🇺🇸 English')).toBeInTheDocument();
    });

    it('É possível selecionar o idioma "Espanhol"', () => {
        render(<App />);
    
        const select = screen.getByLabelText('Idiomas disponíveis na aplicação');
    
        expect(select).toBeInTheDocument();
    
        fireEvent.change(select, { target: { value: 'la' } });
    
        expect(screen.getByText('🇪🇸 Espanhol')).toBeInTheDocument();
    });

    it('É possível selecionar o idioma "Português"', () => {
        render(<App />);
    
        const select = screen.getByLabelText('Idiomas disponíveis na aplicação');
    
        expect(select).toBeInTheDocument();
    
        fireEvent.change(select, { target: { value: 'pt' } });
    
        expect(screen.getByText('🇧🇷 Português')).toBeInTheDocument();
    });

    it('Título da página', () => {
        render(<App />);

        const title = screen.getByText('Visualizador de JSON');

        expect(title).toBeInTheDocument();
        expect(title).toHaveAttribute('aria-labelledby', 'Titulo da página');
        expect(title).toHaveAttribute('tabIndex', '2');
    });

    it('Descrição da página', () => {
        render(<App />);

        const title = screen.getByText('Carregue e visualize arquivos JSON de forma simples e rápida');

        expect(title).toBeInTheDocument();
        expect(title).toHaveAttribute('aria-labelledby', 'Descrição da página');
        expect(title).toHaveAttribute('tabIndex', '3');
    });

    it('Label do input de arquivo', () => {
        render(<App />);

        const title = screen.getByText('Selecione um arquivo JSON:');

        expect(title).toBeInTheDocument();
        expect(title).toHaveAttribute('aria-labelledby', 'Titulo do campo de envio de arquivo');
        expect(title).toHaveAttribute('tabIndex', '4');
    });

    it('Ícone de pasta aberta', () => {
        render(<App />);

        const imagem = screen.getByAltText('Ícone de uma pasta aberta');

        expect(imagem).toBeInTheDocument();

        expect(imagem).toHaveAttribute('src', 'https://img.icons8.com/ios-filled/50/opened-folder.png');
    });

    it('Input de arquivo', () => {
        render(<App />);

        const title = screen.getByText('Insira o arquivo JSON aqui');

        expect(title).toBeInTheDocument();
        expect(title).toHaveAttribute('aria-label', 'Enviar JSON');
        expect(title).toHaveAttribute('aria-describedby', 'Campo destinado para upload de um arquivo JSON');
        expect(title).toHaveAttribute('tabIndex', '5');
    });

    it('Ícone de limpar', () => {
        render(<App />);

        const imagem = screen.getByAltText('Ícone de limpar');

        expect(imagem).toBeInTheDocument();

        expect(imagem).toHaveAttribute('src', 'https://img.icons8.com/ios-filled/50/818181/delete--v1.png');
    });

    it('Botão de limpar', () => {
        render(<App />);
    
        const button = screen.getByText('Limpar Conteúdo');
    
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('aria-label', 'Limpar Campo de Entrada');
        expect(button).toHaveAttribute('tabIndex', '6');
    });

    it('Seção do conteúdo do arquivo JSON', () => {
        render(<App />);
    
        const text = screen.getByText('Conteúdo do arquivo JSON');
    
        expect(text).toBeInTheDocument();
        expect(text).toHaveAttribute('aria-labelledby', 'Área de exibição do conteúdo do JSON');
        expect(text).toHaveAttribute('tabIndex', '9');
    });

    it('Pessoa desenvolvedora', () => {
        render(<App />);
    
        const text = screen.getByText('Desenvolvido com 🫀 por');
    
        expect(text).toBeInTheDocument();
        expect(text).toHaveAttribute('aria-labelledby', 'Pessoa desenvolvedora do projeto');
        expect(text).toHaveAttribute('tabIndex', '12');
    });

    it('GitHub da desenvolvedora', () => {
        render(<App />);
    
        const link = screen.getByText('Klecianny Melo');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://github.com/Kecbm');
        expect(link).toHaveAttribute('rel', 'noreferrer');
        expect(link).toHaveAttribute('target', '_blank');
    });
});
