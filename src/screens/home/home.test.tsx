import Home from '@/src/app/index'
import About from '@/src/app/about';
import { renderRouter, screen } from "expo-router/testing-library";
import { fireEvent } from '@testing-library/react-native';

/* 
    -- Triple AAA --
    > Arrange: Preparar o cenário, ou seja, renderizar a tela que será testada
    > Act: Ação que será feita, ou seja, clicar em um botão, ou pressionar um link
    > Assert: Verificar se o resultado esperado é o mesmo que o obtido, ou seja, se a tela foi renderizada corretamente, se o texto está correto, etc.

    > Exemplo: 
    > Arrange: renderizar a tela Home
    > Act: clicar no link "Ir para About"
    > Assert: verificar se a tela About foi renderizada corretamente verificando se o texto "Pagina Sobre" está na tela
     
*/

describe("Testing home Page", () => {
    // Verificar se o link de caminhar o user para a tela "about" aparece ao renderizar a rota
    it("should render the link to the about screen", () => {
        // renderiza a tela Home
        renderRouter({
            index: Home
        })

        // e se espera que dentro dela tenha um text com "Ir para About".
        expect(screen.getByText("Ir para About")).toBeTruthy()
    })

    // Verificando se quando o usuário realmente clica no link ele é redirecionado para /about
    it("should navigate to the /about page when clicking the link", async () => {
        // renderiza as 2 telas que esse teste dependem
        renderRouter({
            index: Home,
            about: About
        }, {
            initialUrl: "/" // A rota que vai começar o teste ( "/" -> Home )
        })

        // Clica/Press no texto da tela escrito: "Ir para About"
        fireEvent.press(screen.getByText("Ir para About"))

        // Após clicar se espera que
        expect(await screen.findByText("Pagina Sobre")).toBeTruthy();
    })

    it("should display André when clicking the Acessar Button", () => {
        renderRouter({
            index: Home
        }, {
            initialUrl: "/" // A rota que vai começar o teste ( "/" -> Home )
        })

        // Não é para aparecer o texto "André" antes de clicar no button
        expect(screen.queryByText("André")).toBeNull();

        // Pega o elemento da tela com o text = "Acessar"
        const button = screen.getByText("Acessar");

        // Clica nele
        fireEvent.press(button)

        // e espera que encontre na tela o texto "André"
        expect(screen.findByText("André")).toBeTruthy();
    })

})