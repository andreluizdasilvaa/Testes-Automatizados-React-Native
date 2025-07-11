import { render, fireEvent } from "@testing-library/react-native";
import App from "@/app";

describe("Teste screen App", () => {

    it("should show text in screen", () => {
        const { getByText } = render(<App />)

        expect(getByText("App contador")).toBeTruthy();
    })

    it("should change counter on press button", () => {
        const { getByText, getByTestId } = render(<App />)
        // pegamos o elemento com o texto "+"
        const button = getByText("+");

        // Clicamos/press esse elemento ( que é o botão de incrementar )
        fireEvent.press(button);

        // pegamos o elemento com o testId "counter" ( que é o display do contador )
        const counterText = getByTestId("counter");

        // e esperamos que ele seja = 1, pois clicamos nele e ele por padrão quando carrega a pagina é 0
        expect(counterText.props.children).toBe(1);
    }); 

    it("should decrease counter on clicking button", () => {
        const { getByText, getByTestId } = render(<App />);
        
        const button = getByText("-");

        fireEvent.press(button);

        const counterText = getByTestId("counter");

        expect(counterText.props.children).toBe(-1);
    })
});
