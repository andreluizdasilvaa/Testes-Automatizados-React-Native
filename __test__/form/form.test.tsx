import { render, fireEvent } from '@testing-library/react-native';
import Form from '@/src/Form';

describe("Component Form", () => {

    it("should call handle login with the username and password when button pressed", () => {
        const { getByText, getByPlaceholderText } = render(<Form />)

        const inputEmail = getByPlaceholderText("Digite seu email")
        const inputPassword = getByPlaceholderText("Digite sua senha")
        const button = getByText("Login")

        fireEvent.changeText(inputEmail, "teste@teste.com")
        fireEvent.changeText(inputPassword, "123123123")

        fireEvent.press(button)

        expect(getByText("Login autorizado!")).toBeTruthy();
    })

    it("should check render text user", () => {
        const { getByText, getByPlaceholderText, queryByText } = render(<Form />);

        const inputEmail = getByPlaceholderText("Digite seu email");
        const inputPassword = getByPlaceholderText("Digite sua senha");
        const button = getByText("Login");

        fireEvent.changeText(inputEmail, "usuario@teste.com");
        fireEvent.changeText(inputPassword, "123123123");

        fireEvent.press(button);

        // queryByText ele não falha quando não encontra um texto, diferente do getByText e findByText e quebram a execução dos testes se o texto não for encontrado.
        expect(queryByText("Login autorizado!")).not.toBeTruthy();
    })
});
