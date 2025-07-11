import { render, waitFor } from "@testing-library/react-native";
import AxiosMockAdapter from 'axios-mock-adapter'
import api from "@/src/services/api";
import Game from "@/src/Game";

const mock = new AxiosMockAdapter(api)

describe("Game componet tests", () => {
    
    // Limpar os mocks a cada teste
    afterAll(() => {
        mock.reset();
    })

    it("renders game data correctly on Apí call", async () => {
        // Faz a requisição para a rota e espera um status de 200 e espera receber esses itens do objeto ( simula! ele não faz a requisição realmente, tudo simulação os dados do obj recebido tmb )
        mock.onGet("/next-api/?api=game&id=15").reply(200, {
            title: "Jogo teste 1",
            image_url: "https://sujeitoprogramador.com/next-api/foto15.png"
        })

        const { getByText, getByTestId } = render(<Game />)

        // Espera a chamada http acontecer no mock acima
        await waitFor(() => {
            expect(getByText("Jogo teste 1")).toBeTruthy();
            expect(getByTestId("avatarGame").props.source.uri)
        })
    })

    it("shoul display an error message when the api call fails", async () => {
        mock.onGet("/next-api/?api=game&id=15").networkError();

        const { findByText } = render(<Game />)

        // Esperar pela mensagem de erro na tela
        const erroMessage = await findByText("Erro ao buscar os dados");

        expect(erroMessage).toBeTruthy();
    })

})