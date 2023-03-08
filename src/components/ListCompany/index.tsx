import {ContainerTouchable, CoverImageBack, DescriptionText, Footer, NameText} from "./styles";
import {ImageSourcePropType, TouchableOpacityProps} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Theme from "../../theme";

export interface ListCompanyProps {
    id: number;
    name: string;
    description: string;
    star_hours: string;
    finish_hours: string;
    url_logo: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
    data: ListCompanyProps;
}

export function ListCompany({data, ...rest}: Props) {
    return (
        <ContainerTouchable {...rest}>
            <CoverImageBack source={{uri: data.url_logo}}>
                <LinearGradient colors={Theme.COLORS.FOOTER}>
                    <Footer>
                        <NameText>{data.name}</NameText>
                        <DescriptionText>{data.description}</DescriptionText>
                    </Footer>
                </LinearGradient>
            </CoverImageBack>
        </ContainerTouchable>
    )
}
