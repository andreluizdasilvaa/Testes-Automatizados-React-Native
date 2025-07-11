import { Button } from "./button";
import { render, fireEvent } from "@testing-library/react-native";

// Bloco de codigo, podemos colocar testes relacionado a algo especifico
describe("Button component", () => {
    // Teste de algo especifico, no caso: "deve renderizar o botão com o texto 'Clique aqui'"
    it("should be render Button with text 'Clique aqui'", () => {
        const functionMock = jest.fn();
        // Renderiza o componente button passando o texto para ele, e uma função de mock( para testes, sem relavancia ) e extrai o texto de dentro dele,
        const { getByText } = render(<Button title="Clique aqui" onPress={functionMock} />);

        // espera que tenha um texto chamado "Clique aqui" e que o resultado reja verdadeiro do espectativa (toBeTruthy)
        expect(getByText("Clique aqui")).toBeTruthy();
 
    })

    // Teste para testar se o onPress do components está realmente funcionando, e sendo chamado
    it("should be render Button and call onPress",() => {
        const functionMock = jest.fn();
        const { getByText, getByTestId } = render(<Button title="Clique aqui" onPress={functionMock} />);

        expect(getByText("Clique aqui")).toBeTruthy();

        // faz um evento de press( clicar ) no botão com o testId "button-test"
        fireEvent.press(getByTestId("button-test"))

        // e espera que a função "functionMock" tenha sido chamada.
        expect(functionMock).toHaveBeenCalled()
    })

})