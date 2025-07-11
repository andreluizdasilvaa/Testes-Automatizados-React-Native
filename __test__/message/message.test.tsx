import { render, screen, fireEvent, act } from "@testing-library/react-native";
import Message from "@/src/Message";

describe("Component Message", () => {
    it("should render text message", () => {
        const { getByTestId } = render(<Message />)

        // Verifica se a mensagem inicial é "Aguardando..."
        // expect(getByTestId("message").props.children).toBe("Aguardando...")

        // Ao inves de usar o "getByTestId" do component 'Message', usamos o da screen renderizada. e funciona da mesma forma.
        expect(screen.getByTestId("message").props.children).toBe("Aguardando...")
    })

    it("should change message on click button", async () => {

        afterAll(() => {
            // Remove quaisquer temporizadores pendentes do sistema de temporizadores.
            // Isso significa que, se algum temporizador tiver sido agendado (mas ainda não tiver sido executado), ele será limpo e nunca mais terá a oportunidade de ser executado no futuro.
            jest.clearAllTimers();
        })

        // Como nosso teste tem o setTimeOut ( demorando 2s para o efeito clicando no btn aparecer ), usamos o jest.useFakeTimers(); que ele "avança no tempo" e não precisando esperar os 2s do setTimeOut no teste
        // https://jestjs.io/docs/timer-mocks
        jest.useFakeTimers();

        render(<Message />)

        expect(screen.getByTestId("message").props.children).toBe("Aguardando...")

        // o ACT espera todos as re-renderizações, efeitos colaterais etc, estejam concluídas antes de prosseguir, sem isso 
        // É obrigatório envolver com 'act' qualquer chamada que dispara atualizações de estado ou efeitos, no caso clicar no btn e mudar o texto
        // https://github.com/threepointone/react-act-examples/blob/master/sync.md
        act(() => {
            jest.runAllTimers();
            fireEvent.press(screen.getByText("Acessar"))
        });
        
        // Aqui ele pega o elemento com o id de teste e verifica se o children é igual a Bem vindo!
        // expect(screen.getByTestId("message").props.children).toBe("Bem vindo!")

        // Nesse ele procura na tela um texto que seja bem vindo e salva nessa variavel ( aqui pegamos o elemento )
        const text = await screen.findByText("Bem vindo!")

        // e espera que esse texto seja "Bem vindo!" ( aqui testamos o elemento )
        expect(text.props.children).toBe("Bem vindo!")

    })

})
