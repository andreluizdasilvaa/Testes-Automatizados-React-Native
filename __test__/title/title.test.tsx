import { render } from '@testing-library/react-native';
import Title from '@/src/Title';

describe("Tests Title component", () => {

    it("should render title correctly", () => {
        const { getByText } = render(<Title title='André' />)

        expect(getByText("André")).toBeTruthy();
    });

    it("should check style", () => {
        const { getByText } = render(<Title title='André' />)
        
        // Pegamos o elemento/component Title com o nome "André"
        const titleElement = getByText("André")

        // e esperamos que o style dele seja *igual a esse objeto* de estilos
        expect(titleElement.props.style).toMatchObject({
            fontSize: 28,
            color: 'red',
            marginBottom: 20
        });
    });
});
