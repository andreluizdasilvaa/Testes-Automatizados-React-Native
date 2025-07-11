import { render, screen, fireEvent } from "@testing-library/react-native";
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
        render(<Message />)

        expect(screen.getByTestId("message").props.children).toBe("Aguardando...")

        // Clicamos no button com o title "Acessar"
        fireEvent.press(screen.getByText("Acessar"))

        // Aqui ele pega o elemento com o id de teste e verifica se o children é igual a Bem vindo!
        // expect(screen.getByTestId("message").props.children).toBe("Bem vindo!")

        // Nesse ele procura na tela um texto que seja bem vindo e salva nessa variavel ( aqui pegamos o elemento )
        const text = await screen.findByText("Bem vindo!")

        // e espera que esse texto seja "Bem vindo!" ( aqui testamos o elemento )
        expect(text.props.children).toBe("Bem vindo!")

    })

})  