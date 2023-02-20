import {ViewProps} from "react-native";
import {Container, Title} from "./styles";

interface Props extends ViewProps {
    title: string;
    // subTitle: string;
}

export function Header({title, ...rest}: Props) {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}